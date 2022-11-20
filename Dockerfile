FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i

EXPOSE 8080
CMD [ "npm", "run", "dev"]