FROM tomcat:9.0.54
# FROM tomcat:latest # latest stopped working, Nov 2021

# Debug environment variables
ENV JPDA_ADDRESS="8000"
ENV JPDA_TRANSPORT="dt_socket"
# Default JPDA_SUSPEND to "n" for production ("y" enables debugging)
ENV JPDA_SUSPEND="n"  
ENV JPDA_OPTS="-agentlib:jdwp=transport=$JPDA_TRANSPORT,address=0.0.0.0:$JPDA_ADDRESS,server=y,suspend=$JPDA_SUSPEND"
EXPOSE 8000
EXPOSE 8080

# Not needed while volume mapped for development
# COPY ./target/core.war /usr/local/tomcat/webapps/
COPY ./target/RESODataDictionary-1.7.metadata-report.json /usr/local/tomcat/webapps/

RUN echo $JPDA_OPTS
# Run in normal or debugging mode based on JPDA_SUSPEND
CMD if [ "$JPDA_SUSPEND" = "y" ]; then catalina.sh jpda run; else catalina.sh run; fi
