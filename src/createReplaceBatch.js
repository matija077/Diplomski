var DocumentBatch = require('./documentBatch');

function createReplaceBatch(documents) {
    if (!Array.isArray(documents)) {
        documents = [documents];
    }

    var documentBatch = new DocumentBatch([], documents);

    return documentBatch;
}

module.exports = createReplaceBatch;