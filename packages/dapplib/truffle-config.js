require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index renew noise assault hunt opinion blue ghost'; 
let testAccounts = [
"0x9d36282c547ea744452cdc6bffb97980df019423366927badb71eaf4ce0ff4d1",
"0xaeec263fe0181f509f2676ceab9a8358ed35dfc1e06df11c72003fcd2b7a264c",
"0x1f68b136d14b8b0992771eb0c17f073cc981ecb64e6ecbd3ae1cfeff7b6d7f02",
"0x60b58cfe80c89a76b24bffbdf6c820888f0082c70dab1ab09136b1cc58711d5e",
"0xc4a5dee04c23aa0c29713d316149c7f798f3256ae640a6c5c59fd9a81c5b38e5",
"0xb78d648c5a244514137b7a3040f6abc0aba53957986fde6149b5524754ccd118",
"0x70e7a698b69cf369283501661c395fbe091ed831f882594d2afcbac153d0ae3c",
"0xa35768e9baa20c70a18a9b3a00ea142797052ea54560f26a9b108ed91bd0a3f1",
"0xaecde6d87804846f5a7d3faa63a99d95e3fc62112bb53bc803b40dcda36b221e",
"0x711c64bd2f6e1bb586e06b2ea2245fc3dd228e7925fa8af19bd63082e1118961"
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

