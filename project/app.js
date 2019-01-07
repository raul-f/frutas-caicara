const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use('/public', express.static(path.join(__dirname, '0-static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '1-main/index.html'));
});

app.get('/quem-somos', (req, res) => {
    res.sendFile(path.join(__dirname, '2-quem-somos/index.html'));
});

app.get('/onde-estamos', (req, res) => {
    res.sendFile(path.join(__dirname, '3-onde-estamos/index.html'));
});

app.get('/fale-conosco', (req, res) => {
    res.sendFile(path.join(__dirname, '4-fale-conosco/index.html'));
});

app.listen(process.env.PORT);