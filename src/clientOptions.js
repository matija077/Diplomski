function ClientOps(
    mnemonic = null,
    applicationName = null,
    contractId = null,
    network = 'testnet',
) {
    this.network = network;
    this.wallet = {
        mnemonic: mnemonic,
    };
    this.apps = {
        [applicationName]: {
            contractId: contractId,
        }
    };
};

module.exports = ClientOps;