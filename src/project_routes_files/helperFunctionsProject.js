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
    var createReplaceBatch = require('../createReplaceBatch');
    var submitDocument = require('../submitDocument');

    var replaceBatch = createReplaceBatch(latestProjectData);

    try {
        submitDocument(
            client.platform,
            replaceBatch,
            client.identityReal
        );
    } catch(error) {
        console.log(update.name);
        throw error;
    }
}

function addNewPayer(client, latestProjectDetails, payment) {
    var {KickstartPayer} = require('../Project/kickstartPayer');
    latestProjectDetails = latestProjectDetails[0];

    latestProjectDetails.data.funds +=  payment.payment;
    latestProjectDetails.data.payerNumber += 1;
    latestProjectDetails.data.funders.push(
        new KickstartPayer(
            client.identityReal.id,
            client.name.data.label,
            payment.payment,
            payment.name
        )
    );

    return latestProjectDetails;
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
    addNewPayer
};