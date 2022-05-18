require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note predict company half kitten bone gaze'; 
let testAccounts = [
"0xdb47afd5b777ce89f53a956da34e5a0ef8307ed6486030bcf60feac2867dc433",
"0x4acf9d7d43123405cfc64ced2e88a872d3921c7effd0d5f1d0363aee90f72f56",
"0x67256beeb0ddf85e083f57b2fcf961b3e0efd82c08b86d37df65832e1e9b48af",
"0xb6d6d323b0a028f867c56855870976814d43bcf5c88f47dbd786ec82c80c735a",
"0x3b18623800d2a96058fea162e0c8a637dcfd5a4301d06455300bec65f02a5ff4",
"0xc37c3d2eee292d7155dd2017957163e7c122e0bd1cc67375e7620dcba260f316",
"0xf28d5b22e7714c64942cba4584fccea95f796a5af50a6a51f10cc64f69c56067",
"0x1cbbfcd5a476f31dd0d156821beee119fe807e87b5f70776d3306ed796a9158b",
"0x59ba71a3c3140b24714a79327eb23c286fa9ace110c2f7f88bb1f7989cb6f453",
"0x85fb9a14479206e08a2c7368b79f9cb88661412a7d0839d7740e06bcc95b618a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

