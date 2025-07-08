package org.reso.tests;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.logging.Logger;
import java.util.logging.Level;

import org.junit.jupiter.api.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class LookupStringTest {
    private static final Logger LOGGER = Logger.getLogger(LookupStringTest.class.getName());

    @BeforeAll
    void setupServer() throws IOException, InterruptedException {
        LOGGER.info("=========== LookupStringTest Test Suite Starting ===========");
        LOGGER.info("Starting RESO Reference Server for String Lookup Tests...");
        System.out.println("Starting RESO Reference Server for String Lookup Tests...");

        try {
            // Log environment info
            LOGGER.info("Working directory: " + System.getProperty("user.dir"));
            LOGGER.info("Current LOOKUP_TYPE: " + System.getenv("LOOKUP_TYPE"));
            
            ProcessBuilder builder = new ProcessBuilder("docker", "compose", "up", "-d");
            builder.directory(new File(System.getProperty("user.dir")));
            
            LOGGER.info("Executing command: docker compose up -d");
            LOGGER.info("Working directory: " + builder.directory().getAbsolutePath());
            
            // Redirect error stream to capture all output
            builder.redirectErrorStream(true);
            
            Process process = builder.start();
            
            // Capture and log the output in real-time
            LOGGER.info("======= DOCKER COMPOSE OUTPUT START =======");
            System.out.println("======= DOCKER COMPOSE OUTPUT START =======");
            
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder outputBuilder = new StringBuilder();
            String line;
            
            while ((line = reader.readLine()) != null) {
                outputBuilder.append(line).append("\n");
                LOGGER.info("[DOCKER] " + line);
                System.out.println("[DOCKER] " + line);
            }
            
            int exitCode = process.waitFor();
            
            LOGGER.info("======= DOCKER COMPOSE OUTPUT END =======");
            System.out.println("======= DOCKER COMPOSE OUTPUT END =======");
            LOGGER.info("Docker compose process completed with exit code: " + exitCode);
            System.out.println("Docker compose process completed with exit code: " + exitCode);
            
            if (exitCode == 0) {
                LOGGER.info("✅ Docker compose up successful - containers started");
                System.out.println("✅ Docker compose up successful - containers started");
                
                // Show running containers
                showRunningContainers();
                
                // Wait for server to be ready with enhanced logging
                LOGGER.info("======= WAITING FOR SERVER READY =======");
                System.out.println("======= WAITING FOR SERVER READY =======");
                long startTime = System.currentTimeMillis();
                
                TestUtils.waitForServerReady();
                
                long endTime = System.currentTimeMillis();
                long duration = (endTime - startTime) / 1000;
                LOGGER.info("✅ Server is ready! Took " + duration + " seconds");
                System.out.println("✅ Server is ready! Took " + duration + " seconds");
                
            } else {
                LOGGER.severe("❌ Docker compose failed with exit code: " + exitCode);
                System.err.println("❌ Docker compose failed with exit code: " + exitCode);
                LOGGER.severe("Docker compose output:\n" + outputBuilder.toString());
                
                // Show container status for debugging
                showContainerStatus();
                
                throw new RuntimeException("Docker compose failed with exit code: " + exitCode);
            }
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "❌ Error starting docker containers", e);
            System.err.println("❌ Error starting docker containers: " + e.getMessage());
            
            // Show container status for debugging
            showContainerStatus();
            
            throw e;
        }
    }
    
    private void showRunningContainers() {
        try {
            LOGGER.info("======= RUNNING CONTAINERS =======");
            System.out.println("======= RUNNING CONTAINERS =======");
            
            ProcessBuilder psBuilder = new ProcessBuilder("docker", "ps");
            Process psProcess = psBuilder.start();
            
            BufferedReader reader = new BufferedReader(new InputStreamReader(psProcess.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                LOGGER.info("[DOCKER PS] " + line);
                System.out.println("[DOCKER PS] " + line);
            }
            
            psProcess.waitFor();
            LOGGER.info("=====================================");
            System.out.println("=====================================");
        } catch (Exception e) {
            LOGGER.warning("Failed to show running containers: " + e.getMessage());
        }
    }
    
    private void showContainerStatus() {
        try {
            LOGGER.info("======= CONTAINER STATUS (DEBUG) =======");
            System.out.println("======= CONTAINER STATUS (DEBUG) =======");
            
            ProcessBuilder psBuilder = new ProcessBuilder("docker", "ps", "-a");
            Process psProcess = psBuilder.start();
            
            BufferedReader reader = new BufferedReader(new InputStreamReader(psProcess.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                LOGGER.info("[DOCKER PS -A] " + line);
                System.out.println("[DOCKER PS -A] " + line);
            }
            
            psProcess.waitFor();
            
            // Also show logs from any failed containers
            LOGGER.info("======= CONTAINER LOGS =======");
            System.out.println("======= CONTAINER LOGS =======");
            
            ProcessBuilder logsBuilder = new ProcessBuilder("docker", "compose", "logs");
            Process logsProcess = logsBuilder.start();
            
            BufferedReader logsReader = new BufferedReader(new InputStreamReader(logsProcess.getInputStream()));
            while ((line = logsReader.readLine()) != null) {
                LOGGER.info("[DOCKER LOGS] " + line);
                System.out.println("[DOCKER LOGS] " + line);
            }
            
            logsProcess.waitFor();
            LOGGER.info("=====================================");
            System.out.println("=====================================");
        } catch (Exception e) {
            LOGGER.warning("Failed to show container status: " + e.getMessage());
        }
    }

    @Test
    @Order(1)
    void testLookupStringDD17() throws Exception {
        LOGGER.info("========== Starting testLookupStringDD17 ==========");
        LOGGER.info("Setting environment variable LOOKUP_TYPE=STRING");
        TestUtils.setEnv("LOOKUP_TYPE", "STRING");

        LOGGER.info("Running DD Test for version 1.7");
        try {
            TestUtils.runDDTest("1.7");
            LOGGER.info("Successfully completed testLookupStringDD17");
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error in testLookupStringDD17", e);
            throw e;
        }
    }

    @Test
    @Order(2)
    void testLookupStringDD20() throws Exception {
        LOGGER.info("========== Starting testLookupStringDD20 ==========");
        LOGGER.info("Setting environment variable LOOKUP_TYPE=STRING");
        TestUtils.setEnv("LOOKUP_TYPE", "STRING");

        LOGGER.info("Running DD Test for version 2.0");
        try {
            TestUtils.runDDTest("2.0");
            LOGGER.info("Successfully completed testLookupStringDD20");
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error in testLookupStringDD20", e);
            throw e;
        }
    }

    @AfterAll
    void cleanup() throws IOException, InterruptedException {
        LOGGER.info("========== Test cleanup starting ==========");
        System.out.println("Stopping RESO Reference Server...");

        ProcessBuilder builder = new ProcessBuilder(
          "docker", "compose",
          "down",            // tear down containers
          "--volumes",       // remove named & anonymous volumes
          "--remove-orphans" // clean up any stray related containers
        );
        builder.directory(new File(System.getProperty("user.dir")));
        LOGGER.info("Working directory: " + builder.directory().getAbsolutePath());
        LOGGER.info("Executing command: docker compose down --volumes --remove-orphans");

        try {
           // Capture cleanup output too
           builder.redirectErrorStream(true);
           Process process = builder.start();
           
           BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
           String line;
           while ((line = reader.readLine()) != null) {
               LOGGER.info("[CLEANUP] " + line);
               System.out.println("[CLEANUP] " + line);
           }
           
           int exitCode = process.waitFor();
           if (exitCode == 0) {
               LOGGER.info("✅ Docker compose shutdown completed successfully.");
               System.out.println("✅ Docker compose shutdown completed successfully.");
           } else {
               LOGGER.warning("⚠️ Docker compose shutdown exited with code: " + exitCode);
               System.out.println("⚠️ Docker compose shutdown exited with code: " + exitCode);
           }
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error stopping docker containers", e);
            throw e;
        }

        LOGGER.info("=========== LookupStringTest Test Suite Completed ===========");
    }
}
