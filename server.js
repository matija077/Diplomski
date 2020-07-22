var http = require('http');
var express = require('express');
var cors = require('cors');

var app = express();

/**
 * how to serve statci files
 */
app.use(express.static(__dirname  + '/frontend' + '/build'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.use(cors());

/*app.use('/', (req, res, next) => {
    next();
});*/

/*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend' + 'public' + 'index.html');
});*/


app.get('/test', (req, res) => {
    require('./src/cycle');
    var dash = require('./index2').then(function resolved(result) {
        result = JSON.decycle(result);
        res.json(result);
    }).catch(function rejected(error) {
        res.status(404);
        console.log("tu 2 eror");
        console.log(error);
    });
});

/*app.get('*', (req, res) {
    res.sendFile(__dirname + '/frontend' + 'public' + 'index.html');
})*/

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
    res.json(req.body);

});

const port = process.env.port || 3000;

app.listen(port);

/*var server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Helllo</h1>');
});

server.listen(3000);*/

/*

/ signin - POST = success or fail
/ register - POST = user
/profile/:id - GET = user
/projects - GET = list of projects
/project/:id -GET = project

*/

/*app.post('/signin', (req, res) => {
    // parse it
    //body or what, JSOn or what?
    // res,json(); or res.status(code).json(error)
});

app.post('/register', (req, res) => {

});

app.post('/profile:/id', (req, res) => {
    var {id} = req.params;

});

app.post('/projects', (req, res) => {

});

app.post('/project:/id', (req, res) => {

});*/
