FROM node:11.13.0

ARG NODE_ENV=tests
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.* ./

RUN npm install

COPY . .
RUN chmod +x start-e2e.sh

CMD ["./start-e2e.sh"]
