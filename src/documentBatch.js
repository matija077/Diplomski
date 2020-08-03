function DocumentBatch(createArray = [], replaceArray = [], deleteArray = []) {
    return {
        create: createArray,
        replace: replaceArray,
        delete: deleteArray
    };
}

module.exports = DocumentBatch;