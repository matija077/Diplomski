var DocumentBatch = require('./documentBatch');

async function createDocumentBatch(platform, identity, documentProperties,
    documentLocator) {
        var documentBatch;

        try {
            const document = await platform.documents.create(
                documentLocator,
                identity,
                documentProperties
            );

            documentBatch = new DocumentBatch([document]);
        } catch(error) {
            console.log(createDocument.name);
            throw(error);
        }

        return documentBatch;
}

module.exports = createDocumentBatch;