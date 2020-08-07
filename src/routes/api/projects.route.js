function projectsRoute(app, params) {
    app.get('/projects', (req, res) => {
        var dash = require(global.__basedir + '/index2').then(
            function resolved(result) {
                require(global.__basedir + '/src/cycle');
                result = JSON.decycle(result);
                res.json(result);
            }
        ).catch(function rejected(error) {
            res.status(404);
            console.log(error);
        });
    });
}

module.exports = projectsRoute;