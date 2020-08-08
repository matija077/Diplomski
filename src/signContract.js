async function signContract(platform, identity, contract ) {
    try {
        const validationResult = await platform.dpp.dataContract.validate(contract);

        if (validationResult.isValid()) {
            console.log("validation passed, broadcasting contract..");
            // Sign and submit the data contract
            await platform.contracts.broadcast(contract, identity);
        } else {
            throw("failed validation");
        }
    }
    catch(error) {
        console.log();
        throw(error);
    }

}

module.exports = signContract;