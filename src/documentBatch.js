function DocumentBatch(createArray = [], replaceArray = [], deleteArray = []) {
    var batches = {};

    if (createArray.length) {
        batches.create = createArray;
    } else if (replaceArray.length) {
        batches.replace = replaceArray;
    } else {
        batches.delete = deleteArray;
    }

    return batches;
}

module.exports = DocumentBatch;