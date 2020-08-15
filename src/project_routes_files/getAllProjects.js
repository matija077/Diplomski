var queryDocuments = require('../queryDocuments');

async function getAllProjects(client, options) {
    var arrayDocuments;

    try {
        arrayDocuments = await queryDocuments(
            client.platform,
            options.documentLocatorProjectOverview,
        );
    } catch(Error) {
        console.log(getAllProjects.name);
        throw Error;
    }

    return arrayDocuments;
}

module.exports = getAllProjects;