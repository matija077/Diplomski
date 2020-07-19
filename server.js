var http = require('http');
var express = require('express');

var app = express();

/**
 * how to serve statci files
 */
app.use(express.static(__dirname  + '/frontend' + '/public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', (req, res, next) => {
    next();
});

/*app.get('/', (req, res) => {
    res.send("<h1>Helllo</h1>");
    /**
     * URL encoded or JSON parsesrs
     */
    //req.body
    /**
     * headers
     */
    //req.header
    /**
     * params in URL
     */
    //req.params
    /**
     * get query string
     */
    //req.query

    /**
     * status
     */
    //res.status

//});


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

/**

/ signin - POST = success or fail
/ register - POST = user
/profile/:id - GET = user
/projects - GET = list of projects
/project/:id -GET = project
