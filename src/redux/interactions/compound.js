import {cEthABI, addresses} from "../../compound/cEth.js";
import { cEthLoaded, setInterestRate, setUnderlyingBalance, setCEthBalance, depositing, depositConfirmation, finishedDepositing, withdrawing, withdrawConfirmation, finishedWithdrawing } from "../actions.js";
import { loadBalance } from "../interactions.js";

export const loadCompoundEther = async (dispatch, web3, account, network) => {
    const addr = addresses[network];
    const cEthInstance = new web3.eth.Contract(cEthABI, addr);
    dispatch(cEthLoaded(cEthInstance));
    calculateInterestRate(dispatch, cEthInstance, account);
    return cEthInstance;
}

export const calculateInterestRate = async (dispatch, cEthInstance, account) => {
    const ethMantissa = 1e18;
    const blocksPerDay = 4 * 60 * 24;
    const daysPerYear = 365;
    const supplyRatePerBlock = await cEthInstance.methods.supplyRatePerBlock().call(); //1000000000
    const supplyApy = (((Math.pow((supplyRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear - 1))) - 1) * 100;
    dispatch(setInterestRate(supplyApy));
    retrieveUnderlyingBalance(dispatch, cEthInstance, account);
    return supplyApy;
}

export const retrieveUnderlyingBalance = async (dispatch, cEthInstance, account) => {
    const underlyingBalance = await cEthInstance.methods.balanceOfUnderlying(account).call();
    dispatch(setUnderlyingBalance(underlyingBalance));
    retrieveCEthBalance(dispatch, cEthInstance, account);
    return underlyingBalance;
}

export const retrieveCEthBalance = async (dispatch, cEthInstance, account) => {
    let cEthBalance = await cEthInstance.methods.balanceOf(account).call();
    cEthBalance = (cEthBalance / 1e8);
    dispatch(setCEthBalance(cEthBalance));
    return cEthBalance;
}

export const supplyEth = async (dispatch, cEthInstance, account, supplyValue, web3, network) => {
    cEthInstance.methods.mint().send({from: account, value: supplyValue})
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

export const redeemEth = async (dispatch, cEthInstance, account, redeemAmount, web3, network) => {
    cEthInstance.methods.redeemUnderlying(redeemAmount).send({from: account})
        .once('transactionHash', (hash) => {
            dispatch(withdrawing());
        })
        .on('confirmation', (number, receipt) => {
            if(number < 4){
                dispatch(withdrawConfirmation(number+1));
                if(number === 3) {
                    dispatch(finishedWithdrawing());
                    loadBalance(dispatch, web3, account, network);
                }
            }
        })
        .on('error', (error) => {
            console.log(error);
        })
}