import Torus from "@toruslabs/torus-embed";
import {torusLoaded, loggedIn, accountLoaded, balanceLoaded, loggingIn, coinGeckoLoaded, tabChosen, currencyChosen} from "./actions";
import Web3 from 'web3';

const CoinGecko = require('coingecko-api');

export const initializeTorus = async (dispatch) => {
    dispatch(loggingIn());
    const torus = new Torus({
        buttonPosition: "top-right" // default: bottom-left
    });

    await torus.init({
        enableLogging: true, // default: false
        // network: {
        //   host: "kovan", // default: mainnet
        //   chainId: 42, // default: 1
        //   networkName: "Kovan Test Network" // default: Main Ethereum Network
        // },
        showTorusButton: false
    });

    dispatch(torusLoaded(torus));
    return torus
}

export const login = async (dispatch, torus) => {
    await torus.login(); // await torus.ethereum.enable()
    const web3 = new Web3(torus.provider);
    const userInfo = await torus.getUserInfo();
    dispatch(loggedIn(web3, userInfo));
}

export const loadCoinGecko = async (dispatch) => {
    const coinGecko = new CoinGecko();
    dispatch(coinGeckoLoaded(coinGecko));
}

export const loadAccount = async (dispatch, web3) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    dispatch(accountLoaded(account));
    return account;
}
  
export const loadBalance = async (dispatch, web3, account) => {
    const balance = await web3.eth.getBalance(account);
    dispatch(balanceLoaded(balance));
    return balance;
}

export const choseTab = async (dispatch, tabName) => {
    dispatch(tabChosen(tabName));
}

export const choseCurrency = async (dispatch, currency, currencySymbol) => {
    dispatch(currencyChosen(currency, currencySymbol));
}

export const getFiatBalance = async (dispatch, coinGecko, token, fiat, etherAmount) => {
    // dispatch(gettingFiatBalance(fiat))
    let data = await coinGecko.simple.price({
        ids: [token],
        vs_currencies: [fiat],
    });
    let totalFiatBalance = data.data[token][fiat] * etherAmount;
    // dispatch(fiatBalanceLoaded(totalFiatBalance));
    return data;
}

export const topupWallet = async (dispatch, torus, currency, fiatValue, account) => {
    // dispatch(toppingUp());
    const toppedUp = await torus.initiateTopup('rampnetwork', {
      selectedCurrency: currency,
      fiatValue: fiatValue,
      selectedCryptoCurrency: "ETH",
      selectedAddress: account
    });
    console.log("Topped up", toppedUp);
    // dispatch(finihedToppingUp(toppedUp));
}