async function get(client, option, queryOptions) {
    var queryDocuments = require('../queryDocuments');
    var arrayDocuments;

    try {
        arrayDocuments = await queryDocuments(
            client.platform,
            option,
            queryOptions
        );
    } catch(error) {
        console.log(get.name);
        throw error;
    }

    return arrayDocuments;
}

async function update(client, options, latestProjectData) {
    var createReplaceBatch = require('../createReplaceBatch');
    var submitDocument = require('../submitDocument');

    var replaceBatch = createReplaceBatch(latestProjectData);

    try {
        submitDocument(
            client.platform,
            replaceBatch,
            client.identityReal
        );
    } catch(error) {
        console.log(update.name);
        throw error;
    }
}


module.exports = {
    get,
    update
};