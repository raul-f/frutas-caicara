const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main/index.html'));
});

app.listen(process.env.PORT);