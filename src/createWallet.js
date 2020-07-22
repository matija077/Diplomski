async function createWallet(client) {
    try {
        client.wallet.getAccount();
    } catch(error) {
        console.log(error);
    }
}

module.exports = createWallet;