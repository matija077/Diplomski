function queryOptionsFindById(
    id, whichId = "$ownerId", limit = 100, startAt, startAfter) {
    var queryOptions = {
        where: [
            [`${whichId}`, '==', id],
        ],
        limit: limit,
        startAt: startAt,
        startAfter: startAfter
    }

    return queryOptions;
};

function queryOptionsGetAll() {
    var queryOptions = {

    };

    return queryOptions;
};

module.exports = {
    queryOptionsFindById,
    queryOptionsGetAll
};