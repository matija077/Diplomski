var Dash = require('Dash');

//console.log(Dash);

// menmoni is null for new account
const clientOps = {
    network: 'testnet',
    wallet: {
        mnemonic: null,
    },
};

const clientOps2 = {
    network: 'testnet',
    wallet: {
        mnemonic: null,
    },
};

var client = new Dash.Client(clientOps);
var client2 = new Dash.Client(clientOps2);

async function connect(client) {
    var actualClient;

    try {
        var actualClient = await client.getDAPIClient();
    } catch(error) {
        console.log(error);
    }

    return actualClient;
}

async function createWallet(client) {
    var wallet = {};

    try {
        wallet.account = await client.wallet.getAccount();
        wallet.mnemonic = await client.wallet.exportWallet();
        wallet.address = await wallet.account.getUnusedAddress();
    } catch(error) {
        console.log(error);
    }

    return wallet;
}


async function createTransaction(wallet) {
    var result;

    try {
        const transaction = wallet.createTransaction({
            recepient: 'yNPbcFfabtNmmxKdGwhHomdYfVs6gikbPf',
            satoshis: 100000000,
        });

        result = await wallet.broadcastTransaction(transaction);
    }  catch(error) {
        throw error;
    }

    return result;
}

Promise.all([createOneWallet(client), createOneWallet(client2)])
    .then(function resolved(results) {
        console.log(results);
        var {dapiClient1, wallet1} = results[0];
        var {dapiClient2, wallet2} = results[1];

        var first = {
            client: client,
            dapiClient: dapiClient1,
            mnemonic: wallet1.mnemonic,
            account: wallet1.account,
            address: wallet1.address,
        };
        var second = {
            client: client,
            dapiClient: dapiClient2,
            mnemonic: wallet2.mnemonic,
            account: wallet2.account,
            address: wallet2.address,
        };

        console.log(first);

    }).catch(function rejected(reason) {
        console.log(reason);
    }
)

function createOneWallet(client) {
    var dapiClient, wallet;

    return Promise.all([connect(client), createWallet(client)])
    .then(function resolved(results) {
        dapiClient = results[0];
        wallet = results[1];
        //console.log(wallet);

        return {
            dapiClient: dapiClient,
            wallet: client.wallet,
            mnemonic: wallet.mnemonic,
            address: wallet.address,
            account: wallet.account,
        };
    })
    .catch(function rejected(reason) {
        console.log(reason);
    })
    .finally(function final() {
        //console.log(actualClient);
        //console.log(wallet);
});
}

