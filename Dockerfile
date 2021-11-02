FROM tomcat:9
#FROM tomcat:latest # latest stopped working, Nov 2021

ENV JPDA_ADDRESS="*:8000"
ENV JPDA_TRANSPORT="dt_socket"

#Not needed while volume mapped for development
COPY ./target/RESOservice-1.0.war /usr/local/tomcat/webapps/
COPY ./target/RESODataDictionary-1.7.metadata-report.json /usr/local/tomcat/webapps/

CMD ["catalina.sh", "jpda", "run"]
