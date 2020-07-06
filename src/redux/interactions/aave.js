import {addressProviderABI, addressProviderAddresses, lendingPoolABI, etherReserveAddress, aTokenABI} from "../../aave/aave";
import { addressProviderLoaded, lendingPoolAddressLoaded, lendingPoolLoaded, reserveDataLoaded , aPYLoaded, totalLiquidityLoaded, userDataLoaded, ethATokenAddressLoaded, ethATokenLoaded} from "../actions/aave";
import { depositing, depositConfirmation, finishedDepositing } from "../actions/deposit";
import { loadBalance } from "./account";
import { withdrawing, withdrawConfirmation, finishedWithdrawing } from "../actions/withdraw";

export const loadAaveAddressProvider = async (dispatch, web3, network, account) => {
    const addressProviderAddress = addressProviderAddresses[network];
    const providerInstance = new web3.eth.Contract(addressProviderABI, addressProviderAddress);
    dispatch(addressProviderLoaded(providerInstance));
    getLendingPoolAddress(dispatch, web3, providerInstance, account);
    return providerInstance;
}

export const getLendingPoolAddress = async (dispatch, web3, addressProvider, account) => {
    const lendingPoolAddress = await addressProvider.methods.getLendingPool().call()
        .catch((e) => {
            throw Error(`Error getting lendingPool address: ${e.message}`)
        });
    dispatch(lendingPoolAddressLoaded(lendingPoolAddress));
    loadLendingPool(dispatch, web3, lendingPoolAddress, account);
    return lendingPoolAddress;
}

export const loadLendingPool = async (dispatch, web3, address, account) => {
    const instance = new web3.eth.Contract(lendingPoolABI, address);
    dispatch(lendingPoolLoaded(instance));
    getUserAccountData(dispatch, web3, instance, account);
    getReserveData(dispatch, web3, instance);
    return instance;
}

export const getUserAccountData = async (dispatch, web3, lendingPool, account) => {
    const data = await lendingPool.methods.getUserAccountData(account).call()
        .catch((e) => {
            throw Error(`Error getting aave user data: ${e.message}`)
        });
    dispatch(userDataLoaded(data));
    loadTotalLiquidity(dispatch, web3, data);
    return data;
}

export const loadTotalLiquidity = async (dispatch, web3, data) => {
    dispatch(totalLiquidityLoaded(data.totalLiquidityETH));
    return data.totalLiquidityETH;
}


export const getReserveData = async (dispatch, web3, lendingPool) => {
    const data = await lendingPool.methods.getReserveData(etherReserveAddress).call()
        .catch((e) => {
            throw Error(`Error getting aave reserve data: ${e.message}`)
        });
    dispatch(reserveDataLoaded(data));
    loadAPY(dispatch, data);
    loadEthATokenAddress(dispatch, web3, data);
    return data;
}

export const loadEthATokenAddress = async (dispatch, web3, data) => {
    const aTokenAddress = data.aTokenAddress;
    dispatch(ethATokenAddressLoaded(aTokenAddress));
    loadEthAToken(dispatch, web3, aTokenAddress);
    return aTokenAddress;
}

export const loadEthAToken = async (dispatch, web3, ethATokenAddress) => {
    const instance = new web3.eth.Contract(aTokenABI, ethATokenAddress);
    dispatch(ethATokenLoaded(instance));
    return instance;
}

export const loadAPY = async (dispatch, data) => {
    const apy = (data.liquidityRate / 10000000000000000000000000);
    dispatch(aPYLoaded(apy));
    return apy;
}

export const depositEth = async (dispatch, web3, lendingPool, account, supplyValue, network) => {
    // Using referralcode = 0 for now. Wait for application to return
    lendingPool.methods.deposit(etherReserveAddress, supplyValue, 0).send({from: account, value: supplyValue})
        .once('transactionHash', (hash) => {
            dispatch(depositing());
        })
        .on('confirmation', (number, receipt) => {
            if (number < 4){
                dispatch(depositConfirmation(number+1));
                if (number === 3) {
                    dispatch(finishedDepositing());
                    loadBalance(dispatch, web3, account, network);
                }
            }
        })
        .on('error', (error) => {
            console.log(error);
        });
}

export const withdrawEth = async (dispatch, web3, ethAToken, account, withdrawAmount, network) => {
    ethAToken.methods.redeem(withdrawAmount).send({from: account})
        .once('transactionHash', (hash) => {
            dispatch(withdrawing());
        })
        .on('confirmation', (number, receipt) => {
            if (number < 4){
                dispatch(withdrawConfirmation(number+1));
                if (number === 3) {
                    dispatch(finishedWithdrawing());
                    loadBalance(dispatch, web3, account, network);
                }
            }
        })
        .on('error', (error) => {
            console.log(error);
        });
}