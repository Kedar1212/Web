FROM node:14

# Install the MySQL client package with a compatible version
RUN npm install mysql@2.18.1

WORKDIR /app
COPY ../backend/package*.json ./
RUN npm install
COPY ../backend/ ./
COPY ../frontend/ ./
EXPOSE 3000

ENV MYSQL_HOST=mysql
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=kedar
ENV MYSQL_DATABASE=signup_db

CMD ["node", "server.js"]
