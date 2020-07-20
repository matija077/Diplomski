var Dash = require('Dash');

var ClientOps = require('./src/clientOptions');
var  createClient = require('./src/createClient');
var createWallet = require('./src/createWallet');
var createTransaction = require('./src/createTransaction');
var createIdentity = require('./src/createIdentity');
const registerName = require('./src/registerName');

const mnemonic1 = 'adult depart crazy royal rabbit twist wool inform top provide push dog';
const mnemonic2 = 'source beauty atom lift salute giraffe indoor yellow manual minor opinion magic';

const address1 = 'yfJKpnUJWs5o9mt6jCoL5aDBvsYXHj6yvC';
const address2 = 'ydzQ3dse33y67tGJtuSZGMWHZubgh2zHrh';

const identity1 = 'AQfb51PtbZQzLAZfR57d85hvV9kQQDLaRefryU871q3R';
const identity2 = '8M5X668A6s7WfCFs4M8uP3ucKwhLP439zGU5xRY2XCHQ';

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

console.log(client1.wallet);

async function flow() {
    try{
        //const wallets = await Promise.all([createWallet(client1), createWallet(client2)]);

        /*var wallet1 = wallets[0];
        var wallet2 = wallets[1];*/
        //console.log(await client1.wallet.getAccount());

        /*console.log(wallet1.account.getUnusedAddress());
        console.log(wallet2.account.getUnusedAddress());*/
        /*console.log(await createTransaction(
            wallets[1].account,
            wallets[0].address.address,
            100000000
        ));*/

        //console.log(await createIdentity(client1));
        //console.log(await createIdentity(client2));

        /*console.log(await registerName(
            identity1,
            "prvi",
            client1));
        console.log(await registerName(
            identity2,
            "drugi",
            client2));*/

        /*const name1 = await client1.platform.names.get('prvi');
        const name2 = await client2.platform.names.get('drugi');
        */
    } catch(error) {
        console.log(error);
    }

}

flow();

module.exports = client1;



