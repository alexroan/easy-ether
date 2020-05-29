import {loggedIn, accountLoaded, balanceLoaded, loggingIn, rampOpened, rampFailed, rampSuccess, rampClosed, resetRamp, loginFailed, cEthLoaded, setInterestRate} from "./actions";
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import { subscribeToRampEvents, subscribeToAccountsChanging } from "./subscriptions";
import { getWeb3 } from "../getWeb3";
import {cEth} from "../compound/abis/cEth.js";

export const loadWeb3 = async (dispatch) => {
    dispatch(loggingIn());
    let web3 = null;
    try{
        web3 = await getWeb3();
        dispatch(loggedIn(web3));
        loadAccount(dispatch, web3);
    }
    catch(error) {
        dispatch(loginFailed(error));
    }
    return web3;
}

export const loadAccount = async (dispatch, web3) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    dispatch(accountLoaded(account));
    subscribeToAccountsChanging(dispatch, web3);
    loadBalance(dispatch, web3, account);
    return account;
}
  
export const loadBalance = async (dispatch, web3, account) => {
    const balance = await web3.eth.getBalance(account);
    dispatch(balanceLoaded(balance));
    loadCompoundEther(dispatch, web3);
    return balance;
}

export const loadCompoundEther = async (dispatch, web3) => {
    // TODO - determine network first, then set the address
    // Currently only works on local fork of mainnet
    const addr = "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5";
    const cEthInstance = new web3.eth.Contract(cEth, addr);
    dispatch(cEthLoaded(cEthInstance));
    calculateInterestRate(dispatch, cEthInstance);
    return cEthInstance;
}

export const calculateInterestRate = async (dispatch, cEthInstance) => {
    const ethMantissa = 1e18;
    const blocksPerDay = 4 * 60 * 24;
    const daysPerYear = 365;
    const supplyRatePerBlock = await cEthInstance.methods.supplyRatePerBlock().call(); //1000000000
    const supplyApy = (((Math.pow((supplyRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear - 1))) - 1) * 100;
    dispatch(setInterestRate(supplyApy));
    return supplyApy;
}

export const topupWallet = async (dispatch, account) => {
    const ramp = new RampInstantSDK({
        hostAppName: 'Easy Ether',
        hostLogoUrl: 'https://alexroan.github.io/easy-ether/static/media/logo-white.86143c9b.png',
        variant: 'auto',
        userAddress: account
    })
    .show();
    dispatch(rampOpened());
    subscribeToRampEvents(dispatch, ramp);
}

export const topupSuccess = async (dispatch, response) => {
    console.log("Topup success", response);
    dispatch(rampSuccess(response));
}

export const topupClose = async (dispatch, response) => {
    console.log("Topup closed", response);
    dispatch(rampClosed(response));
}

export const topupFail = async (dispatch, response) => {
    console.log("Topup fail", response);
    dispatch(rampFailed(response));
}

export const resetTopup = async (dispatch) => {
    dispatch(resetRamp());
}