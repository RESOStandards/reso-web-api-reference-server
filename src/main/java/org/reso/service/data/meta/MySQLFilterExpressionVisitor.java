package org.reso.service.data.meta;

import org.apache.olingo.commons.api.edm.EdmEnumType;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.EdmType;
import org.apache.olingo.commons.api.http.HttpStatusCode;
import org.apache.olingo.server.api.ODataApplicationException;
import org.apache.olingo.server.api.uri.*;
import org.apache.olingo.server.api.uri.queryoption.expression.BinaryOperatorKind;
import org.apache.olingo.server.api.uri.queryoption.expression.Expression;
import org.apache.olingo.server.api.uri.queryoption.expression.ExpressionVisitException;
import org.apache.olingo.server.api.uri.queryoption.expression.ExpressionVisitor;
import org.apache.olingo.server.api.uri.queryoption.expression.Literal;
import org.apache.olingo.server.api.uri.queryoption.expression.Member;
import org.apache.olingo.server.api.uri.queryoption.expression.MethodKind;
import org.apache.olingo.server.api.uri.queryoption.expression.UnaryOperatorKind;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

import static org.reso.service.data.meta.builder.DefinitionBuilder.getLookupType;
import static org.reso.service.servlet.RESOservlet.getConnection;
import static org.reso.service.servlet.RESOservlet.isMongo;

/**
 * $filter
 */
public class MySQLFilterExpressionVisitor implements ExpressionVisitor<String> {
    private static final Logger LOG = LoggerFactory.getLogger(MySQLFilterExpressionVisitor.class);
    private static final Map<BinaryOperatorKind, String> BINARY_OPERATORS = new HashMap<BinaryOperatorKind, String>() {{
        put(BinaryOperatorKind.ADD, " + ");
        put(BinaryOperatorKind.AND, " AND ");
        put(BinaryOperatorKind.DIV, " / ");
        put(BinaryOperatorKind.EQ, " = ");
        put(BinaryOperatorKind.GE, " >= ");
        put(BinaryOperatorKind.GT, " > ");
        put(BinaryOperatorKind.LE, " <= ");
        put(BinaryOperatorKind.LT, " < ");
        put(BinaryOperatorKind.MOD, " % ");
        put(BinaryOperatorKind.MUL, " * ");
        put(BinaryOperatorKind.NE, " <> ");
        put(BinaryOperatorKind.OR, " OR ");
        put(BinaryOperatorKind.SUB, " - ");
        put(BinaryOperatorKind.HAS, " has ");
    }};

   private final String       entityAlias;
   private final ResourceInfo resourceInfo;

   public MySQLFilterExpressionVisitor(ResourceInfo resourceInfo) {
      this.entityAlias = resourceInfo.getTableName();
      this.resourceInfo = resourceInfo;
   }

   @Override
   public String visitBinaryOperator(BinaryOperatorKind operator, String left, String right)
            throws ExpressionVisitException, ODataApplicationException {
      String strOperator = BINARY_OPERATORS.get(operator);

        if (strOperator == null) {
            throw new ODataApplicationException("Unsupported binary operation: " + operator.name(),
                    operator == BinaryOperatorKind.HAS ?
                            HttpStatusCode.NOT_IMPLEMENTED.getStatusCode() :
                            HttpStatusCode.BAD_REQUEST.getStatusCode(), Locale.ENGLISH);
        }
        if(strOperator.equals(" has ")){
            String[] parts = left.split("\\.");
            FieldInfo field = resourceInfo.getFieldList().stream().filter(fieldInfo -> fieldInfo.getFieldName().equals(parts[1])).findFirst().get();
            boolean isSingle = !field.isCollection() && !field.isFlags();
            String unformatted = " EXISTS (SELECT 1 FROM lookup_value AS v JOIN lookup AS l ON l.LookupKey = v.LookupKey WHERE v.FieldName = 'COLUMN_NAME' AND v.ResourceRecordKey = TABLE_NAME.PRIMARY_KEY_NAME AND l.LegacyOdataValue = " + right + ")";
            return unformatted.replaceAll("COLUMN_NAME", parts[1]).replaceAll("TABLE_NAME", parts[0]).replaceAll("PRIMARY_KEY_NAME", resourceInfo.getPrimaryKeyName());
        }
        return left + strOperator + right;
    }

   // @TODO I'm unsure where this would be called.
   @Override public String visitBinaryOperator(BinaryOperatorKind operator, String s, List<String> list)
            throws ExpressionVisitException, ODataApplicationException
   {
      String strOperator = BINARY_OPERATORS.get(operator);
      throw new ODataApplicationException("Unsupported binary operation: " + operator.name(),
                                          operator == BinaryOperatorKind.HAS ?
                                                   HttpStatusCode.NOT_IMPLEMENTED.getStatusCode() :
                                                   HttpStatusCode.BAD_REQUEST.getStatusCode(), Locale.ENGLISH);
   }

   @Override
   public String visitUnaryOperator(UnaryOperatorKind operator, String operand)
            throws ExpressionVisitException, ODataApplicationException {
      switch (operator) {
         case NOT:
            return "NOT " + operand;
         case MINUS:
            return "-" + operand;
      }
      throw new ODataApplicationException("Wrong unary operator: " + operator,
                                          HttpStatusCode.BAD_REQUEST.getStatusCode(), Locale.ENGLISH);
   }

   @Override
   public String visitMethodCall(MethodKind methodCall, List<String> parameters)
            throws ExpressionVisitException, ODataApplicationException {
        if (parameters.isEmpty() && methodCall.equals(MethodKind.NOW)) {
            return "CURRENT_DATE";
        }
        String firsEntityParam = parameters.get(0);
        switch (methodCall) {
            case CONTAINS:
                return firsEntityParam + " LIKE '%" + extractFromStringValue(parameters.get(1)) + "%'";
            case STARTSWITH:
                return firsEntityParam + " LIKE '" + extractFromStringValue(parameters.get(1)) + "%'";
            case ENDSWITH:
                return firsEntityParam + " LIKE '%" + extractFromStringValue(parameters.get(1)) + "'";
            case DAY:
                return "DAY(" + firsEntityParam + ")";
            case MONTH:
                return "MONTH(" + firsEntityParam + ")";
            case YEAR:
                return "YEAR(" + firsEntityParam + ")";
        }
        throw new ODataApplicationException("Method call " + methodCall + " not implemented",
                HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(), Locale.ENGLISH);
    }

   @Override
   public String visitLiteral(Literal literal) throws ExpressionVisitException, ODataApplicationException {
      String literalAsString = literal.getText();
      if (literal.getType() == null) {
         literalAsString = "NULL";
      }
      if (literal.getType().getFullQualifiedName().equals( EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName() ) )
      {
         return "'"+literalAsString+"'";
      }

      return literalAsString;
   }

    @Override
    public String visitMember(Member member) throws ExpressionVisitException, ODataApplicationException {
        List<UriResource> resources = member.getResourcePath().getUriResourceParts();
        List<String> segments = new ArrayList<>();
        UriResource first = resources.get(0);
        UriResource second = null;
        Iterator iterator = resources.iterator();

        if (first instanceof UriResourcePrimitiveProperty) {
            if (resources.size() == 1) {
                UriResourcePrimitiveProperty primitiveProperty = (UriResourcePrimitiveProperty) first;
                return entityAlias + "." + primitiveProperty.getProperty().getName();
            } else {
                second = resources.get(1);
            }
            if (resources.size() == 2 && second instanceof UriResourceLambdaAny) {
                UriResourcePrimitiveProperty primitiveProperty = (UriResourcePrimitiveProperty) first;
                UriResourceLambdaAny any = (UriResourceLambdaAny) second;
                String x = this.visitLambdaExpression("ANY", any.getLambdaVariable(), any.getExpression());
                return x.replaceAll("COLUMN_NAME", primitiveProperty.getProperty().getName()).replaceAll("TABLE_NAME", entityAlias).replaceAll("PRIMARY_KEY_NAME", resourceInfo.getPrimaryKeyName());
            } else if (resources.size() == 2 && second instanceof UriResourceLambdaAll) {
                UriResourcePrimitiveProperty primitiveProperty = (UriResourcePrimitiveProperty) first;
                UriResourceLambdaAll all = (UriResourceLambdaAll) second;
                String x = this.visitLambdaExpression("ALL", all.getLambdaVariable(), all.getExpression());
                return x.replaceAll("COLUMN_NAME", primitiveProperty.getProperty().getName()).replaceAll("TABLE_NAME", entityAlias).replaceAll("PRIMARY_KEY_NAME", resourceInfo.getPrimaryKeyName());
            }
        }
//        while (iterator.hasNext()) {
//            UriResource segment = (UriResource) iterator.next();
//            if (segment instanceof UriResourceLambdaAll) {
//                UriResourceLambdaAll all = (UriResourceLambdaAll) segment;
//                segments.add(this.visitLambdaExpression("ALL", all.getLambdaVariable(), all.getExpression()));
//            } else if (segment instanceof UriResourceLambdaAny) {
//                UriResourceLambdaAny any = (UriResourceLambdaAny) segment;
//                segments.add(this.visitLambdaExpression("ANY", any.getLambdaVariable(), any.getExpression()));
//            } else if (segment instanceof UriResourcePartTyped) {
//                if (segment instanceof UriResourcePrimitiveProperty) {
//                    UriResourcePrimitiveProperty primitiveProperty = (UriResourcePrimitiveProperty) segment;
//                    segments.add(entityAlias + "." + primitiveProperty.getProperty().getName());
//                } else {
////               throw new ODataApplicationException("Only primitive properties are implemented in filter expressions",
////                                                   HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(), Locale.ENGLISH);
//                }
//            }
//        }
        return segments.stream().reduce((a, b) -> a + " " + b).orElse("");
    }

    @Override
    public String visitEnum(EdmEnumType type, List<String> enumValues)
            throws ExpressionVisitException, ODataApplicationException {
       return "'"+ enumValues.get(0) +"'" ;
    }

    @Override
    public String visitLambdaExpression(String lambdaFunction, String lambdaVariable, Expression expression)
            throws ExpressionVisitException, ODataApplicationException {
        boolean isMongo = false;
        String lookupType = getLookupType();
        try {
            isMongo = isMongo(getConnection());
        } catch (Exception e) {
            LOG.error("Error checking if mongo: " + e.getMessage());
        }
        String x = expression.accept(new MySQLFilterExpressionVisitor(resourceInfo));
        String n = "NOT";
        if (lambdaFunction.equals("ANY")) {
            n = "";
        }
        if (lookupType.equals("STRING")) {
            if (isMongo)
                return n + " EXISTS (SELECT 1 FROM UNWIND(TABLE_NAME as p WITH PATH => COLUMN_NAME)  WHERE TABLE_NAME.PRIMARY_KEY_NAME = p.PRIMARY_KEY_NAME AND "+n+" COLUMN_NAME " + x + ")";
            else
                return n + "EXISTS (SELECT 1 FROM TABLE_NAME as p CROSS JOIN JSON_TABLE( p.COLUMN_NAME, '$[*]' COLUMNS ( value VARCHAR(255) PATH '$' ) ) AS jt WHERE p.PRIMARY_KEY_NAME = TABLE_NAME.PRIMARY_KEY_NAME and "+n+" value " + x + ")";
        }
        return n + " EXISTS (SELECT 1 FROM lookup_value AS v JOIN lookup AS l ON l.LookupKey = v.LookupKey WHERE v.FieldName = 'COLUMN_NAME' AND v.ResourceRecordKey = TABLE_NAME.PRIMARY_KEY_NAME AND "+n+" l.LegacyOdataValue " + x + ")";
    }

   @Override
   public String visitAlias(String aliasName) throws ExpressionVisitException, ODataApplicationException {
      throw new ODataApplicationException("Aliases are not implemented",
                                          HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(), Locale.ENGLISH);
   }

   @Override
   public String visitTypeLiteral(EdmType type) throws ExpressionVisitException, ODataApplicationException {
      throw new ODataApplicationException("Type literals are not implemented",
                                          HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(), Locale.ENGLISH);
   }

   @Override
   public String visitLambdaReference(String variableName) throws ExpressionVisitException, ODataApplicationException {
      throw new ODataApplicationException("Lambda references are not implemented",
                                          HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(), Locale.ENGLISH);
   }

   private String extractFromStringValue(String val) {
      return val.substring(1, val.length() - 1);
   }
}