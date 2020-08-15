var identity1 = 'An3wozaNdgwd9aB5Z81MYkkFiuxzLNSiT9Xhko6N2zoB';
var projectID1 = '22345678901112345678901234567891';

function projectsRoute(app, {clients, options}) {
    var projectsApi = require(global.__basedir + "/src/project_routes_files/projectsApi");

    app.get('/projects', (req, res) => {
            projectsApi.getLatestProjectData(clients[0], options, projectID1).then(
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