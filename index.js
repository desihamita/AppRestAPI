const express = require('express');
const mongoose = require ('mongoose');
const app = express();

//menghubungkan ke database
const connectDB  = require ('./config/database');
connectDB();

//routes
app.get('/', (req, res) => {
    res.send(' we are on home ');
});

app.get('/post', (req, res) => {
    res.send(' we are on post ');
});

const PORT = process.env.port || 2000;
app.listen(PORT, console.log('server running on port 2000'))