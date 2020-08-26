async function submitDocument(
    platform, documentBatch, identity) {
        var result;
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
        result = "uspjeh kreiranja dokumenta";
    }
    catch(error) {
        console.log("g=zgrejsih");
        console.log(error);
        throw(error);
    }

    return result;
}

module.exports = submitDocument;