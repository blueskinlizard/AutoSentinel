FROM node:22

# Install Python + pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Set working dir
WORKDIR /app

# Node dependencies
COPY package*.json ./
RUN npm install

# Prisma
COPY prisma ./prisma
RUN npx prisma generate

# App files
COPY . .

COPY yoloservice/requirements.txt ./yoloservice/
RUN pip3 install -r ./yoloservice/requirements.txt

EXPOSE 8080

CMD ["node", "app.js"]