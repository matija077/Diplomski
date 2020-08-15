var {get} = require('./helperFunctionsProject')
var {queryOptionsFindById} = require('../Project/queryOptions');

async function getAllProjects(client, options) {
    return await get(
        client,
        options.documentLocatorProjectOverview
    );
}

async function getLatestProjectData(client, options, projectID) {
    var projectDataDocuments = getAllProjectData(client, options, projectID);
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

module.exports = {
    getAllProjects,
    getLatestProjectData,
    getAllProjectData
};