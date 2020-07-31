var Dash = require('Dash');

var ClientOps = require('./src/clientOptions');
var  createClient = require('./src/createClient');
var createWallet = require('./src/createWallet');
var createTransaction = require('./src/createTransaction');
var topUpIdentity = require('./src/topUpIdentity');
var createIdentity = require('./src/createIdentity');
const registerName = require('./src/registerName');

const mnemonic1 = 'adult depart crazy royal rabbit twist wool inform top provide push dog';
const mnemonic2 = 'source beauty atom lift salute giraffe indoor yellow manual minor opinion magic';

const address1 = 'yfJKpnUJWs5o9mt6jCoL5aDBvsYXHj6yvC';
const address2 = 'ydzQ3dse33y67tGJtuSZGMWHZubgh2zHrh';

const identity1 = 'An3wozaNdgwd9aB5Z81MYkkFiuxzLNSiT9Xhko6N2zoB';
const identity1Pub = 'AtlGKCJaHmc8gy8Eda32qhQu2mBTnnFsqu96qjHbimYi';
const identity2 = '5Fn8KD8xeZcMQvY8LtDZpnj6Cx2g1BVGsCfMVgpYPZ8t';
const identity2Pub = 'Asck9UXor8fUVb2ROld/23usOvSG9HhwmbrictDNIEoj';

/*var clientOps1 = new ClientOps();
var clientOps2 = new ClientOps();

createClient(clientOps1).then(function clientCreated(result) {
    console.log(clientOps1);
});
createClient(clientOps2).then(function clientCreated(result) {
    console.log(clientOps2);
});*/

var clientOps1 = new ClientOps(mnemonic1);
var clientOps2 = new ClientOps(mnemonic2);

var client1 = new Dash.Client(clientOps1);
var client2 = new Dash.Client(clientOps2);


var result = [client1, client2];

async function flow() {
    try{
        const wallets = await Promise.all([createWallet(client1), createWallet(client2)]);
        //await Promise.all([client1.isReady(), client2.isReady()]);
        /*var wallet1 = wallets[0];
        var wallet2 = wallets[1];*/
        console.log("dodem tu");
        /*const acc = await client1.wallet.getAccount();
        await client2.wallet.getAccount();
        console.log(acc.getUnusedAddress());
        console.log(client2.wallet.accounts[0].getUnusedAddress());*/

        //console.log(client1.wallet.accounts[0]);
        //console.log(client2.wallet.accounts[1]);
        /*const result = await createTransaction(
            client1.wallet.accounts[0],
            client2.wallet.accounts[0].getUnusedAddress().address,
            100000000
        );
        console.log(result);*/
        /*const platform1 = client1.platform;
        const id1 = await platform1.identities.get(identity1);
        console.log(id1);
        const id2 = await client2.platform.identities.get(identity2);
        console.log(id2);*/
        //console.log(client1.getDAPIClient().platform);
        //console.log(client1.wallet.accounts[0].getTotalBalance());
        //console.log(client2.wallet.accounts[0].getTotalBalance());
        /*const id2 = await client1.platform.getIdentityIdByFirstPublicKey(
            client1.wallet.HDPrivateKey.xpubkey
        );*/
        //topUpIdentity(identity1, 1000, client1);
        //topUpIdentity(identity2, 1000, client2);

        //console.log(await createIdentity(client1));
        //console.log(await createIdentity(client2));

        console.log(await registerName(
            identity1,
            'prvi.dash',
            client1));
        console.log(await registerName(
            identity2,
            'drugi.dash',
            client2));

        /*const platform1 = client1.platform;
        const name1 = await platform1.names.get('prvi');
        const name2 = await client2.platform.names.get('drugi');*/



        return [client1, client2];
        //return client1;
    } catch(error) {
        console.log("tu 1 eror");
        console.log(error);
        throw(error);
    }

}

module.exports = flow();




