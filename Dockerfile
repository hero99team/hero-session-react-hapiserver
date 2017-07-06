# Pull base image from stock node image.
FROM node

# Maintainer
MAINTAINER Hero99 <dev@hero99.com.br>

RUN npm install -g gulp

ENV HOME=/home/app/

COPY package.json $HOME

WORKDIR $HOME
RUN npm cache clean && npm install
#RUN npm cache clean && npm install --silent --progress=false

COPY . $HOME

# Expose the node.js port to the Docker host.
#EXPOSE 8124

# This is the stock express binary to start the app.
CMD ["gulp"]
