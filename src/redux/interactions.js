import {loggedIn, accountLoaded, balanceLoaded, loggingIn, coinGeckoLoaded, currencyChosen, gettingFiatBalance, fiatBalanceLoaded, rampOpened, rampFailed, rampSuccess, rampClosed, resetRamp, loginFailed} from "./actions";
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import {convertWeiToEth} from '../helpers';
import { subscribeToRampEvents, subscribeToAccountsChanging } from "./subscriptions";
import { getWeb3 } from "../getWeb3";

const CoinGecko = require('coingecko-api');

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
    loadCoinGecko(dispatch);
    return balance;
}

export const loadCoinGecko = async (dispatch) => {
    const coinGecko = new CoinGecko();
    dispatch(coinGeckoLoaded(coinGecko));
    return coinGecko;
}

export const choseCurrency = async (dispatch, currency, currencySymbol) => {
    dispatch(currencyChosen(currency, currencySymbol));
}

export const getFiatBalance = async (dispatch, web3, coinGecko, token, fiat, etherAmount) => {
    dispatch(gettingFiatBalance())
    let data = await coinGecko.simple.price({
        ids: [token],
        vs_currencies: [fiat],
    });
    console.log(data, token, fiat);
    let totalFiatBalance = data.data[token][fiat] * convertWeiToEth(web3, etherAmount);
    dispatch(fiatBalanceLoaded(totalFiatBalance));
    return data;
}

export const topupWallet = async (dispatch, account) => {
    const ramp = new RampInstantSDK({
        hostAppName: 'EasyInvest',
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