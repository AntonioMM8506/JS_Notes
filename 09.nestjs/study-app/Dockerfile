# BASE IMAGE
FROM node:alpine

# CREATE WORKING DIRECTORY
WORKDIR /app

# Move package json files into our container
COPY package*.json ./

# Install app dependencies
RUN npm ci
RUN npm i --save-dev @nestjs/cli
RUN npm i @nestjs/config
# RUN npm ci

# Copy all the info from our app into the container
COPY . .

CMD ["npm", "run", "start:dev"]
