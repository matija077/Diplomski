function queryOptionsFindById(
    id, whichId = "$ownerId", limit = 0, startAt = undefined, startAfter) {
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