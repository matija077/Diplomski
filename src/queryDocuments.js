async function queryDocuments(platform, documentLocator, queryOptions = {}) {
    var documents;

    try{
        documents = await platform.documents.get(
            documentLocator,
            queryOptions
        );
    }
    catch(error){
        console.log(error);
        throw(error);
    }

    return documents;
}

module.exports = queryDocuments;