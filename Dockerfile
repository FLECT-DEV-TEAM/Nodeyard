FROM node:6.2.1

COPY package.json npm-shrinkwrap.json /nodeyard/
COPY scripts/ /nodeyard/scripts/

WORKDIR /nodeyard

RUN npm install && npm cache clean

VOLUME ["/nodeyard/node_modules"]
