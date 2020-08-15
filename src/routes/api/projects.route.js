var identity1 = 'An3wozaNdgwd9aB5Z81MYkkFiuxzLNSiT9Xhko6N2zoB';

function projectsRoute(app, {clients, options}) {
    //console.log(params);
    app.get('/projects', (req, res) => {
        var documents = require(global.__basedir +
            "/src/project_routes_files/getAllProjects")(clients[0], options).then(
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

    app.post('/projects', (req, res) => {
        console.log(app._router.stack);
        console.log(req.body);
        var {id} = req.body.id;
        id = identity1;

        var dash = require(global.__basedir + '/index2')(id).then(
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