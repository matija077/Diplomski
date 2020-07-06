var Dash = require('Dash');

//console.log(Dash);

const clientOps = {
    network: 'testnet',
    wallet: {
        mnemonic: null,
    },
};

var client = new Dash.Client(clientOps);

async function connect() {
    var actualClient;

    try {
        var actualClient = await client.getDAPIClient();
    } catch(error) {
        console.log(error);
    }

    return actualClient;
}

async function createWallet() {
    var wallet;

    try {
        wallet = await client.wallet.getAccount();
    } catch(error) {
        console.log(error);
    }

    return wallet;
}

var actualClient;
var wallet;

Promise.all([connect(), createWallet()])
    .then(function resolved(results) {
        actualClient = results[0];
        wallet = results[1];
    })
    .catch(function rejected(reason) {
        console.log(reason);
    })
    .finally(function final() {
        console.log(actualClient);
        console.log(wallet);
});
