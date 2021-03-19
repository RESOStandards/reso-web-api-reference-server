FROM java:8

COPY ./temp/spring-server-generated/target/swagger-spring-1.0.0.jar reso.jar

ENTRYPOINT ["java","-jar","reso.jar"]