FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm run install:all


CMD ["node", "package.json"]