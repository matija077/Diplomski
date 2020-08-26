function ClientOps(
    mnemonic = null,
    applicationName = null,
    contractId = null,
    dpnsContractId,
    network = 'testnet',
) {
    this.network = network;
    this.wallet = {
        mnemonic: mnemonic,
    };
    this.apps = {
        [applicationName]: {
            contractId: contractId,
        },
        dpns: {
            contractId: dpnsContractId
        }
    };
};

module.exports = ClientOps;