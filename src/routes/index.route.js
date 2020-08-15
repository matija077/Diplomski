var fs = require('fs');

function router(app, params) {
    fs.readdirSync('src/routes/api').forEach(file => {
        require(`./api/${file.substr(0, file.lastIndexOf('.'))}`)(app, params);
    });
}

module.exports = router;