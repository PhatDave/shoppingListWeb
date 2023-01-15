FROM ubuntu
WORKDIR /app
ADD ./dist /app/dist/
ADD ./server.exe /app/
EXPOSE 5000

ENTRYPOINT ["/app/server.exe"]
