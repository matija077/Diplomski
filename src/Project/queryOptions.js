function queryOptionsFindById(
    id, whichId = "$ownerId", orderBy,
    limit = 100, startAt, startAfter, ) {
    var queryOptions = {
        where: [
            [`${whichId}`, '==', id],
        ],
        limit: limit,
        orderBy: orderBy ?
            orderBy :
            undefined,
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