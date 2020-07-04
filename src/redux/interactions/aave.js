import {addressProviderABI, addressProviderAddresses, lendingPoolABI, etherReserveAddress} from "../../aave/aave";
import { addressProviderLoaded, lendingPoolAddressLoaded, lendingPoolLoaded, reserveDataLoaded } from "../actions/aave";

export const loadAaveAddressProvider = async (dispatch, web3, network) => {
    const addressProviderAddress = addressProviderAddresses[network];
    const providerInstance = new web3.eth.Contract(addressProviderABI, addressProviderAddress);
    dispatch(addressProviderLoaded(providerInstance));
    getLendingPoolAddress(dispatch, web3, providerInstance);
    return providerInstance;
}

export const getLendingPoolAddress = async (dispatch, web3, addressProvider) => {
    const lendingPoolAddress = await addressProvider.methods.getLendingPool().call()
        .catch((e) => {
            throw Error(`Error getting lendingPool address: ${e.message}`)
        });
    dispatch(lendingPoolAddressLoaded(lendingPoolAddress));
    loadLendingPool(dispatch, web3, lendingPoolAddress);
    return lendingPoolAddress;
}

export const loadLendingPool = async (dispatch, web3, address) => {
    const instance = new web3.eth.Contract(lendingPoolABI, address);
    dispatch(lendingPoolLoaded(instance));
    getReserveData(dispatch, web3, instance);
    return instance;
}

//liquidityRate is the desired field
export const getReserveData = async (dispatch, web3, lendingPool) => {
    const data = await lendingPool.methods.getReserveData(etherReserveAddress).call()
        .catch((e) => {
            throw Error(`Error getting aave reserve data: ${e.message}`)
        });
    dispatch(reserveDataLoaded(data));
    return data;
}