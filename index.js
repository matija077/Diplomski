var Dash = require('Dash');

//console.log(Dash);

const clientOps = {
    network: 'testnet',
};

var client = new Dash.Client(clientOps);

async function connect() {
    try {
        //await Promise.all([client.getDAPIClient(), client.getWalletAccount()])
        var actualClient = client.getDAPIClient();
        //var bestBlockHash = actualClient.getBestBlockHash();
        console.log(actualClient);
       // console.log(bestBlockHash);
    } catch(error) {
        console.log(error);
    }
}

connect();