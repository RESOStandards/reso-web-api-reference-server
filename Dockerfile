FROM tomcat:9.0.54
# FROM tomcat:latest # latest stopped working, Nov 2021

# Debug environment variables
ENV JPDA_ADDRESS="8000"
ENV JPDA_TRANSPORT="dt_socket"
ENV ENABLE_DEBUG="false" 
ENV JPDA_SUSPEND="n"
# Dynamically set JPDA_OPTS based on debug mode
ENV JPDA_OPTS=""

EXPOSE 8000
EXPOSE 8080

# Dynamically configure JPDA_OPTS based on ENABLE_DEBUG
RUN if [ "$ENABLE_DEBUG" = "true" ]; then \
        export JPDA_SUSPEND="y" && \
        export JPDA_OPTS="-agentlib:jdwp=transport=$JPDA_TRANSPORT,address=0.0.0.0:$JPDA_ADDRESS,server=y,suspend=$JPDA_SUSPEND"; \
    else \
        export JPDA_OPTS=""; \
    fi && echo "JPDA_OPTS set to: $JPDA_OPTS"

# Run in debug or normal mode based on ENABLE_DEBUG
CMD if [ "$ENABLE_DEBUG" = "true" ]; then \
        catalina.sh jpda run; \
    else \
        catalina.sh run; \
    fi
