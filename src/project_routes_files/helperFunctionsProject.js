var queryDocuments = require('../queryDocuments');

async function get(client, options, queryOptions) {
    var arrayDocuments;

    try {
        arrayDocuments = await queryDocuments(
            client.platform,
            options.documentLocatorProjectOverview,
            queryOptions
        );
    } catch(Error) {
        console.log(getAllProjects.name);
        throw Error;
    }

    return arrayDocuments;
}

module.exports = get;