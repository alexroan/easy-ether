import {loggedIn, accountLoaded, balanceLoaded, loggingIn, coinGeckoLoaded, currencyChosen, gettingFiatBalance, fiatBalanceLoaded, rampOpened, rampFailed, rampSuccess, rampClosed, resetRamp} from "./actions";
import Web3 from 'web3';
import Web3Modal from "web3modal";
import Torus from "@toruslabs/torus-embed";
import Portis from "@portis/web3";
import Authereum from "authereum";
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import {convertWeiToEth} from '../helpers';
import { subscribeToRampEvents } from "./subscriptions";

const CoinGecko = require('coingecko-api');

export const loadWeb3 = async (dispatch) => {
    dispatch(loggingIn());
    const providerOptions = {
        authereum: {
            package: Authereum
        },
        torus: {
            package: Torus,
            options:{
                network: "mainnet"
            }
        },
        portis: {
            package: Portis,
            options: {
              id: "473d6802-8441-4550-8cf0-691717a699a0"
            }
        },
        metamask: {
            package: window.web3
        }
    };
    
    const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions: providerOptions,
        theme: "dark"
    });

    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    dispatch(loggedIn(web3));
    loadAccount(dispatch, web3);
    return web3;
}

export const loadAccount = async (dispatch, web3) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    dispatch(accountLoaded(account));
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
        hostLogoUrl: 'https://cdn-images-1.medium.com/max/2600/1*nqtMwugX7TtpcS-5c3lRjw.png',
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