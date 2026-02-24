package org.reso.service.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.reso.service.data.mongodb.MongoDBManager;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

public class HealthServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private ObjectMapper objectMapper = new ObjectMapper();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("application/json; charset=UTF-8");
        
        Map<String, Object> healthStatus = new HashMap<>();
        healthStatus.put("status", "UP");
        healthStatus.put("timestamp", System.currentTimeMillis());
        
        try {
            // Test database connection
            MongoDBManager.getDatabase().listCollectionNames().first();
            healthStatus.put("database", "UP");
        } catch (Exception e) {
            healthStatus.put("database", "DOWN");
            healthStatus.put("status", "DOWN");
        }
        
        // Set HTTP status based on health
        if ("UP".equals(healthStatus.get("status"))) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            response.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
        }
        
        PrintWriter out = response.getWriter();
        out.print(objectMapper.writeValueAsString(healthStatus));
        out.flush();
    }
} 