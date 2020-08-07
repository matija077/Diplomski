async function dataContract(platform, identityID, document, definitions) {
    try {
        const identity = await platform.identities.get(identityID);

        console.log(platform);

        const contract = await platform.contracts.create(document, identity);
        console.dir(contract);

        if (definitions) {
            contract.setDefinitions(definitions);
        }

        const validationResult = await platform.dpp.dataContract.validate(contract);
        if (validationResult.isValid()) {
            console.log("passed");

            await platform.contracts.broadcast(contract, identity);
        } else {
            console.log(validationResult);
            throw(validationResult.errors);
        }
    }
    catch(error) {
        console.log(error);
        throw(error);
    }
}

module.exports = dataContract