import "@nomicfoundation/hardhat-toolbox";
import {HardhatUserConfig} from "hardhat/src/types/config";
import "@nomiclabs/hardhat-ethers";
import {HardhatUserConfig as WithPluginsConfig} from "hardhat/config";
import {buildHardhatNetworkAccounts, getPKs} from "./utils/configInit";
import "./tasks/node";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import "hardhat-interface-generator";
import 'solidity-docgen';

type DeploymentConfig = HardhatUserConfig & WithPluginsConfig;

const accounts = getPKs();
const hardhatNetworkAccounts = buildHardhatNetworkAccounts(accounts);

const config: DeploymentConfig = {
    gasReporter: {
        currency: "USD",
        enabled: false,
        coinmarketcap: "eaba550d-b674-4337-afef-c0393347ac1d",
        token: "BNB",
        gasPriceApi: "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice",
        showTimeSpent: true,
    },
    solidity: {
        compilers: [
            {
                version: "0.8.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.2",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.5.5",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },

    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // accounts visible to hardhat network used by `hardhat node --fork` (yarn net <chainName>)
            accounts: hardhatNetworkAccounts,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            timeout: 300000,
            accounts: "remote",
        },
        bsc: {
            url: "https://bsc-mainnet.nodereal.io/v1/083880c5faac4d7ca5b451a403575f08",
            chainId: 56,
            accounts,
        },
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            chainId: 4,
            accounts,
        },
    },
};

export default config;
