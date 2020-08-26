async function get(client, option, queryOptions) {
    var queryDocuments = require('../queryDocuments');
    var arrayDocuments;

    try {
        arrayDocuments = await queryDocuments(
            client.platform,
            option,
            queryOptions
        );
    } catch(error) {
        console.log(get.name);
        throw error;
    }

    return arrayDocuments;
}

async function update(client, options, latestProjectData) {
    var createDocumentBatch = require('../createDocumentBatch');
    var submitDocument = require('../submitDocument');

    var documentBatch = await createDocumentBatch(
        client.platform,
        client.identityReal,
        latestProjectData,
        options.documentLocatorProject
    );

    console.log(documentBatch.data);

    try {
        return submitDocument(
            client.platform,
            documentBatch,
            client.identityReal
        );
    } catch(error) {
        console.log(update.name);
        throw error;
    }
}

function addNewPayer(client, latestProjectDetails, payment, transactionID) {
    var {KickstartPayer} = require('../Project/kickstartPayer');
    latestProjectDetails = latestProjectDetails;

    latestProjectDetails.funds +=  payment.payment;
    latestProjectDetails.payerNumber += 1;
    latestProjectDetails.funders.push(
        new KickstartPayer(
            client.identityReal.id,
            client.name.data.label,
            payment.payment,
            payment.name,
            transactionID
        )
    );

    return latestProjectDetails;
}

async function transferFunds(client, projectOwnerIdentity, payment, address) {
    var createTransaction = require('../../src/createTransaction');
    //console.log(projectOwnerIdentity);
    try {
        const identity = await client.platform.identities.get(projectOwnerIdentity);
        const publicKey = identity.publicKeys[0].data;
        //const address = client.wallet.accounts[0].getUnusedAddress().address;
        const account = client.wallet.accounts[0];


         return createTransaction(
            account,
            address,
            payment
        );
    } catch(error) {
        console.log(transferFunds.name);
        throw error;
    }
}

/**
 * TODO
 * you cant append an object
 * all indexes must be in correct order
 * options - REPLACE, APPEND, NESTED
 * @param {*} object
 * @param {*} keysToChange
 * @param {*} values
 */
function replace(object, keysToChange, values, options) {
    function replaceRecursive(object) {
        for (key in object.keys()) {
            if (!object.hasOwnProperty(`${key}`)) {
                continue;
            }

            if (!keysToChange.includes(key)) {
                continue;
            }
            const index = keysToChange.indexOf(key);

            if (typeof object[key] && options[index] === "NESTED") {
                replaceRecursive(object[key]);
            }

            const isItArray = false;
            if (typeof object[key] === "array") {
                isItArray = true;
            }

            switch(option) {
                case "APPEND" : {
                    isItArray ?
                        object[key].push(values[index])
                    :
                        null
                }
                case "REPLACE" : {
                    object[key] = values[index]
                }
            }
        }
    }

    replaceRecursive(object);
}


module.exports = {
    get,
    update,
    addNewPayer,
    transferFunds
};