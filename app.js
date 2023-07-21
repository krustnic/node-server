const fs = require('fs');
const path = require('path');

const express = require('express');
const morgan = require('morgan');

const port = 3000;

const app = express()

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', function (req, res) {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});