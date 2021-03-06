var identity1 = 'An3wozaNdgwd9aB5Z81MYkkFiuxzLNSiT9Xhko6N2zoB';
var projectID1 = '22345678901112345678901234567891';

function projectsRoute(app, {clients, options}) {
    var projectsApi = require(global.__basedir + "/src/project_routes_files/projectsApi");

    app.get('/projects', (req, res) => {
        projectsApi.getAllProjects(clients[0], options).then(
            function resolved(result) {
                require(global.__basedir + '/src/cycle');
                result = JSON.decycle(result);
                res.json(result);
            }
        ).catch(
            function rejected(error) {
                res.status(404);
                console.log(error);
        });
    });

    app.get('/projects/project/all', (req, res) => {
        var projectID = req.body.id;
        // req.params.id
        projectsApi.getAllProjectData(clients[0], options, projectID).then(
            function resolved(result) {
                require(global.__basedir + '/src/cycle');
                result = JSON.decycle(result);
                res.json(result);
        }).catch(
            function rejected(error) {
                res.status(404);
                console.log(error);
        });
    })

    app.get('/projects/project/last/:projectID/:userIndex', (req, res) => {
        var projectID = req.params.projectID;
        var userIndex = req.params.userIndex;

        projectsApi.getLatestProjectData(clients[userIndex], options, projectID).then(
            function resolved(result) {
                require(global.__basedir + '/src/cycle');
                result = JSON.decycle(result);
                res.json(result);
        }).catch(
            function rejected(error) {
                res.status(404);
                console.log(error);
        });
    })

    app.post('/projects/project/fund/:projectID/:userIndex', (req, res) => {
        var projectID = req.params.projectID;
        var userIndex = req.params.userIndex;
        var payment = req.body.payment;

        projectsApi.fundProject(
            clients[userIndex],
            options,
            projectID,
            payment
        ).then(
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