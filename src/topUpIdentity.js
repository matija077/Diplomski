async function topUpIdentity(identityId, amount, client) {
    try {
        const status = await client.platform.identities.topUp(identityId, amount);
        const identity = await client.platform.identities.get(identityId);
    } catch(error) {
        console.log("top up");
        console.log(error);
    }
}

module.exports = topUpIdentity;