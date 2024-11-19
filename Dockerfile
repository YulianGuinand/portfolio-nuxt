FROM node:20

EXPOSE 3000

RUN npm install -g pnpm --ignore-scripts

WORKDIR /app

COPY package*.json ./

RUN pnpm install --ignore-scripts \
    && chown www-data:www-data /app


USER www-data

COPY . .

USER root

RUN pnpm run build

USER www-data

CMD ["node", "./.output/server/index.mjs"]