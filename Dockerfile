FROM tomcat:latest

ENV JPDA_ADDRESS="*:8000"
ENV JPDA_TRANSPORT="dt_socket"
#Not needed while volume mapped for development
#COPY ./target/RESOservice-1.0.war /usr/local/tomcat/webapps/

CMD ["catalina.sh", "jpda", "run"]
