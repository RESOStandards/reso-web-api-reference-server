package org.reso.service.data.meta;


import org.apache.olingo.commons.api.edm.EdmEnumType;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.EdmType;
import org.apache.olingo.commons.api.http.HttpStatusCode;
import org.apache.olingo.server.api.ODataApplicationException;
import org.apache.olingo.server.api.uri.UriResource;
import org.apache.olingo.server.api.uri.UriResourcePrimitiveProperty;
import org.apache.olingo.server.api.uri.queryoption.expression.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

public class BreakdownOfFilterExpressionVisitor implements ExpressionVisitor<String>
{
   private static final Logger                          LOG              = LoggerFactory.getLogger(MySQLFilterExpressionVisitor.class);
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
   }};

   private HashMap<String,String> representations = new HashMap<>();

   private ResourceInfo resourceInfo;

   public BreakdownOfFilterExpressionVisitor(ResourceInfo resourceInfo) {
      this.resourceInfo = resourceInfo;
   }

   public HashMap<String,String> getRepresentations()
   {
      return representations;
   }

   @Override
   public String visitBinaryOperator(BinaryOperatorKind operator, String left, String right)
            throws ExpressionVisitException, ODataApplicationException
   {
      String strOperator = BINARY_OPERATORS.get(operator);

      if (strOperator == null) {
         throw new ODataApplicationException("Unsupported binary operation: " + operator.name(),
                                             operator == BinaryOperatorKind.HAS ?
                                                      HttpStatusCode.NOT_IMPLEMENTED.getStatusCode() :
                                                      HttpStatusCode.BAD_REQUEST.getStatusCode(), Locale.ENGLISH);
      }
      // ResourceName eq 'Property' becomes (=, ResourceName, Property)
      if ( "=".equals(strOperator.trim() ) )  // We only want the equals operator from the filter.  Assume all are AND ops for now if there are multiples.
      { // @TODO: Make this filter more robust for queries
         representations.put(left,right);
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
            return firsEntityParam + " LIKE '%" + extractFromStringValue(parameters.get(1));
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

      return literalAsString;
   }

   @Override
   public String visitMember(Member member) throws ExpressionVisitException, ODataApplicationException {
      List<UriResource> resources = member.getResourcePath().getUriResourceParts();

      UriResource first = resources.get(0);

      // TODO: Enum and ComplexType; joins
      if (resources.size() == 1 && first instanceof UriResourcePrimitiveProperty) {
         UriResourcePrimitiveProperty primitiveProperty = (UriResourcePrimitiveProperty) first;
         return primitiveProperty.getProperty().getName();
      } else {
         throw new ODataApplicationException("Only primitive properties are implemented in filter expressions",
                                             HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(), Locale.ENGLISH);
      }
   }

   @Override
   public String visitEnum(EdmEnumType type, List<String> enumValues)
            throws ExpressionVisitException, ODataApplicationException {
      throw new ODataApplicationException("Enums are not implemented", HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(),
                                          Locale.ENGLISH);
   }

   @Override
   public String visitLambdaExpression(String lambdaFunction, String lambdaVariable, Expression expression)
            throws ExpressionVisitException, ODataApplicationException {
      throw new ODataApplicationException("Lambda expressions are not implemented",
                                          HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(), Locale.ENGLISH);
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
