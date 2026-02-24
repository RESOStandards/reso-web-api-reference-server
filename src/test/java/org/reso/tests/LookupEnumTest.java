package org.reso.tests;

import org.junit.jupiter.api.*;

import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class LookupEnumTest {
  private static final Logger LOGGER = Logger.getLogger(LookupEnumTest.class.getName());

    @BeforeAll
    void setupServer() throws IOException, InterruptedException {
        LOGGER.info("=========== LookupEnumTest Test Suite Starting ===========");
        LOGGER.info("Starting RESO Reference Server for String Lookup Tests...");
        System.out.println("Starting RESO Reference Server for Enum...");

        try {
            ProcessBuilder builder = new ProcessBuilder("docker", "compose", "up", "-d");
            builder.directory(new File(System.getProperty("user.dir")));
            LOGGER.info("Working directory: " + System.getProperty("user.dir"));
            LOGGER.info("Executing command: docker compose up -d");

            Process process = builder.start();
            int exitCode = process.waitFor();
            LOGGER.info("Docker compose process completed with exit code: " + exitCode);
            
            if (exitCode == 0) {
                // Wait for server to be ready
                TestUtils.waitForServerReady();
            } else {
                throw new RuntimeException("Docker compose failed with exit code: " + exitCode);
            }
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error starting docker containers", e);
            throw e;
        }
    }

    @Test
    @Order(1)
    void testLookupEnumDD17() throws Exception {
        TestUtils.setEnv("LOOKUP_TYPE", "ENUM_COLLECTION");
        TestUtils.runDDTest("1.7");
    }

    @Test
    @Order(2)
    void testLookupEnumDD20() throws Exception {
        TestUtils.setEnv("LOOKUP_TYPE", "ENUM_COLLECTION");
        TestUtils.runDDTest("2.0");
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
        LOGGER.info("Executing command: docker-compose down --volumes --remove-orphans");

        try {
           Process process = builder.start();
           int exitCode = process.waitFor();
           if (exitCode == 0) {
               LOGGER.info("Docker compose shutdown completed successfully.");
           } else {
               LOGGER.warning("Docker compose shutdown exited with code: " + exitCode);
           }
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error stopping docker containers", e);
            throw e;
        }

        LOGGER.info("=========== LookupEnumTest Test Suite Completed ===========");
    }
}
