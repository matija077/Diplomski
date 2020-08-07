function queryOptionsFindById(id) {
    var queryOptions = {
        where: [
            ['$ownerId', '==', id],
        ],
        limit: 0,
    }

    return queryOptions;
};

module.exports = {
    queryOptionsFindById
};