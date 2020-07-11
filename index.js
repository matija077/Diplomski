var Dash = require('Dash');

//console.log(Dash);

// menmoni is null for new account
const clientOps = {
    network: 'testnet',
    wallet: {
        mnemonic: 'waste hawk artist palm label govern slim camp among soda mimic whale',
    },
};
//ybePQfwd636NAYzMrHxsk4HZLS74aKPTjJ

const clientOps2 = {
    network: 'testnet',
    wallet: {
        mnemonic: 'net mechanic visual various skin remove stool merit dog invite ready shoulder',
    },
};
// ybKetMrbXDBKLrfqA4iLf48bR5CfFrmw1m

// use this to get dash http://faucet.evonet.networks.dash.org/

/*var client = new Dash.Client(clientOps);
var client2 = new Dash.Client(clientOps2);

setFirstTime(client,clientOps);
setFirstTime(client2,clientOps2);*/

client = new Dash.Client(clientOps);
client2 = new Dash.Client(clientOps2);

async function setFirstTime(client, clientOps) {
    try {
        clientOps.wallet.mnemonic = await client.wallet.exportWallet();

        client.disconnect();
    } catch(error) {
        console.log(error);
    }
}

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

async function createTransaction(account, address, money) {
    var result;

    try {
        const transaction = account.createTransaction({
            recipient: address,
            satoshis: money,
        });

        //account.sign(transaction);

        result = await account.broadcastTransaction(transaction);
        return result;
    }  catch(error) {
        throw error;
    }
}

async function createIdentity(client) {
    var identity;
    //console.log(client);

    try {
        const platform = client.platform;
        //console.log(platform);
        identity = await platform.identities.register();
        //console.log({identity});
  } catch (e) {
        console.error('Something went wrong:', e);
  } finally {
        //client.disconnect();
  }

  return identity;
}

var first = {};
var second = {};

Promise.all([createOneWallet(client), createOneWallet(client2)])
    .then(function resolved(results) {
        //console.log(results);
       /* var {dapiClient1, wallet1} = results[0];
        var {dapiClient2, wallet2} = results[1];*/

        /*first = {
            client: client,
            dapiClient: dapiClient1,
            mnemonic: wallet1.mnemonic,
            account: wallet1.account,
            address: wallet1.address,
        };*/
        first = {client, ...results[0]};
        /*second = {
            client: client,
            dapiClient: dapiClient2,
            mnemonic: wallet2.mnemonic,
            account: wallet2.account,
            address: wallet2.address,
        };*/
        second = {...results[1]};
        second.client = client2
        //console.log(first);

        console.log(first.account.getTotalBalance());
        console.log(second.account.getTotalBalance());

        let transaction;
        /*createTransaction(first.account, second.address.address, 100000000).then(
            function transactionBroadcasted(result) {
                transaction = result;
                console.log(transaction);
        });*/
        /*console.log(first);
        console.log(second);*/

        createIdentity(first.client).then(
            function(result) {
                first.identity = result;
                console.log(first.identity);
            }
        );
        createIdentity(second.client).then(
            function(result) {
                second.identity = result;
                console.log(second.identity);
            }
        );

        console.log(first.account.getTotalBalance());
        console.log(second.account.getTotalBalance());
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

