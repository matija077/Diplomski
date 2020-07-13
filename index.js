var Dash = require('Dash');
var fs = require('fs');

// menmoni is null for new account
const clientOps = {
    network: 'testnet',
    wallet: {
        mnemonic: 'waste hawk artist palm label govern slim camp among soda mimic whale',
    },
};
// adress ybePQfwd636NAYzMrHxsk4HZLS74aKPTjJ
// identity id ZWbiYYM2BuC92eDsF186kqMTnQiQcjNg3QQmKN2Mhbv

const clientOps2 = {
    network: 'testnet',
    wallet: {
        mnemonic: 'net mechanic visual various skin remove stool merit dog invite ready shoulder',
    },
};
// adress ybKetMrbXDBKLrfqA4iLf48bR5CfFrmw1m
// identitydi 21v59PWxENZXL4hnb1PTRMDibQt3fQ5t9DwyyycsG16f
// namehash 56200ca191d4f028be9764f8e102ef6a25f375b8921538b5a5a34b4ac5d76766be92

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
        console.log(transaction);
        //account.sign(transaction);

        result = await account.broadcastTransaction(transaction);
        return result;
    }  catch(error) {
        console.log("create tarsnactio");
        console.log(error);
    }
}

async function createIdentity(client) {
    var identity;
    //console.log(client);

    try {
        const platform = client.platform;
        //console.log(platform);
        identity = await platform.identities.register();
        //return identity;
  } catch (e) {
        console.error('Something went wrong:', e);
  } finally {
        //client.disconnect();
  }

  console.log('balbal');
  return identity;
}

async function topUpIdentity(identityId, amount, client) {
    try {
        const status = await client.platform.identities.topUp(identityId, amount);
        const identity = await client.platform.identities.get(identityId);
        console.log(identity.balance);
    } catch(error) {
        console.log("top up");
        console.log(error);
    }
}

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

       /* console.log(first.account.getTotalBalance());
        console.log(second.account.getTotalBalance());*/

        let transaction;
        createTransaction(first.account, second.address.address, 100000000).then(
            function transactionBroadcasted(result) {
                transaction = result;
                console.log(transaction);
        });
        //console.log(second.account);
        //console.log(first.address.address);
         /*createTransaction(second.account, first.address.address, 100000000).then(
            function transactionBroadcasted(result) {
                transaction = result;
                console.log(transaction);
        });*/
        //console.log(first.client.platform.identities);
        //console.log(second);

        /*createIdentity(first.client).then(
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
        );*/

        fs.writeFile('first.txt', first.toString(), (err) => console.log(err));


        /*first.identity = first.client.platform.identities.get('ZWbiYYM2BuC92eDsF186kqMTnQiQcjNg3QQmKN2Mhbv').then(
            function getIdentity(result) {
                console.log(result);
            }
        );
        /*second.identity = second.client.platform.identities.get('21v59PWxENZXL4hnb1PTRMDibQt3fQ5t9DwyyycsG16f').then(
            function getIdentity(result) {
                console.log(result);
            }
        );*/

        /*console.log(first.client);
        console.log(second.client);*/

        //topUpIdentity('ZWbiYYM2BuC92eDsF186kqMTnQiQcjNg3QQmKN2Mhbv', 2000, first.client);
        //topUpIdentity('21v59PWxENZXL4hnb1PTRMDibQt3fQ5t9DwyyycsG16f', 2000, second.client);

        /*registerName('ZWbiYYM2BuC92eDsF186kqMTnQiQcjNg3QQmKN2Mhbv', "prvi", first.client).then((name) =>
            console.log(name));*/
        /*registerName('21v59PWxENZXL4hnb1PTRMDibQt3fQ5t9DwyyycsG16f', "drugi", second.client).then((name) =>
            console.log(name));*/

        console.log(first.account.getTotalBalance());
        console.log(second.account.getTotalBalance());
    }).catch(function rejected(reason) {
        console.log("main");
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

