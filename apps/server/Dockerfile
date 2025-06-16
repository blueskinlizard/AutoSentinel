FROM node:22

RUN apt-get update && apt-get install -y python3 python3-pip

WORKDIR /app

COPY server/package*.json ./
RUN npm install

COPY server/prisma ./prisma
RUN npx prisma generate

COPY yoloservice/requirements.txt ./yoloservice/
RUN pip3 install -r ./yoloservice/requirements.txt --break-system-packages

COPY server/. .

EXPOSE 8080

CMD ["node", "app.js"]