package org.reso.tests;

import org.junit.jupiter.api.Assertions;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.nio.file.Paths;
import java.util.Map;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.logging.Logger;
import java.util.logging.Level;
import java.util.logging.FileHandler;
import java.util.logging.SimpleFormatter;

public class TestUtils {
    private static final Logger LOGGER = Logger.getLogger(TestUtils.class.getName());
    private static final String CONFIG_FILE = "refServLocal.json";
    private static final String LIMIT = "-l 10";

    static {
        // Set up file handler for logging
        try {
            FileHandler fileHandler = new FileHandler("test-utils.log");
            fileHandler.setFormatter(new SimpleFormatter());
            LOGGER.addHandler(fileHandler);
            LOGGER.setLevel(Level.ALL);
        } catch (IOException e) {
            System.err.println("Failed to set up log file: " + e.getMessage());
        }
    }

    /**
     * Sets an environment variable dynamically within the JVM.
     *
     * @param key   The environment variable name
     * @param value The value to assign
     */
    @SuppressWarnings("unchecked")
    public static void setEnv(String key, String value) throws Exception {
        LOGGER.info("Setting environment variable: " + key + " = " + value);
        Map<String, String> env = System.getenv();
        Field field = env.getClass().getDeclaredField("m");
        field.setAccessible(true);
        Map<String, String> writableEnv = (Map<String, String>) field.get(env);
        writableEnv.put(key, value);

        System.out.println("Set environment variable: " + key + " = " + value);
    }

    /**
     * Runs the Data Dictionary test using the reso-certification-utils CLI.
     *
     * @param version The Data Dictionary version (e.g., "1.7" or "2.0")
     */
    public static void runDDTest(String version) throws IOException, InterruptedException {
        LOGGER.info("============ STARTING DD TEST FOR VERSION " + version + " ============");

        // Log system properties for diagnosing path issues
        LOGGER.info("Java Version: " + System.getProperty("java.version"));
        LOGGER.info("User Directory: " + System.getProperty("user.dir"));
        LOGGER.info("PATH Environment: " + System.getenv("PATH"));

        // Check web-api-commander path that appears in the error
        String workDir = System.getProperty("user.dir");
        String gradlewPath = workDir + "/../web-api-commander/build/libs/gradlew";
        File gradlewFile = new File(gradlewPath);
        LOGGER.info("Checking if gradlew exists at: " + gradlewPath + " - Exists: " + gradlewFile.exists());

        String lookupType = System.getenv("LOOKUP_TYPE");
        LOGGER.info("Running test with LOOKUP_TYPE = " + lookupType);
        System.out.println("Running test with LOOKUP_TYPE = " + lookupType);
        ProcessBuilder builder;

        // Build command
        String[] command;
        if (isWindows()) {
            LOGGER.info("Detected Windows OS, preparing Windows-specific command");
            command = new String[] { "cmd.exe", "/c",
                    "reso-certification-utils",
                    "runDDTests",
                    "-p", CONFIG_FILE,
                    "-v", version,
                    LIMIT, "-a" };
            builder = new ProcessBuilder(command);
        } else {
            LOGGER.info("Detected non-Windows OS, preparing standard command");
            command = new String[] {
                    "reso-certification-utils",
                    "runDDTests",
                    "-p", CONFIG_FILE,
                    "-v", version,
                    LIMIT, "-a" };
            builder = new ProcessBuilder(command);
        }

        // Log command details
        StringBuilder commandStr = new StringBuilder();
        for (String part : command) {
            commandStr.append(part).append(" ");
        }
        LOGGER.info("Executing command: " + commandStr.toString().trim());

        // Set working directory
        LOGGER.info("Working directory: " + workDir);
        builder.directory(new File(workDir));

        // Start process
        LOGGER.info("Starting process...");
        Process process = builder.start();

        // Read process output (stdout)
        LOGGER.info("Reading process output stream...");
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        StringBuilder stdoutBuilder = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            stdoutBuilder.append(line).append("\n");
            LOGGER.info("[CMD] " + line);
            System.out.println("[CMD] " + line); // Also print to console
        }

        // Read process error (stderr)
        LOGGER.info("Reading process error stream...");
        BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
        StringBuilder stderrBuilder = new StringBuilder();
        while ((line = errorReader.readLine()) != null) {
            stderrBuilder.append(line).append("\n");
            LOGGER.warning("[ERROR] " + line);
            System.err.println("[ERROR] " + line); // Also print to console
        }

        // Wait for process to complete
        LOGGER.info("Waiting for process to complete...");
        int exitCode = process.waitFor();
        LOGGER.info("Process finished with exit code: " + exitCode);
        System.out.println("Process finished with exit code: " + exitCode);

        // Log full stderr for debugging
        LOGGER.info("========= FULL STDERR =========");
        LOGGER.info(stderrBuilder.toString());

        // Check for gradlew error pattern
        if (stdoutBuilder.toString().contains("gradlew") &&
                (stdoutBuilder.toString().contains("não é reconhecido") ||
                        stdoutBuilder.toString().contains("not recognized"))) {
            LOGGER.severe("DETECTED GRADLEW EXECUTION ERROR! Check system PATH and Gradle installation");
        }

        try {
            // Get the dynamic folder path from refServLocal.json
            LOGGER.info("Retrieving dynamic folder from configuration...");
            String dynamicFolder = getDynamicFolder();
            LOGGER.info("Dynamic folder path: " + dynamicFolder);
            System.out.println("Dynamic folder path: " + dynamicFolder);

            // Build response file path
            String responsePathFull = workDir
                    + "/results/data-dictionary-"
                    + version + "/" + dynamicFolder + "/current/data-dictionary-" + version + ".json";
            LOGGER.info("Response file path: " + responsePathFull);

            // Verify response file exists
            File responseFullFile = new File(responsePathFull);
            LOGGER.info("Checking if response file exists: " + responseFullFile.exists());
            System.out.println("responseFullFile: " + responseFullFile);

            if (responseFullFile.exists()) {
                LOGGER.info("Response file found successfully");
                // Optionally log file size
                LOGGER.info("Response file size: " + responseFullFile.length() + " bytes");
            } else {
                LOGGER.severe("Response file NOT found at: " + responsePathFull);
            }

            Assertions.assertTrue(responseFullFile.exists(), "Response JSON file not found!");
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error verifying test results", e);
            throw e;
        }

        LOGGER.info("Test completed for DD version " + version);
        LOGGER.info("============ COMPLETED DD TEST FOR VERSION " + version + " ============");
        System.out.println("Test completed for DD version " + version);
    }

    /**
     * Checks if the operating system is Windows.
     *
     * @return True if running on Windows, false otherwise.
     */
    private static boolean isWindows() {
        String os = System.getProperty("os.name").toLowerCase();
        boolean isWin = os.contains("win");
        LOGGER.info("Operating system: " + os + " (isWindows=" + isWin + ")");
        return isWin;
    }

    /**
     * Reads `refServLocal.json` and extracts providerUoi, providerUsi, and
     * recipientUoi to build the dynamic folder path.
     *
     * @return The constructed folder path in the format
     *         "providerUoi-providerUsi/recipientUoi"
     */
    private static String getDynamicFolder() throws IOException {
        String jsonFilePath = System.getProperty("user.dir") + "/" + CONFIG_FILE;
        LOGGER.info("Reading configuration from: " + jsonFilePath);

        try {
            String jsonContent = new String(Files.readAllBytes(Paths.get(jsonFilePath)));
            LOGGER.fine("Configuration content loaded, length: " + jsonContent.length() + " characters");

            JsonObject jsonObject = JsonParser.parseString(jsonContent).getAsJsonObject();
            String providerUoi = jsonObject.get("providerUoi").getAsString();
            LOGGER.info("providerUoi: " + providerUoi);

            JsonObject config = jsonObject.getAsJsonArray("configs").get(0).getAsJsonObject();
            String providerUsi = config.get("providerUsi").getAsString();
            LOGGER.info("providerUsi: " + providerUsi);

            String recipientUoi = config.get("recipientUoi").getAsString();
            LOGGER.info("recipientUoi: " + recipientUoi);

            String dynamicFolder = providerUoi + "-" + providerUsi + "/" + recipientUoi;
            LOGGER.info("Constructed dynamic folder: " + dynamicFolder);
            return dynamicFolder;
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error parsing configuration file", e);
            throw e;
        }
    }

    // example: $ java -jar build/libs/web-api-commander.jar --saveGetRequest --uri
    // 'https://api.server.com/OData/Property?$filter=ListPrice gt 100000&$top=100'
    // --bearerToken abc123 --outputFile response.
    // ./gradlew testWebApiCore -D${ARG_VERSION}=${DEFAULT_WEB_API_VERSION}
    // -D${ARG_RESOSCRIPT_PATH}=/path/to/web-api-core.resoscript
    // -D${ARG_SHOW_RESPONSES}=true" +
    // java -jar build/libs/web-api-commander.jar --runRESOScript --inputFile
    // webapiserver.resoscript --generateQueries
    public static int runWebApiCoreTest() throws IOException, InterruptedException {
        LOGGER.info("============ STARTING WEB API CORE TEST ============");
        String lookupType = System.getenv("LOOKUP_TYPE");
        LOGGER.info("Running Web API Core test with LOOKUP_TYPE = " + lookupType);
        System.out.println("Running Web API Core test with LOOKUP_TYPE = " + lookupType);

        // Determine the correct command
        ProcessBuilder builder;
        if (isWindows()) {
            builder = new ProcessBuilder("cmd.exe", "/c",
                    "", "testWebApiCore ",
                    "-d", "2.1.0",
                    "-u", "http://localhost:8080");
        } else {
            builder = new ProcessBuilder(
                    "", "testWebApiCore",
                    "-d", "2.1.0",
                    "-u", "http://localhost:8080");
        }

        builder.directory(new File(System.getProperty("user.dir")));
        LOGGER.info("Starting Web API Core test process...");
        Process process = builder.start();

        // Capture output for debugging
        LOGGER.info("Reading process output...");
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        reader.lines().forEach(line -> {
            LOGGER.info("[WEB API] " + line);
            System.out.println(line);
        });

        // Capture errors
        LOGGER.info("Reading process errors...");
        BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
        errorReader.lines().forEach(line -> {
            LOGGER.warning("[WEB API ERROR] " + line);
            System.err.println(line);
        });

        // Wait for process to finish
        LOGGER.info("Waiting for process to complete...");
        int exitCode = process.waitFor();
        LOGGER.info("Web API Core Test exited with code: " + exitCode);
        System.out.println("Web API Core Test exited with code: " + exitCode);
        LOGGER.info("============ COMPLETED WEB API CORE TEST ============");

        return exitCode;
    }

    public static void waitForServerReady() throws IOException, InterruptedException {
        LOGGER.info("Waiting for server to be ready...");
        int maxAttempts = 24; // 2 minutes with 5-second intervals
        int attempt = 0;
        
        while (attempt < maxAttempts) {
            try {
                // Test health endpoint to verify server is ready
                ProcessBuilder curlBuilder = new ProcessBuilder(
                    "curl", "-s", "-w", "%{http_code}", "-X", "GET", "http://localhost:8080/core/health"
                );
                
                Process curlProcess = curlBuilder.start();
                BufferedReader reader = new BufferedReader(new InputStreamReader(curlProcess.getInputStream()));
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                
                int curlExitCode = curlProcess.waitFor();
                String responseStr = response.toString();
                
                if (curlExitCode == 0 && responseStr.contains("200")) {
                    LOGGER.info("Server is ready! Health endpoint responded successfully.");
                    return;
                }
                
                LOGGER.info("Attempt " + (attempt + 1) + "/" + maxAttempts + " - Server not ready yet. Response: " + responseStr);
                
            } catch (Exception e) {
                LOGGER.info("Attempt " + (attempt + 1) + "/" + maxAttempts + " - Error checking server: " + e.getMessage());
            }
            
            attempt++;
            if (attempt < maxAttempts) {
                Thread.sleep(5000); // Wait 5 seconds before next attempt
            }
        }
        
        throw new RuntimeException("Server failed to become ready within timeout period");
    }
}
