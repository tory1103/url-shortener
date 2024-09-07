FROM node:20.11.1-alpine3.19
WORKDIR /urlshortener

COPY . .

RUN npm clean-install --loglevel verbose
RUN npm run build
RUN npm prune --production

CMD ["npm", "start"]