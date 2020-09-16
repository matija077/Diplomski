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
var {queryOptionsFindById: findById, queryOptionsGetAll: all} = require('./src/Project/queryOptions');
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

var mnemonic1 = 'adult depart crazy royal rabbit twist wool inform top provide push dog';
var mnemonic2 = 'source beauty atom lift salute giraffe indoor yellow manual minor opinion magic';
var mnemonic3 = 'shield during repair arrow carpet canal curious pistol radio inmate iron glare';

/*mnemonic1 = 'language hybrid apology amount frog alpha monkey crucial apart guess morning choose';
mnemonic2 = 'thank stay dynamic affair jacket assist fruit top owner update twist olympic';
mnemonic3 = 'all salt monitor pledge bargain success admit horn slight couple bacon envelope';*/
/*mnemonic1 = 'mom elephant online slogan equip try exit fluid right aware fabric decade';
mnemonic2 = 'vivid rural balcony pattern write trend family need urge near captain wonder';
mnemonic3 = 'symbol charge horse run century present provide six pencil broom giggle future';*/



var address1 = 'yfJKpnUJWs5o9mt6jCoL5aDBvsYXHj6yvC';
var address2 = 'ydzQ3dse33y67tGJtuSZGMWHZubgh2zHrh';
var adresss3 = 'yShw5FSv6NxgUm5S4D6JPXkHGm78Jqc7F9';


/*address2 = 'yUkoxgUdZrZV4cdQMzcE5uGCJMe7Ud7Qw2';
address3 = 'yjJeHd3Ejrr39masKHYWcKfBLqv4b4H6Ng';*/
/*address1 = 'yPZ5jR9SerZcVQSYN2yLydDXuxx7dUeAWo';
address2 = 'yff1rETi3khScV8ocgP4rG21GNRUrDf5b5';
address3 = 'yN5T8XWfXnbVUZV8XqKzdDzv9Fu5WUyo9S';*/
/*address1 = 'yTigPjsd4m9HANmtx7viM2XmsxUdbaxrTf';
address2 = 'yPZ2sAN2jkMbJFjuhCaTxb95rT9VqM4zwt';
address3 = 'yMfxUNNRFVnMNBTb2WKx1YaXvzysf3EDBb';*/


const identity1 = 'An3wozaNdgwd9aB5Z81MYkkFiuxzLNSiT9Xhko6N2zoB';
const identity1Pub = 'AtlGKCJaHmc8gy8Eda32qhQu2mBTnnFsqu96qjHbimYi';
const contractID1 = 'CCY5RGbq5yskFudxgHeWxSU8zQdwXuzgcZLC5csi9tTa';
const contractID2 = '81sZbwhToSzaGnyJj6cGtyTfjvrmufTAtXatfTxDXWNa';
const contractFIrst = '6Zq5fbxSr3THVJfXa8y2VSaQSM58ASEwCuTDosGGAPf1';

const identity2 = '5Fn8KD8xeZcMQvY8LtDZpnj6Cx2g1BVGsCfMVgpYPZ8t';
const identity2Pub = 'Asck9UXor8fUVb2ROld/23usOvSG9HhwmbrictDNIEoj';
const contract2ID1 = 'Fqeu6DP3rxprNGb9mKk1XAuymskjVy7r6ccg22q7r35H';

const identity3 = 'Evy51cqiNdkbLR7Gh3UKz2HE8xXhPmVvaqUWcfw4R9Vu';

const KICKSTART_APPLICATION_NAME = 'kickstartContract';

/*var clientOps1 = new ClientOps();
var clientOps2 = new ClientOps();
var clientOps3 = new ClientOps();

createClient(clientOps1).then(function clientCreated(result) {
    console.log(clientOps1);
});
createClient(clientOps2).then(function clientCreated(result) {
    console.log(clientOps2);
});
createClient(clientOps3).then(function clientCreated(result) {
    console.log(clientOps3);
});*/
var dpnsContractId = "FiBkhut4LFPMJqDWbZrxVeT6Mr6LsH3mTNTSSHJY2ape";
dpnsContractId = '566vcJkmebVCAb2Dkj2yVMSgGFcsshupnQqtsz1RFbcy';

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
        var wallet1 = wallets[0];
        var wallet2 = wallets[1];
        //console.log("dodem tu");
        console.log((await client1.wallet.getAccount()).getUnusedAddress());
        const acc = await client1.wallet.getAccount();
        //await client1.wallet.getAccount();
        console.log(acc.getUnusedAddress());
        const acc2 = await client2.wallet.getAccount();
        console.log(acc2.getUnusedAddress());
        const acc3 = await client3.wallet.getAccount();
        console.log(acc3.getUnusedAddress());
        //console.log(client2.wallet.accounts[0].getUnusedAddress());*/

        //console.log(client1.wallet.accounts[0]);
        //console.log(client2.wallet.accounts[1]);
        /*const result2 = await createTransaction(
            client1.wallet.accounts[0],
            client2.wallet.accounts[0].getUnusedAddress().address,
            1000
        );*/
        /*const result2 = await createTransaction(
            client1.wallet.accounts[0],
            address2,
            100000
        );*/
        const transaction = client1.wallet.accounts[0].createTransaction({
            recipient: address2,
            satoshis: 100000,
        });
        console.log(transaction);
        /*const platform1 = client1.platform;
        const id1 = await platform1.identities.get(identity1);
        console.log(id1);
        const id2 = await client2.platform.identities.get(identity2);
        console.log(id2);
        const id3 = await client3.platform.identities.get(identity3);
        console.log(id3);*/
        //console.log(client1.getDAPIClient().platform);
        /*console.log(client1.wallet.accounts[0].getTotalBalance());
        console.log(client2.wallet.accounts[0].getTotalBalance());
        console.log(client3.wallet.accounts[0].getTotalBalance());*/
        /*const id2 = await client1.platform.getIdentityIdByFirstPublicKey(
            client1.wallet.HDPrivateKey.xpubkey
        );*/
        /*topUpIdentity(identity1, 1000, client1);
        topUpIdentity(identity2, 1000, client2);
        topUpIdentity(identity3, 1000, client3);*/

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
        /*const name1 = await client1.platform.names.resolve('prvi');
        const name2 = await client2.platform.names.resolve('drugi');
        const name3 = await client3.platform.names.resolve('treci');
        */
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
            month: (date.getMonth() + 1).toString(),
            year: date.getFullYear().toString(),
            second: date.getSeconds().toString(),
            minute: date.getMinutes().toString(),
            hour:  date.getHours().toString()
        };

        var rewards = [
            {
                name: "basic",
                description: "basic reward",
                price: 10
            },
            {
                name: "upgrade",
                description: "better reward",
                price: 20
            }
        ];

        var payer = {
            payerID: identity3,
            timestamp: timestamp,
            payerName: name3.data.label,
            payment: 10,
            rewardName: "basic",
            transactionID: "testID",
        };

        console.log(payer.payerID.length);

        const projectProperties = new ProjectProperties(
            "3234567890111234567890123456789123456789012222",
            20,
            2,
            [payer,]
        );
        const projectOverviewProperties = new ProjectOverviewProperties(
            "2234567890111234567890123456789123456780",
            "Izrada diplomskog rada",
            20,
            "Izradujem diplomski rad po mjeri",
            timestamp,
            undefined,
            rewards,
            name2.data.label
        );

        const nameDocumentLocator = "dpns.domain";


        const identity1Real = await client1.platform.identities.get(identity1);
        const identity2Real = await client2.platform.identities.get(identity2);
        const identity3Real = await client3.platform.identities.get(identity3);

        //signContract(client1.platform, identity1Real, contractFIrst);

        //id = id || identity2;
        id = identity3;
        //let queryOptions = findById(id);
        let queryOptions = all();

        const arrayDocuments = await queryDocuments(
            client2.platform, documentLocatorProject);
        let createBatch = await createDocumentBatch(
            client2.platform,
            identity2Real,
            projectOverviewProperties,
            documentLocatorProjectOverview
        );

        console.log(arrayDocuments);
        let replaceBatch = createReplaceBatch(
            arrayDocuments[0]
        );
        let deleteBatch = createDeleteBatch(
            arrayDocuments[0]
        );
        //console.log(createBatch);
        //replaceBatch.replace[0].data.description = "Halelujaaaaaa jso pdoataka";
        /*await submitDocument(
            client2.platform,
            createBatch,
            identity2Real,
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
        client1.name = name1;
        client2.name = name2;
        client3.name = name3;
        const options = {
            documentLocatorProject: documentLocatorProject,
            documentLocatorProjectOverview: documentLocatorProjectOverview,
            documentTypeProject: documentTypeProject,
            documentTypeProjectOverview: documentTypeProjectOverview,
            addresses: [
                client1.wallet.accounts[0].getUnusedAddress().address,
                client2.wallet.accounts[0].getUnusedAddress().address,
                client3.wallet.accounts[0].getUnusedAddress().address
            ]
        };
        //console.log(await client1.platform.identities.get(identity3));
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




