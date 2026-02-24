package org.reso.tests;

import org.junit.jupiter.api.*;

import org.apache.http.Header;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicHeader;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ExpandUtilsTest {
    private static final Logger LOGGER = Logger.getLogger(ExpandUtilsTest.class.getName());
    private static final String BASE_URL = "http://localhost:8080/core/2.0.0";
    private static final String ACCESS_TOKEN = "reso-test-token";
    private static final String NAVIGATIONS_CONFIGS_FILE = "/ExpandNavigationConfig.json";
    private ObjectMapper mapper = new ObjectMapper();

    @BeforeAll
    void setupServer() throws IOException, InterruptedException {
        LOGGER.info("Starting RESO Reference Server for Web API Core...");
        ProcessBuilder builder = new ProcessBuilder(
                isWindows() ? new String[] { "cmd.exe", "/c", "docker-compose up -d" }
                        : new String[] { "docker-compose", "up", "-d" });
        builder.directory(new File(System.getProperty("user.dir")));
        Process process = builder.start();
        process.waitFor();
        waitServerAvailable();
    }

    @Test
    public void testExpandNavigationProperties() throws Exception {
        InputStream configsInputStream = getClass().getResourceAsStream(NAVIGATIONS_CONFIGS_FILE);
        assertNotNull(configsInputStream, "ExpandNavigationConfig.json does not exists in the resources folder.");

        Map<String, List<NavigationConfig>> dictionary = mapper.readValue(
            configsInputStream, new TypeReference<Map<String, List<NavigationConfig>>>() {
                });

        for (Map.Entry<String, List<NavigationConfig>> entry : dictionary.entrySet()) {
            String sourceResource = entry.getKey();
            List<NavigationConfig> navConfigs = entry.getValue();

            for (NavigationConfig navConfig : navConfigs) {
                String navProperty = navConfig.getNavProperty();
                String requestUrl = BASE_URL + "/" + sourceResource + "?$expand=" + navProperty;

                LOGGER.info("Requesting: " + requestUrl);
                CloseableHttpResponse response = sendGetRequest(requestUrl, ACCESS_TOKEN);

                int status = response.getStatusLine().getStatusCode();

                if (status == 404) {
                    LOGGER.info("Skipping " + sourceResource + " with expand " + navProperty
                            + ": resource not found (404).");
                    continue;
                }

                assertEquals(status, HttpStatus.SC_OK, "Request " + requestUrl + " failes with status code: " + status );

                InputStream responseBodyInputStream = response.getEntity().getContent();
                String responseBody = convertStreamToString(responseBodyInputStream);

                validateResponseBody(responseBody, requestUrl, navProperty);
            }
        }
    }

    @SuppressWarnings("unchecked")
    private void validateResponseBody(String responseBody, String requestUrl, String navProperty)
            throws JsonMappingException, JsonProcessingException {

        Map<String, Object> jsonResponse = mapper.readValue(
                responseBody, new TypeReference<Map<String, Object>>() {
                });

        Object valueObj = jsonResponse.get("value");
        assertNotNull(valueObj, "'value' is null for " + requestUrl);

        List<?> items = (List<?>) valueObj;

        // If there is data, each object must have the expanded navProperty key.
        if (!items.isEmpty()) {
            for (Object itemObj : items) {
                Map<String, Object> item = (Map<String, Object>) itemObj;
                assertTrue(item.containsKey(navProperty), "Expanded object from " + requestUrl +
                        " does not contain key '" + navProperty + "'.");
            }
        } else {
            LOGGER.info("No data returned for " + requestUrl + " (empty array).");
        }
    }

    private CloseableHttpResponse sendGetRequest(String requestUrl, String accessToken)
            throws ClientProtocolException, IOException {

        HttpGet get = new HttpGet(requestUrl);

        BasicHeader authHeader = new BasicHeader("Authorization", "Bearer " + accessToken);
        List<Header> headers = new ArrayList<>();
        headers.add(authHeader);

        return HttpClientBuilder
                .create()
                .setDefaultHeaders(headers)
                .build()
                .execute(get);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class NavigationConfig {
        private String navProperty;

        public String getNavProperty() {
            return navProperty;
        }

        public void setNavProperty(String navProperty) {
            this.navProperty = navProperty;
        }
    }

    private String convertStreamToString(InputStream is) throws Exception {
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(is, StandardCharsets.UTF_8))) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }
        return sb.toString();
    }

    private void waitServerAvailable() throws InterruptedException {
        int maxRetries = 10;
        int retryCount = 0;
        boolean serviceUp = false;
        while (!serviceUp && retryCount < maxRetries) {
            try {
                String requestUrl = BASE_URL + "/$metadata";
                sendGetRequest(requestUrl, ACCESS_TOKEN);
                serviceUp = true;
                LOGGER.info("Service is ready.");
            } catch (IOException e) {
                // // Service not yet up, wait and try again
                LOGGER.info("Service not ready yet.");
            }
            if (!serviceUp) {
                retryCount++;
                Thread.sleep(1000);
            }
        }
    }

    /**
     * Checks if the operating system is Windows.
     *
     * @return True if running on Windows, false otherwise.
     */
    private static boolean isWindows() {
        return System.getProperty("os.name").toLowerCase().contains("win");
    }

    @AfterAll
    void cleanup() throws IOException, InterruptedException {
        LOGGER.info("Stopping RESO Reference Server...");
        ProcessBuilder builder = new ProcessBuilder(
                isWindows() ? new String[] { "cmd.exe", "/c", "docker-compose down" }
                        : new String[] { "docker-compose", "down" });
        builder.directory(new File(System.getProperty("user.dir")));
        Process process = builder.start();
        process.waitFor();
    }
}
