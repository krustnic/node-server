const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const morgan = require('morgan');

const port = 3000;

const app = express()

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]', { stream: accessLogStream }));
// app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', function (req, res) {
    res.send('OK');
});

app.post('/', function (req, res) {
    const data = req.body;

    console.log('POST DATA:', JSON.stringify(data, null, 2));
    console.log(JSON.stringify(req.headers));

    res.send('OK');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});