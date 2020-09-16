function ClientOps(
    mnemonic = null,
    applicationName = null,
    contractId = null,
    dpnsContractId,
    network = 'evonet',
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

/**
 * dpns: {
            contractId: dpnsContractId
        }
 */

module.exports = ClientOps;