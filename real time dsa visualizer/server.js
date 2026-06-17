const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // Aapki HTML files yahan rahengi

// Register User
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    
    db.query(query, [username, email, password], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "User Registered Successfully!" });
    });
});

// Login User
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    
    db.query(query, [email, password], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length > 0) {
            res.status(200).send({ message: "Login Successful", user: results[0] });
        } else {
            res.status(401).send({ message: "Invalid Credentials" });
        }
    });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
