var http = require('http');
var express = require('express');
var cors = require('cors');

var app = express();

// set base directory into global objects for easy access
global.__basedir = __dirname;

const port = process.env.port || 3000;

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


require('./src/routes/index.route')(app);

app.listen(port);

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
