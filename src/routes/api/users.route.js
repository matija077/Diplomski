function usersRoute(app, {clients, options}) {
    app.get('/users/:user', (req, res) => {
        var client = clients[req.params.user];

        require(global.__basedir + '/src/cycle');
        result = JSON.decycle(client);
        res.json(result);
    })
}

module.exports = usersRoute;