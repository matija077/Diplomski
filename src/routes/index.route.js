var fs = require('fs');

function router(app, params) {
    var dash = require(global.__basedir + '/index2')().then(
        function resolved(resolve) {
            fs.readdirSync('src/routes/api').forEach(file => {
                require(`./api/${file.substr(0, file.lastIndexOf('.'))}`)(app, resolve);
            });
        }
    );
}

module.exports = router;