# creates build to use for production
FROM node:14.15.4-alpine3.12 AS prebuild
WORKDIR /tmp/
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

# production build
FROM node:14.15.4-alpine3.12 AS build
WORKDIR /usr/src/backend/
COPY package*.json ./
RUN npm ci --only=production
COPY --from=prebuild /tmp/build ./build
ENV PORT 8080
EXPOSE 8080
CMD ["node", "./build/server.js"]
USER node