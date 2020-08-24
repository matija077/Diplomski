function KickstartPayer(payerID, payerName, payment, rewardName, transactionID) {
    this.payerID = payerID;
    this.timestamp = createTimestamp();
    this.payerName = payerName;
    this.payment = payment;
    this.rewardName = rewardName;
    this.transactionID = transactionID;
}

function createTimestamp() {
    var date = new Date();
    var timestamp = {
        day: date.getDate().toString(),
        month: (date.getMonth() + 1).toString(),
        year: date.getFullYear().toString(),
        second: date.getSeconds().toString(),
        minute: date.getMinutes().toString(),
        hour:  date.getHours().toString()
    };

    return timestamp;
}


module.exports = {
    KickstartPayer,
    createTimestamp
};