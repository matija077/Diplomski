var DocumentBatch = require('./documentBatch');

function createDocumentBatch(documents) {
    if (!Array.isArray(documents)) {
        documents = [documents];
    }

    var documentBatch = new DocumentBatch([], [], documents);

    return documentBatch;
}

module.exports = createDocumentBatch;