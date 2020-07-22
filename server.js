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
    //res.write("wrokign on it");
    var dash = require('./index2');
    dash = JSON.stringify(dash, censor(dash))
    res.json(dash);
    //res.end();
});

function censor(censor) {
    var i = 0;

    return function(key, value) {
      if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value)
        return '[Circular]';

      /*if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';*/

      ++i; // so we know we aren't using the original object anymore

      return value;
    }
  }

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
