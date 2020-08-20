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
var KickstartDocumentPropertiesOld = require('./src/kickstartDocumentPropertiesOld');
var {
    UserProperties,
    ProjectProperties: ProjectPropertiesOld
} = require('./src/kickstartDocumentProperties2');
var queryDocuments = require('./src/queryDocuments.js');
var {queryOptionsFindById: findById} = require('./src/Project/queryOptions');
var CreateDocumentBatch = require('./src/createDocumentBatch');
var createReplaceBatch = require('./src/createReplaceBatch');
var createDeleteBatch = require('./src/createDeleteBatch');
var signContract = require('./src/signContract');
var createDocumentBatch = require('./src/createDocumentBatch');

var {
    kickstartContractDocument,
    kickstartDefinitions
} = require('./src/Project/kickstartContractDocument');
var {
    ProjectOverviewProperties,
    ProjectProperties
} = require('./src/Project/kickstartDocumentProperties');

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
const contractFIrst = '2nZJg1voCjJHFm7QFYU1hKsWVUgRJWtwK1m8gSnXCY2e';

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
var dpnsContractId = "FiBkhut4LFPMJqDWbZrxVeT6Mr6LsH3mTNTSSHJY2ape";

var clientOps1 = new ClientOps(
    mnemonic1, KICKSTART_APPLICATION_NAME, contractFIrst, dpnsContractId
);
var clientOps2 = new ClientOps(
    mnemonic2, KICKSTART_APPLICATION_NAME, contractFIrst, dpnsContractId
);
var clientOps3 = new ClientOps(
    mnemonic3, KICKSTART_APPLICATION_NAME, contractFIrst, dpnsContractId
);

var client1 = new Dash.Client(clientOps1);
var client2 = new Dash.Client(clientOps2);
var client3  = new Dash.Client(clientOps3);

var result = [client1, client2];

async function flow(id) {
    try{
        console.log("da vidimo ovo");
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
            identity2,
            'drugi',
            client2));
        console.log(await registerName(
            identity3,
            'treci',
            client3));*/

        //const platform1 = client1.platform;
        const name1 = await client1.platform.names.get('prvi');
        const name2 = await client2.platform.names.get('drugi');
        const name3 = await client3.platform.names.get('treci');

        //console.log(name1);

        // contracts
        /*await dataContract(client1.platform, identity1, kickstartContractDocument,
            kickstartDefinitions);*/
        //await dataContract(client2.platform, identity2, contractDocuments2);
        //console.log(contractDocuments2);
        /*const contract2 = await retrieveDataContract(
            client1.platform, contractFIrst
        );
        //console.log(contract2.documents.user.indices.properties);
        console.log(contract2.documents.project);
        await retrieveDataContract(
            client3.platform, contractFIrst
        );
        console.log(contract2);*/
        /*const retrieveCtr = await retrieveDataContract(
            client3.platform, contractFIrst
        );*/
        /*console.log(await retrieveDataContract(
            clientRandom.platform, contract2ID1
        ));*/

        //documents
        const documentTypeNote = "note";
        const documentTypeUser = "user";
        const documentTypeProject = "project";
        const documentTypeProjectOverview = "projectOverview";
        const documentLocatorProject = `${KICKSTART_APPLICATION_NAME}.${documentTypeProject}`;
        const documentLocatorUser = `${KICKSTART_APPLICATION_NAME}.${documentTypeUser}`;
        const documentLocatorProjectOverview = `${KICKSTART_APPLICATION_NAME}.${documentTypeProjectOverview}`;
        //const testDocumentLocator = 'testApp.project';

        const kickstartDocumentPropertiesOld = new KickstartDocumentPropertiesOld(
            "Test" + new Date()
        );
        const userProperties = new UserProperties(
            "123456789011",
            "testic1 User"
        );
        const projectPropertiesOld = new ProjectPropertiesOld(
            "123456789011",
            "test 3 3 client ",
            "Heloooooooooooo sdadadsas?"
        );

        const date = new Date();
        var timestamp = {
            day: date.getDate().toString(),
            month: date.getMonth().toString(),
            year: date.getFullYear().toString(),
            second: date.getSeconds().toString(),
            minute: date.getMinutes().toString(),
            hour:  date.getHours().toString()
        };

        const projectProperties = new ProjectProperties(
            "1234567890111234567890123456789123456789012222",
            46,
            timestamp,
            name2.data.label
        );
        const projectOverviewProperties = new ProjectOverviewProperties(
            "3234567890111234567890123456789123456780",
            "Test",
            12,
            "Idemooo idemooooo",
            timestamp,
            undefined,
            undefined,
            name3.data.label
        );

        const nameDocumentLocator = "dpns.domain";


        const identity1Real = await client1.platform.identities.get(identity1);
        const identity2Real = await client2.platform.identities.get(identity2);
        const identity3Real = await client3.platform.identities.get(identity3);

        //signContract(client1.platform, identity1Real, contractFIrst);

        //id = id || identity2;
        id = identity3;
        let queryOptions = findById(id);

        /*const arrayDocuments = await queryDocuments(
            client1.platform, documentLocatorProjectOverview, queryOptions);
        let createBatch = await createDocumentBatch(
            client2.platform,
            identity2Real,
            projectProperties,
            documentLocatorProject
        );
        arrayDocuments[0].data.name = "Test";
        arrayDocuments[0].data.goals = undefined;
        arrayDocuments[0].data.rewards = undefined;

        console.log(arrayDocuments);
        let replaceBatch = createReplaceBatch(
            arrayDocuments[0]
        );
        let deleteBatch = createDeleteBatch(
            arrayDocuments[3]
        );*/
        //console.log(createBatch);
        //replaceBatch.replace[0].data.description = "Halelujaaaaaa jso pdoataka";
        /*await submitDocument(
            client3.platform,
            replaceBatch,
            identity3Real,
        );*/

        //queryOptions = findById(id);

        //console.log(await queryDocuments(client3.platform, documentLocatorUser, queryOptions));
        //console.log(await queryDocuments(client3.platform, documentLocatorProject, queryOptions));
        var result = [];
        //await platform.documents.delete();
        //result.push(await queryDocuments(client3.platform, documentLocatorProjectOverview));
        //result.push(await queryDocuments(client3.platform, documentLocatorProject));
        //console.log(kickstartDocumentProperties.__proto__.__proto__);

        client1.identityReal = identity1Real;
        client2.identityReal = identity2Real;
        client3.identityReal = identity3Real;
        const options = {
            documentLocatorProject: documentLocatorProject,
            documentLocatorProjectOverview: documentLocatorProjectOverview,
            documentTypeProject: documentTypeProject,
            documentTypeProjectOverview: documentTypeProjectOverview
        };
        const clients = [client1, client2, client3];
        //console.log(await client1.platform.names.get('treci'));
        return {clients, options};
        return result;
    } catch(error) {
        console.log("tu 1 eror");
        console.log(error);
        throw(error);
    }

}

module.exports = flow;




