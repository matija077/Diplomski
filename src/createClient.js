var Dash = require('Dash');

async function createClient(clientOps) {
    var client = new Dash.Client(clientOps);

    try {
        clientOps.wallet.mnemonic = await client.wallet.exportWallet();

        client.disconnect();
    } catch(error) {
        console.log(createClient.name);
        console.log(error);
    }
}

module.exports = createClient;