FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

RUN npm install -g prisma

COPY . .

CMD ["sh", "-c", "mkdir -p storage/uploads && mkdir -p storage/processed && npm run db:init && npx prisma generate && npm run dev"]