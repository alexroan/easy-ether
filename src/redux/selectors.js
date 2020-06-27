import {get} from 'lodash';
import {createSelector} from 'reselect';

//APP
const ramp = state => get(state, 'app.ramp', null);
export const rampSelector = createSelector(ramp, w => w);

const cEthInstance = state => get(state, 'app.cEthInstance', null);
export const cEthInstanceSelector = createSelector(cEthInstance, w => w);

//ACCOUNT
const loggingIn = state => get(state, 'account.loggingIn', false);
export const loggingInSelector = createSelector(loggingIn, w => w);

const loggedIn = state => get(state, 'account.loggedIn', false);
export const loggedInSelector = createSelector(loggedIn, w => w);

const loggingInError = state => get(state, 'account.error', false);
export const loggingInErrorSelector = createSelector(loggingInError, w => w);

const web3 = state => get(state, 'account.web3', null);
export const web3Selector = createSelector(web3, w => w);

const account = state => get(state, 'account.account', "");
export const accountSelector = createSelector(account, w => w);

const balance = state => get(state, 'account.balance', "");
export const balanceSelector = createSelector(balance, w => w);

const network = state => get(state, 'account.network', null);
export const networkSelector = createSelector(network, w => w);


//DISPLAY
const page = state => get(state, 'display.page', "");
export const pageSelector = createSelector(page, w => w);


//TOPUP
const topupOpen = state => get(state, 'topup.active', false);
export const topupOpenSelector = createSelector(topupOpen, w => w);

const topupError = state => get(state, 'topup.error', false);
export const topupErrorSelector = createSelector(topupError, w => w);

const topupSuccess = state => get(state, 'topup.success', false);
export const topupSuccessSelector = createSelector(topupSuccess, w => w);

const topupResponse = state => get(state, 'topup.response', null);
export const topupResponseSelector = createSelector(topupResponse, w => w);


//SAVE
const apy = state => get(state, 'save.apy', "");
export const apySelector = createSelector(apy, w => w);

const cEthBalance = state => get(state, 'save.cEthBalance', 0);
export const cEthBalanceSelector = createSelector(cEthBalance, w => w);

const underlyingBalance = state => get(state, 'save.underlyingBalance', 0);
export const underlyingBalanceSelector = createSelector(underlyingBalance, w => w);

const supplyValue = state => get(state, 'save.supplyValue', 0);
export const supplyValueSelector = createSelector(supplyValue, w => w);

const depositing = state => get(state, 'save.depositing', false);
export const depositingSelector = createSelector(depositing, w => w);

const depositConfirmationNumber = state => get(state, 'save.depositConfirmationNumber', 0);
export const depositConfirmationNumberSelector = createSelector(depositConfirmationNumber, w => w);

const redeemValue = state => get(state, 'save.redeemValue', 0);
export const redeemValueSelector = createSelector(redeemValue, w => w);

const withdrawing = state => get(state, 'save.withdrawing', false);
export const withdrawingSelector = createSelector(withdrawing, w => w);

const withdrawConfirmationNumber = state => get(state, 'save.withdrawConfirmationNumber', 0);
export const withdrawConfirmationNumberSelector = createSelector(withdrawConfirmationNumber, w => w);