async function createWallet(client) {
    var wallet = {};

    try {
        wallet.account = await client.wallet.getAccount();
        wallet.mnemonic = await client.wallet.exportWallet();
        wallet.address = await wallet.account.getUnusedAddress();
    } catch(error) {
        console.log(createWallet.name);
        console.log(error);
    }

    return wallet;
}

module.exports = createWallet;