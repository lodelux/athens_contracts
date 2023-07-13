// @ts-ignore
import dotenv from "dotenv";
import {BigNumber, ethers} from "ethers";
import {HardhatNetworkAccountUserConfig} from "hardhat/src/types/config";

dotenv.config();

export const startingEtherPerAccount = ethers.utils.parseUnits(BigNumber.from(1_000_000_000).toString(), "ether");

export const getPKs = () => {
    let deployerAccount, traderAccount, referrerAccount , investorAccount, investor1Account, investor2Account, investor3Account

    // PKs without `0x` prefix
    if (process.env.DEPLOYER_PK) deployerAccount = process.env.DEPLOYER_PK;
    if (process.env.TRADER_PK) traderAccount = process.env.TRADER_PK;
    if (process.env.REFERRER_PK) referrerAccount = process.env.REFERRER_PK;
    if (process.env.INVESTOR_PK) investorAccount = process.env.INVESTOR_PK;
    if (process.env.INVESTOR1_PK) investor1Account = process.env.INVESTOR1_PK;
    if (process.env.INVESTOR2_PK) investor2Account = process.env.INVESTOR2_PK;
    if (process.env.INVESTOR3_PK) investor3Account = process.env.INVESTOR3_PK;

    return [deployerAccount, traderAccount, referrerAccount , investorAccount, investor1Account, investor2Account, investor3Account].filter(pk => !!pk) as string[];
};

export const buildHardhatNetworkAccounts = (accounts: string[]) => {

    const hardhatAccounts = accounts.map(pk => {
        // hardhat network wants 0x prefix in front of PK
        const accountConfig: HardhatNetworkAccountUserConfig = {
            privateKey: pk,
            balance: startingEtherPerAccount.toString(),
        };
        return accountConfig;
    });
    return hardhatAccounts;
};
