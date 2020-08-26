async function dataContract(platform, identityID, document, definitions) {
    try {
        const identity = await platform.identities.get(identityID);

        const contract = await platform.contracts.create(document, identity);
        console.dir(contract);

        if (definitions) {
            contract.setDefinitions(definitions);
        }

        console.log(definitions);

        const validationResult = await platform.dpp.dataContract.validate(contract);
        if (validationResult.isValid()) {
            console.log("passed");

            await platform.contracts.broadcast(contract, identity);
            /*platform.contracts.broadcast(contract, identity).then(
                function resolved(resolve) {
                    console.log("radi");

                }, function rejected(error) {
                    console.log("ovo ne radi");
                    console.log(error);
                }
            );*/
            console.log("broadcas tsuccesfull");
        } else {
            console.log("validaton not apssed");
            throw(validationResult.errors);
        }
    }
    catch(error) {
        console.log(error);
        throw(error);
    }
}

module.exports = dataContract