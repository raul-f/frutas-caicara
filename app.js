const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main/index.html'));
});

app.get('/quem-somos', (req, res) => {
    res.sendFile(path.join(__dirname, 'quem-somos/index.html'));
});

app.get('/onde-estamos', (req, res) => {
    res.sendFile(path.join(__dirname, 'onde-estamos/index.html'));
});

app.get('/fale-conosco', (req, res) => {
    res.sendFile(path.join(__dirname, 'fale-conosco/index.html'));
});

app.listen(process.env.PORT);