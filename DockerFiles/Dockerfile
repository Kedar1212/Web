FROM node:14
WORKDIR /app
COPY ../backend/package*.json ./
RUN npm install
COPY ../backend/ ./
EXPOSE 3000
ENV MYSQL_HOST=mysql
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=kedar
ENV MYSQL_DATABASE=signup_db
CMD ["node", "server.js"]
