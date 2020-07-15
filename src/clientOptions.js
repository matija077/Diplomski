function ClientOps(
    mnemonic = null,
    network = 'testnet',
) {
    this.network = network;
    this.wallet = {
        mnemonic: mnemonic,
    };
};

module.exports = ClientOps;