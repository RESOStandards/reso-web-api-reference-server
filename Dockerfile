FROM tomcat:latest

COPY ./target/RESOservice-1.0.war /usr/local/tomcat/webapps/

CMD ["catalina.sh", "run"]