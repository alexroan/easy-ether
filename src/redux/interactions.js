import Torus from "@toruslabs/torus-embed";
import {torusLoaded, loggedIn, accountLoaded, balanceLoaded, loggingIn} from "./actions";
import Web3 from 'web3';

export const initializeTorus = async (dispatch) => {
    dispatch(loggingIn());
    const torus = new Torus({
        buttonPosition: "top-right" // default: bottom-left
    });

    await torus.init({
        enableLogging: true, // default: false
        network: {
          host: "kovan", // default: mainnet
          chainId: 42, // default: 1
          networkName: "Kovan Test Network" // default: Main Ethereum Network
        },
        showTorusButton: false
    });

    dispatch(torusLoaded(torus));
    return torus
}

export const login = async (dispatch, torus) => {
    await torus.login(); // await torus.ethereum.enable()
    const web3 = new Web3(torus.provider);
    dispatch(loggedIn(web3));
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

export const topupWallet = async (dispatch, torus, account) => {
    // return await torus.initiateTopup('rampnetwork', {
    //   selectedCurrency: "GBP",
    //   fiatValue: 1,
    //   selectedCryptoCurrency: "ETH",
    //   selectedAddress: account
    // });
}