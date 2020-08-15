var get = require('./helperFunctionsProject');

async function getAllProjects(client, options) {
    return await get(client, options);
}

module.exports = {
    getAllProjects
};