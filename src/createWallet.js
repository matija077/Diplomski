async function createWallet(client) {
    try {
        //client.wallet.getAccount();
        client.getWalletAccount();
        await client.wallet.accounts[0].isReady();
        //client.wallet.getAccount();
    } catch(error) {
        console.log(error);
    }
}

module.exports = createWallet;