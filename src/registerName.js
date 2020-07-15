async function registerName(identityId, name, client) {
    var nameRegistration;

    try {
        const identity = await client.platform.identities.get(identityId);
        console.log(identity);
        nameRegistration = await client.platform.names.register(name, identity);
    } catch(error) {
        console.log(error);
    }

    return nameRegistration;
}

module.exports = registerName;