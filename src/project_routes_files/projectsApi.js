var {get, update} = require('./helperFunctionsProject')
var {queryOptionsFindById} = require('../Project/queryOptions');

async function getAllProjects(client, options) {
    return await get(
        client,
        options.documentLocatorProjectOverview
    );
}

async function getLatestProjectData(client, options, projectID) {
    //var projectDataDocuments = getAllProjectData(client, options, projectID);
    var orderBy = [
        ["payerNumber", "desc"],
    ];

    var queryOptions = queryOptionsFindById(
        projectID,
        "projectID",
        orderBy,
        1
    );

    return await get (
        client,
        options.documentLocatorProject,
        queryOptions
    );
}

async function getAllProjectData(client, options, projectID){
    var queryOptions = queryOptionsFindById(
        projectID,
        "projectID"
    );

    return await get (
        client,
        options.documentLocatorProject,
        queryOptions
    );
}

/**
 * can't make unique name or id field inside an array so
 * passing it here is the only options
 * @param {} client
 * @param {*} options
 * @param {*} projectID
 */
async function fundProject(client, options, projectID, payment) {
    var latestProjectDetails = await getLatestProjectData(
        client, options, projectID);

    console.log(payment);

    /*return await update(
        client,
        options.documentLocatorProject,
        latestProjectDetails
    );*/
    return latestProjectDetails;
}

module.exports = {
    getAllProjects,
    getLatestProjectData,
    getAllProjectData,
    fundProject
};