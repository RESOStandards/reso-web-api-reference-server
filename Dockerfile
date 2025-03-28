FROM tomcat:9
# FROM tomcat:latest # latest stopped working, Nov 2021

# Debug environment variables
ENV JPDA_ADDRESS=8000
ENV JPDA_TRANSPORT=dt_socket
ENV ENABLE_DEBUG=false
EXPOSE 8000
EXPOSE 8080

# Set up JPDA_OPTS dynamically in CMD based on ENABLE_DEBUG
CMD if [ "$ENABLE_DEBUG" = "true" ]; then \
        export JPDA_OPTS="-agentlib:jdwp=transport=$JPDA_TRANSPORT,address=0.0.0.0:$JPDA_ADDRESS,server=y,suspend=y" && \
        echo "Debugging enabled with JPDA_OPTS: $JPDA_OPTS" && \
        catalina.sh jpda run; \
    else \
        echo "Debugging disabled. Running normally." && \
        catalina.sh run; \
    fi

