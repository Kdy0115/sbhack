FROM node:14.4.0-alpine3.12

RUN npm install -g json-server

WORKDIR /data

CMD json-server --watch data.json --port $JSON_SERVER_PORT --host 0.0.0.0