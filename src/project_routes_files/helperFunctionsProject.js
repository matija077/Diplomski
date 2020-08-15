var queryDocuments = require('../queryDocuments');

async function get(client, option, queryOptions) {
    var arrayDocuments;

    try {
        arrayDocuments = await queryDocuments(
            client.platform,
            option,
            queryOptions
        );
    } catch(Error) {
        console.log(get.name);
        throw Error;
    }

    return arrayDocuments;
}


module.exports = {
    get,
};