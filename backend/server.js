const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', 
    password: 'kedar', 
    database: 'signup_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) throw err;
        res.send('User registered');
    });
});
app.get('/signup', (req, res) => {
    res.sendFile('/Users/kedarkanase/testing_devops/Web/frontend/signup.html');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
