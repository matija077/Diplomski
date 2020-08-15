async function submitDocument(
    platform, documentBatch, identity) {
    try {
        /*let documentBatch;
        if (replace) {
            documentBatch = new DocumentBatch([], [document]);
        } else if (erase) {
            documentBatch = new DocumentBatch([], [], [document]);
        } else {
            documentBatch = new DocumentBatch([document]);
        }*/

        await platform.documents.broadcast(documentBatch, identity);
        console.log("uspjeh kreiranaj dokumenata");
    }
    catch(error) {
        console.log("g=zgrejsih");
        console.log(error);
        throw(error);
    }
}

module.exports = submitDocument;