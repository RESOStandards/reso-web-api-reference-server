FROM java:8

#COPY /build/reso.jar

ENTRYPOINT ["java","-jar","reso.jar"]