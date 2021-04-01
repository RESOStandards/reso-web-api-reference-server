FROM tomcat:latest

#Not needed while volume mapped for development
#COPY ./target/RESOservice-1.0.war /usr/local/tomcat/webapps/

CMD ["catalina.sh", "run"]
