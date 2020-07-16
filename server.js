var http = require('http');
var express = require('express');

var app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', (req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.send("<h1>Helllo</h1>");
});

app.post('/test', (req, res) => {
    //console.log(req)
    res.send(req.body);

});

app.listen(3000);

/*var server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Helllo</h1>');
});

server.listen(3000);*/