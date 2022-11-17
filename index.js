//setup
const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

let fs = require('fs');

app.get('/', async (req, res) => {
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});