function DocumentBatch(createArray = [], replaceArray = [], deleteArray = []) {
    var batches = {};

    if (createArray) {
        batches.create = createArray;
    } else if (replaceArray) {
        batches.replace = replaceArray;
    } else {
        batches.delete = deleteArray;
    }

    return batches;
}

module.exports = DocumentBatch;