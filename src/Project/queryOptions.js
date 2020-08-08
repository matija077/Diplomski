function queryOptionsFindById(
    id, limit = 0, startAt = undefined, startAfter) {
    var queryOptions = {
        where: [
            ['$ownerId', '==', id],
        ],
        limit: limit,
        startAt: startAt,
        startAfter: startAfter
    }

    return queryOptions;
};

module.exports = {
    queryOptionsFindById
};