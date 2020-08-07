function testRoute(app, params) {
    app.get('/test', (req, res) => {
        require(global.__basedir + '/src/cycle');
        var dash = require(global.__basedir + '/index2').then(function resolved(result) {
            result = JSON.decycle(result);
            //console.log(result);
            res.json(result);
        }).catch(function rejected(error) {
            res.status(404);
            console.log("tu 2 eror");
            console.log(error);
        });
    });

    app.post('/test', (req, res) => {
        //console.log(req)
        res.json(req.body);

    });
}

module.exports = testRoute;
