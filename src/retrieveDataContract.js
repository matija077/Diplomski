async function retrieveDataContract(platform, contractID) {
    var contract;

    try {
        contract = await platform.contracts.get(contractID);
    }
    catch(error) {
        console.log(error);
        throw (error);
    }

    return contract;
}

module.exports = retrieveDataContract