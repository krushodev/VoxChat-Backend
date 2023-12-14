FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

CMD ["yarn", "build"]

CMD ["yarn", "start"]