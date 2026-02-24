package org.reso.tests;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import java.util.stream.Stream;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class WebApiCoreTest {

    private static final List<String> LOOKUP_TYPES = Arrays.asList("ENUM_FLAGS", "ENUM_COLLECTION", "STRING");

    @BeforeAll
    void setupServer() throws IOException, InterruptedException {
        System.out.println("Starting RESO Reference Server for Web API Core...");
        ProcessBuilder builder = new ProcessBuilder(
                isWindows() ? new String[] { "cmd.exe", "/c", "docker-compose up -d" }
                        : new String[] { "docker-compose", "up", "-d" });
        builder.directory(new File(System.getProperty("user.dir")));
        Process process = builder.start();
        process.waitFor();
    }

    /**
     * Parameterized test for different lookup types
     *
     * @param lookupType The lookup type to test
     */
    @ParameterizedTest
    @MethodSource("lookupTypes")
    @Order(1)
    void testWebApiCoreForLookupType(String lookupType) throws Exception {
        // Set the lookup type dynamically
        TestUtils.setEnv("LOOKUP_TYPE", lookupType);
        System.out.println("Testing Web API Core with LOOKUP_TYPE = " + lookupType);

        // Run the test
        int exitCode = TestUtils.runWebApiCoreTest();

        // Assert successful execution
        Assertions.assertEquals(0, exitCode, "Web API Core test failed for LOOKUP_TYPE: " + lookupType);
    }

    /**
     * Provides lookup type values for parameterized testing
     */
    private static Stream<String> lookupTypes() {
        return Stream.of("STRING", "ENUM_FLAGS", "ENUM_COLLECTION");
    }

    @AfterAll
    void cleanup() throws IOException, InterruptedException {
        System.out.println("Stopping RESO Reference Server...");
        ProcessBuilder builder = new ProcessBuilder(
                isWindows() ? new String[] { "cmd.exe", "/c", "docker-compose down" }
                        : new String[] { "docker-compose", "down" });
        builder.directory(new File(System.getProperty("user.dir")));
        Process process = builder.start();
        process.waitFor();
    }

    private static boolean isWindows() {
        return System.getProperty("os.name").toLowerCase().contains("win");
    }
}
