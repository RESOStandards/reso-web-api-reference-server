package org.reso.service.data.meta;

import org.apache.olingo.commons.api.edm.Edm;
import org.apache.olingo.commons.api.edm.EdmEnumType;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.EdmType;
import org.apache.olingo.commons.api.http.HttpStatusCode;
import org.apache.olingo.server.api.ODataApplicationException;
import org.apache.olingo.server.api.uri.UriResource;
import org.apache.olingo.server.api.uri.UriResourceLambdaAll;
import org.apache.olingo.server.api.uri.UriResourceLambdaAny;
import org.apache.olingo.server.api.uri.UriResourceLambdaVariable;
import org.apache.olingo.server.api.uri.UriResourcePrimitiveProperty;
import org.apache.olingo.server.api.uri.queryoption.expression.*;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.reso.service.data.GenericEntityCollectionProcessor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mongodb.client.model.Filters;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.Instant;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.Calendar;
import java.util.TimeZone;

public class MongoDBFilterExpressionVisitor implements ExpressionVisitor<String> {
    private static final Logger LOG = LoggerFactory.getLogger(GenericEntityCollectionProcessor.class);
    private final String entityAlias;
    private final ResourceInfo resourceInfo;

    public MongoDBFilterExpressionVisitor(ResourceInfo resourceInfo) {
        this.entityAlias = resourceInfo.getTableName();
        this.resourceInfo = resourceInfo;
    }

    @Override
    public String visitBinaryOperator(BinaryOperatorKind operator, String left, String right)
            throws ExpressionVisitException, ODataApplicationException {
        LOG.info("Binary Operator - Kind: {}, Left: {}, Right: {}", operator, left, right);

        // Remove '{collectionName}.' prefix from left and right sides
        left = left.replace(entityAlias + ".", "").trim();
        right = right.replace(entityAlias + ".", "").trim(); // Ensure right side is also sanitized

        LOG.info("Sanitized Left: {}, Sanitized Right: {}", left, right); // Debug logging

        // Check if left or right is empty after sanitization
        if (left.isEmpty() || right.isEmpty()) {
            throw new ODataApplicationException("Invalid filter expression: left or right side is empty.",
                    HttpStatusCode.BAD_REQUEST.getStatusCode(), Locale.ENGLISH);
        }

        if (operator == BinaryOperatorKind.AND) {
            Document leftDoc = Document.parse(left);
            Document rightDoc = Document.parse(right);
            LOG.info("AND operation - Left Doc: {}, Right Doc: {}", leftDoc.toJson(), rightDoc.toJson());
            return new Document("$and", Arrays.asList(Document.parse(left), Document.parse(right))).toJson();
        }

        String mongoOperator;
        switch (operator) {
            case EQ:
                mongoOperator = "$eq";
                break;
            case NE:
                mongoOperator = "$ne";
                break;
            case GT:
                mongoOperator = "$gt";
                break;
            case LT:
                mongoOperator = "$lt";
                break;
            case LE:
                mongoOperator = "$lte";
                break;
            case GE:
                mongoOperator = "$gte";
                break;
            case HAS:
                mongoOperator = "$all";
                break;
            case AND:
                return new Document("$and", Arrays.asList(Document.parse(left), Document.parse(right))).toJson();
            case OR:
                return new Document("$or", Arrays.asList(Document.parse(left), Document.parse(right))).toJson();
            default:
                throw new ODataApplicationException(
                        "Unsupported operator: " + operator,
                        HttpStatusCode.BAD_REQUEST.getStatusCode(),
                        Locale.ENGLISH);
        }

        boolean isIntegerField = false;
        boolean isDecimalField = false;
        boolean isDateTimeOffsetField = false;
        boolean isDateField = false;
        boolean isCollectionField = false;
        boolean isEnumField = false;

        FieldInfo targetField = null;
        if (resourceInfo.getFieldList() != null) {
            for (FieldInfo field : resourceInfo.getFieldList()) {
                if (field.getFieldName().equals(left)) {
                    targetField = field;
                    if (field.getType().equals(EdmPrimitiveTypeKind.Int32.getFullQualifiedName()) ||
                            field.getType().equals(EdmPrimitiveTypeKind.Int64.getFullQualifiedName())) {
                        isIntegerField = true;
                    } else if (field.getType().equals(EdmPrimitiveTypeKind.Decimal.getFullQualifiedName()) ||
                            field.getType().equals(EdmPrimitiveTypeKind.Double.getFullQualifiedName()) ||
                            field.getType().equals(EdmPrimitiveTypeKind.Single.getFullQualifiedName())) {
                        isDecimalField = true;
                    } else if (field.getType().equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName())) {
                        isDateTimeOffsetField = true;
                    } else if (field.getType().equals(EdmPrimitiveTypeKind.Date.getFullQualifiedName())) {
                        isDateField = true;
                    } else if (field.isCollection()) {
                        isCollectionField = true;
                    }
                    if (field instanceof EnumFieldInfo) {
                        isEnumField = true;
                    }
                    break;
                }
            }
        }

        Object rightValue = right;
        if(right == "NULL") {
          rightValue = null;
        } else {
          if (isEnumField) {
              rightValue = right.substring(right.indexOf("'") + 1, right.lastIndexOf("'"));
          }
          try {
              if (isIntegerField) {
                  rightValue = Long.parseLong(right.trim());
              } else if (isDecimalField) {
                  rightValue = Double.parseDouble(right.trim());
              } else if (isDateTimeOffsetField) {
                  right = right.trim().replace("'", "").replace("\"", "");
                  if (right.matches("^\\d+$")) { // timestamp millis
                      rightValue = new Date(Long.parseLong(right));
                  } else {
                      rightValue = Date.from(Instant.parse(right));
                  }
              } else if (isDateField) {
                  right = right.trim().replace("'", "").replace("\"", "");
                  try {
                      SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                      dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
                      dateFormat.setLenient(false);
                      Date parsedDate = dateFormat.parse(right);

                      // For MongoDB queries, we need to set the time to midnight UTC
                      Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
                      cal.setTime(parsedDate);
                      cal.set(Calendar.HOUR_OF_DAY, 0);
                      cal.set(Calendar.MINUTE, 0);
                      cal.set(Calendar.SECOND, 0);
                      cal.set(Calendar.MILLISECOND, 0);
                      rightValue = cal.getTime();

                      LOG.info("Parsed date value for MongoDB query: {}", rightValue);
                  } catch (ParseException e) {
                      throw new ODataApplicationException(
                              "Invalid date format for field '" + left + "'. Expected format: yyyy-MM-dd",
                              HttpStatusCode.BAD_REQUEST.getStatusCode(),
                              Locale.ENGLISH,
                              e);
                  }
              } else {
                  rightValue = right.replace("'", "").replace("\"", "");
              }
          } catch (Exception e) {
              throw new ODataApplicationException(
                      "Invalid value for field '" + left + "': " + right,
                      HttpStatusCode.BAD_REQUEST.getStatusCode(),
                      Locale.ENGLISH,
                      e);
          }
        }    
        Document comparison;
        if (operator == BinaryOperatorKind.HAS) {
            if (isCollectionField) {
                if (isEnumField) {
                    // For enum collections, we use $in to check if the value exists in the array
                    comparison = new Document(left, new Document("$in", Arrays.asList(rightValue)));
                    LOG.info("Has Filter for enum: {}", comparison.toJson());
                } else {
                    // For non-enum collections, use $elemMatch
                    comparison = new Document(left, new Document("$elemMatch", new Document("$eq", rightValue)));
                    LOG.info("Has Filter for non-enum: {}", comparison.toJson());
                }
            } else {
                throw new ODataApplicationException(
                        "Operator 'has' can only be used with collection fields.",
                        HttpStatusCode.BAD_REQUEST.getStatusCode(),
                        Locale.ENGLISH);
            }
        } else {
            comparison = new Document(left, new Document(mongoOperator, rightValue));
        }

        LOG.info("MongoDB Filter Expression: {}", comparison.toJson());

        return comparison.toJson();
    }

    @Override
    public String visitBinaryOperator(BinaryOperatorKind operator, String s, List<String> list)
            throws ExpressionVisitException, ODataApplicationException {
        // String strOperator = BINARY_OPERATORS.get(operator);
        throw new ODataApplicationException("Unsupported binary operation: " + operator.name(),
                operator == BinaryOperatorKind.HAS ? HttpStatusCode.NOT_IMPLEMENTED.getStatusCode()
                        : HttpStatusCode.BAD_REQUEST.getStatusCode(),
                Locale.ENGLISH);
    }

    @Override
    public String visitUnaryOperator(UnaryOperatorKind operator, String operand)
            throws ExpressionVisitException, ODataApplicationException {
        switch (operator) {
            case NOT:
                return new Document("$nor", Arrays.asList(Document.parse(operand))).toJson();
            case MINUS:
                return "-" + operand;
            default:
                throw new ODataApplicationException("Unsupported unary operator: " + operator.name(),
                        HttpStatusCode.BAD_REQUEST.getStatusCode(), Locale.ENGLISH);
        }
    }

    @Override
    public String visitMethodCall(MethodKind methodCall, List<String> parameters)
            throws ExpressionVisitException, ODataApplicationException {

        if (methodCall == MethodKind.NOW) {
            return String.valueOf(System.currentTimeMillis());
        }

        throw new ODataApplicationException("Unsupported method call: " + methodCall.name(),
                HttpStatusCode.NOT_IMPLEMENTED.getStatusCode(), Locale.ENGLISH);
    }

    @Override
    public String visitLiteral(Literal literal) throws ExpressionVisitException, ODataApplicationException {
        String literalAsString = literal.getText();
        if (literal.getType() == null) {
            return "NULL";
        }

        // Handle both DateTimeOffset and Date types
        if (literal.getType().getFullQualifiedName().equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName())
                ||
                literal.getType().getFullQualifiedName().equals(EdmPrimitiveTypeKind.Date.getFullQualifiedName())) {
            // Remove quotes if present
            literalAsString = literalAsString.replace("'", "").replace("\"", "");
            try {
                // Validate the date format
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                dateFormat.setLenient(false);
                // Parse to validate
                dateFormat.parse(literalAsString);
                // For MongoDB queries, we need to wrap the date in quotes
                return "'" + literalAsString + "'";
            } catch (ParseException e) {
                LOG.error("Invalid date format for literal: {}", literalAsString);
                throw new ODataApplicationException(
                        "Invalid date format. Expected format: yyyy-MM-dd",
                        HttpStatusCode.BAD_REQUEST.getStatusCode(),
                        Locale.ENGLISH,
                        e);
            }
        }

        // Debug logging for literals
        LOG.info("Processing Literal: {}", literalAsString);
        return literalAsString.replace(entityAlias + ".", ""); // Remove '{collectionName}.' prefix if it exists
    }

    @Override
    public String visitMember(Member member) throws ExpressionVisitException, ODataApplicationException {
        List<UriResource> resources = member.getResourcePath().getUriResourceParts();
        UriResource first = resources.get(0);
        List<String> segments = new ArrayList<>();
        UriResource second = null;

        if (first instanceof UriResourcePrimitiveProperty) {

            UriResourcePrimitiveProperty primitiveProperty = (UriResourcePrimitiveProperty) first;
            String propertyName = primitiveProperty.getProperty().getName();
            if (resources.size() == 1) {
                return entityAlias + "." + primitiveProperty.getProperty().getName();
            } else {
                second = resources.get(1);
            }

            if (resources.size() == 2 && second instanceof UriResourceLambdaAny) {

                UriResourceLambdaAny any = (UriResourceLambdaAny) second;
                String x = this.visitLambdaExpression("ANY", any.getLambdaVariable(), any.getExpression());
                return x.replaceAll("enum", primitiveProperty.getProperty().getName());
            } else if (resources.size() == 2 && second instanceof UriResourceLambdaAll) {
                UriResourceLambdaAll all = (UriResourceLambdaAll) second;
                String x = this.visitLambdaExpression("ALL", all.getLambdaVariable(), all.getExpression());
                x += " }}";
                x = x.replaceAll("enum", primitiveProperty.getProperty().getName());
                x = x.replaceFirst("\\$eq", "\\$not\": { \"\\$elemMatch\": { \"\\$ne");
                LOG.info("x: " + x);
                return x;
            }

        } else if (first instanceof UriResourceLambdaVariable) {
            return ((UriResourceLambdaVariable) first).getVariableName();
        }
        return segments.stream().reduce((a, b) -> a + " " + b).orElse("");
    }

    @Override
    public String visitEnum(EdmEnumType type, List<String> enumValues)
            throws ExpressionVisitException, ODataApplicationException {
        return "'" + enumValues.get(0) + "'";
    }

    @Override
    public String visitLambdaExpression(String lambdaFunction, String lambdaVariable, Expression expression)
            throws ExpressionVisitException, ODataApplicationException {
        LOG.info("Lambda Expression Processing:");
        LOG.info("  Function: {}", lambdaFunction);
        LOG.info("  Variable: {}", lambdaVariable);
        LOG.info("  Expression: {}", expression);

        if ("all".toUpperCase().equals(lambdaFunction.toUpperCase())
                || "any".toUpperCase().equals(lambdaFunction.toUpperCase())) {
            try {
                // Extract field name and value from the expression
                String fieldName = null;
                String value = null;

                // The field name should come from the parent context where the lambda is used
                // We'll pass it through string replacement later with COLUMN_NAME placeholder
                fieldName = "COLUMN_NAME"; // This will be replaced later when processing the member

                LOG.info("  Field name: {}", fieldName);

                // Find the corresponding field info
                FieldInfo targetField = null;
                if (fieldName != null && this.resourceInfo.getFieldList() != null) {
                    for (FieldInfo field : this.resourceInfo.getFieldList()) {
                        if (field.getFieldName().equals(fieldName)) {
                            targetField = field;
                            break;
                        }
                    }
                }

                if (targetField != null && targetField.isCollection()) {
                    Document query = new Document();

                    // Get the value being compared against
                    String result = expression.accept(this);
                    if (targetField instanceof EnumFieldInfo) {
                        value = result.substring(result.indexOf("'") + 1, result.lastIndexOf("'"));
                    } else {
                        // For string collections, remove property. prefix and quotes
                        value = result.replace(entityAlias + ".", "").trim().replace("'", "");
                    }
                    LOG.info("  Value to match: {}", value);

                    // Create appropriate MongoDB query based on the lambda function
                    if ("all".equals(lambdaFunction)) {
                        query.put(fieldName, new Document("$all", Arrays.asList(value)));
                    } else { // "any"
                        query.put(fieldName, value);
                    }
                    LOG.info("  Generated query: {}", query.toJson());

                    return query.toJson();
                }
            } catch (Exception e) {
                LOG.error("Error processing lambda expression", e);
                throw new ODataApplicationException(
                        "Error processing lambda expression: " + e.getMessage(),
                        HttpStatusCode.INTERNAL_SERVER_ERROR.getStatusCode(),
                        Locale.ENGLISH);
            }
        }

        // Get the value being compared against
        String result = expression.accept(this);
        return result;
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
