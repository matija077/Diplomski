function queryOptionsFindById(id, limit = 0) {
    var queryOptions = {
        where: [
            ['$ownerId', '==', id],
        ],
        limit: limit,
    }

    return queryOptions;
};

module.exports = {
    queryOptionsFindById
};