async function submitDocument(
    platform, documentBatch, identity) {
    try {
        console.log("uunutra");

        /*let documentBatch;
        if (replace) {
            documentBatch = new DocumentBatch([], [document]);
        } else if (erase) {
            documentBatch = new DocumentBatch([], [], [document]);
        } else {
            documentBatch = new DocumentBatch([document]);
        }*/

        await platform.documents.broadcast(documentBatch, identity);
    }
    catch(error) {
        console.log(error);
        throw(error);
    }
}

module.exports = submitDocument;