import {addressProviderABI, addressProviderAddresses, lendingPoolABI, etherReserveAddress} from "../../aave/aave";
import { addressProviderLoaded, lendingPoolAddressLoaded, lendingPoolLoaded, reserveDataLoaded , aPYLoaded, totalLiquidityLoaded, userDataLoaded} from "../actions/aave";

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
    loadAPY(dispatch, web3, data);
    return data;
}

export const loadAPY = async (dispatch, web3, data) => {
    const apy = (data.liquidityRate / 10000000000000000000000000);
    dispatch(aPYLoaded(apy));
    return apy;
}