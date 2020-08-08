var DocumentBatch = require('./documentBatch');

function createReplaceBatch(document) {
        var documentBatch = new DocumentBatch([], [document]);

        return documentBatch;
}

module.exports = createReplaceBatch;