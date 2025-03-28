package org.reso.service.data.definition;

// Supports querying for the custom "Field" resource implementation
public class FilterCondition {
    private String operator;
    private String value;

    public FilterCondition(String operator, String value) {
        this.operator = operator;
        this.value = value;
    }

    public String getOperator() {
        return operator;
    }

    public String getValue() {
        return value;
    }
}
