FROM node:latest

#COPY nginx /etc/nginx/
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9060

COPY .next ./.next

CMD ["npm","run", "dev"]