async function createWallet(client) {
    try {
        //client.wallet.getAccount();
        await client.getWalletAccount();
        await client.wallet.accounts[0].isReady();
        console.log(client.wallet.accounts);
        /*const acc = await client.wallet.getAccount();
        console.log(await client.getWalletAccount());
        await acc.isReady();*/
        //client.wallet.getAccount();
    } catch(error) {
        console.log(error);
    }
}

module.exports = createWallet;