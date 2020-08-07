var Dash = require('dash');

var ClientOps = require('./src/clientOptions');
var  createClient = require('./src/createClient');
var createWallet = require('./src/createWallet');
var createTransaction = require('./src/createTransaction');
var topUpIdentity = require('./src/topUpIdentity');
var createIdentity = require('./src/createIdentity');
var registerName = require('./src/registerName');
var {contractDocuments, contractDocuments2} = require('./src/contractDocuments');
var dataContract = require('./src/dataContract');
var retrieveDataContract = require('./src/retrieveDataContract');
var submitDocument = require('./src/submitDocument');
var KickstartDocumentProperties = require('./src/kickstartDocumentProperties');
var {
    UserProperties,
    ProjectProperties
} = require('./src/kickstartDocumentProperties2');
var queryDocuments = require('./src/queryDocuments.js');
var {queryOptionsFindById: findById} = require('./src/Project/queryOptions');

const mnemonic1 = 'adult depart crazy royal rabbit twist wool inform top provide push dog';
const mnemonic2 = 'source beauty atom lift salute giraffe indoor yellow manual minor opinion magic';
const mnemonic3 = 'shield during repair arrow carpet canal curious pistol radio inmate iron glare';

const address1 = 'yfJKpnUJWs5o9mt6jCoL5aDBvsYXHj6yvC';
const address2 = 'ydzQ3dse33y67tGJtuSZGMWHZubgh2zHrh';
const adresss3 = 'yShw5FSv6NxgUm5S4D6JPXkHGm78Jqc7F9';

const identity1 = 'An3wozaNdgwd9aB5Z81MYkkFiuxzLNSiT9Xhko6N2zoB';
const identity1Pub = 'AtlGKCJaHmc8gy8Eda32qhQu2mBTnnFsqu96qjHbimYi';
const contractID1 = 'CCY5RGbq5yskFudxgHeWxSU8zQdwXuzgcZLC5csi9tTa';
const contractID2 = '81sZbwhToSzaGnyJj6cGtyTfjvrmufTAtXatfTxDXWNa';

const identity2 = '5Fn8KD8xeZcMQvY8LtDZpnj6Cx2g1BVGsCfMVgpYPZ8t';
const identity2Pub = 'Asck9UXor8fUVb2ROld/23usOvSG9HhwmbrictDNIEoj';
const contract2ID1 = 'Fqeu6DP3rxprNGb9mKk1XAuymskjVy7r6ccg22q7r35H';

const identity3 = 'Evy51cqiNdkbLR7Gh3UKz2HE8xXhPmVvaqUWcfw4R9Vu';

const KICKSTART_APPLICATION_NAME = 'kickstartContract';

/*var clientOps1 = new ClientOps();
var clientOps2 = new ClientOps();
var clientOps3 = new ClientOps();

/*createClient(clientOps1).then(function clientCreated(result) {
    console.log(clientOps1);
});
createClient(clientOps3).then(function clientCreated(result) {
    console.log(clientOps3);
});*/

var clientOps1 = new ClientOps(
    mnemonic1, KICKSTART_APPLICATION_NAME, contractID2
);
var clientOps2 = new ClientOps(
    mnemonic2, KICKSTART_APPLICATION_NAME, contract2ID1
);
var clientOps3 = new ClientOps(
    mnemonic3, KICKSTART_APPLICATION_NAME, contractID2
);

var client1 = new Dash.Client(clientOps1);
var client2 = new Dash.Client(clientOps2);
var client3  = new Dash.Client(clientOps3);

var result = [client1, client2];

async function flow(id) {
    try{
        const wallets = await Promise.all([
            createWallet(client1),
            createWallet(client2),
            createWallet(client3)
        ]);
        //await Promise.all([client1.isReady(), client2.isReady()]);
        /*var wallet1 = wallets[0];
        var wallet2 = wallets[1];
        //console.log("dodem tu");
        const acc = await client3.wallet.getAccount();
        //await client2.wallet.getAccount();
        console.log(acc.getUnusedAddress());
        //console.log(client2.wallet.accounts[0].getUnusedAddress());*/

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
        //console.log(await createIdentity(client3));

        /*console.log(await registerName(
            identity1,
            'prvi.dash',
            client1));
        console.log(await registerName(
            identity2,
            'drugi.dash',
            client2));*/

        /*const platform1 = client1.platform;
        const name1 = await platform1.names.get('prvi');
        const name2 = await client2.platform.names.get('drugi');*/

        // contracts
        //await dataContract(client1.platform, identity1, contractDocuments);
        //await dataContract(client2.platform, identity2, contractDocuments2);
        //console.log(contractDocuments2);
        /*const contract2 = await retrieveDataContract(
            client1.platform, contractID2
        );
        console.log(contract2.documents.user.indices.properties);
        await retrieveDataContract(
            client3.platform, contractID1
        );
        console.log(contract2);*/
        /*console.log(await retrieveDataContract(
            clientRandom.platform, contractID1
        ));*/
        /*console.log(await retrieveDataContract(
            clientRandom.platform, contract2ID1
        ));*/

        //documents
        const documentTypeNote = "note";
        const documentTypeUser = "user";
        const documentTypeProject = "project";
        const documentLocatorProject = `${KICKSTART_APPLICATION_NAME}.${documentTypeProject}`;
        const documentLocatorUser = `${KICKSTART_APPLICATION_NAME}.${documentTypeUser}`;
        //const testDocumentLocator = 'testApp.project';

        const kickstartDocumentProperties = new KickstartDocumentProperties(
            "Test" + new Date()
        );
        const userProperties = new UserProperties(
            "123456789011",
            "testic1 User"
        );
        const projectProperties = new ProjectProperties(
            "123456789011",
            "testProject",
            "moze li ovo raditi od strane clienta 3?"
        );

        const nameDocumentLocator = "dpns.domain";

        //console.log(projectProperties);
        //console.log(userProperties);

        /*submitDocument(
            client3.platform,
            identity3,
            projectProperties,
            documentLocatorProject
        );*/
        /*submitDocument(
            client1.platform,
            identity1,
            userProperties,
            documentLocatorUser
        );*/

        /*const platform = client3.platform;
        const identity = await platform.identities.get(identity3);

        const validationResult = await platform.dpp.dataContract.validate(contract2);

        if (validationResult.isValid()) {
            console.log("validation passed, broadcasting contract..");
            // Sign and submit the data contract
            await platform.contracts.broadcast(contract1, identity);
        }*/

        id = id || identity1;
        const queryOptions = findById(id);
        //console.log(await queryDocuments(client3.platform, documentLocatorUser, queryOptions));
        //console.log(await queryDocuments(client3.platform, documentLocatorProject, queryOptions));
        var result = [];
        result.push(await queryDocuments(client3.platform, documentLocatorUser, queryOptions));
        result.push(await queryDocuments(client3.platform, documentLocatorProject, queryOptions));
        //console.log(kickstartDocumentProperties.__proto__.__proto__);

        //return [client1, client2];
        console.log(result);
        return result;
    } catch(error) {
        console.log("tu 1 eror");
        console.log(error);
        throw(error);
    }

}

module.exports = flow;




