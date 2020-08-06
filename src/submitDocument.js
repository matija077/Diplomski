var DocumentBatch = require('./documentBatch');

async function submitDocument(
    platform, identityID, documentProperties,
    documentLocator) {
    try {
        console.log("uunutra");
        const identity = await platform.identities.get(identityID);

        const document = await platform.documents.create(
            documentLocator,
            identity,
            documentProperties
        );

        const documentBatch = new DocumentBatch([document]);

        await platform.documents.broadcast(documentBatch, identity);
    }
    catch(error) {
        console.log(error);
        throw(error);
    }
}

module.exports = submitDocument;