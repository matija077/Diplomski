var {get, update, addNewPayer, transferFunds} = require('./helperFunctionsProject')
var {queryOptionsFindById} = require('../Project/queryOptions');
var {ProjectProperties} = require('../Project/kickstartDocumentProperties');

async function getAllProjects(client, options) {
    return await get(
        client,
        options.documentLocatorProjectOverview
    );
}

async function getProject(client, options, projectID) {
    var queryOptions = queryOptionsFindById(
        projectID,
        "projectID",
    );

    return await get(
        client,
        options.documentLocatorProjectOverview,
        queryOptions
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
        console.log(latestProjectDetails);
    if (latestProjectDetails.length === 0) {
        latestProjectDetails = new ProjectProperties(
            projectID,
            0,
            0,
            []
        );
    } else {
        latestProjectDetails = new ProjectProperties(
            projectID,
            latestProjectDetails[0].data.funds,
            latestProjectDetails[0].data.payerNumber,
            latestProjectDetails[0].data.funders
        );
    }

    console.log(latestProjectDetails);

    try {
        const project = await getProject(client, options, projectID);
        //console.log(project);
        // usually should come from payment.address
        const addressIndex = +projectID.charAt(0) - 1;
        const address = options.addresses[addressIndex];
        console.log(options.addresses);
        const result = await transferFunds(client, project[0].ownerId, payment.payment, address);
        if (!result) {
            throw Error("trasnaction not passed");
        }
        console.log("updating");

        latestProjectDetails = addNewPayer(client, latestProjectDetails, payment, result);
        return await update(
            client,
            options,
            latestProjectDetails
        );
        return latestProjectDetails;
    } catch(error) {
        console.log(fundProject.name);
        console.group(JSON.parse(error.metadata.get('errors')[0]));
        throw error;
    }
}

module.exports = {
    getAllProjects,
    getLatestProjectData,
    getAllProjectData,
    fundProject
};