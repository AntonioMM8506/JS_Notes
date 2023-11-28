FROM node:alpine as development

# WORKING DIRECTORY
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
# COPY package*.json ./

# ONLY FOR MONO REPO WORKSPACE
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

RUN npm install

COPY apps/orders app/orders
COPY libs libs

RUN cd apps/orders && npm install

RUN npm run build orders

#FROM node:alpine as production