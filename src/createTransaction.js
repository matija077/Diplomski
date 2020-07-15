async function createTransaction(account, address, money) {
    var result;

    try {
        const transaction = account.createTransaction({
            recipient: address,
            satoshis: money,
        });
        console.log(transaction);

        result = await account.broadcastTransaction(transaction);
        return result;
    }  catch(error) {
        console.log("create transaction");
        console.log(error);
    }
}

module.exports = createTransaction;