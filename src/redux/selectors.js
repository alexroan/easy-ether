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

//AAVE
const aaveLendingPool = state => get(state, 'aave.lendingPool', null);
export const aaveLendingPoolSelector = createSelector(aaveLendingPool, w => w);

const aaveAPY = state => get(state, 'aave.apy', 0);
export const aaveAPYSelector = createSelector(aaveAPY, w => w);

const aaveUserLiquidity = state => get(state, 'aave.userLiquidity', 0);
export const aaveUserLiquiditySelector = createSelector(aaveUserLiquidity, w => w);

//COMPOUND
const apy = state => get(state, 'compound.apy', "");
export const apySelector = createSelector(apy, w => w);

const cEthBalance = state => get(state, 'compound.cEthBalance', 0);
export const cEthBalanceSelector = createSelector(cEthBalance, w => w);

const underlyingBalance = state => get(state, 'compound.underlyingBalance', 0);
export const underlyingBalanceSelector = createSelector(underlyingBalance, w => w);

const supplyValue = state => get(state, 'compound.supplyValue', 0);
export const supplyValueSelector = createSelector(supplyValue, w => w);

const depositing = state => get(state, 'compound.depositing', false);
export const depositingSelector = createSelector(depositing, w => w);

const depositConfirmationNumber = state => get(state, 'compound.depositConfirmationNumber', 0);
export const depositConfirmationNumberSelector = createSelector(depositConfirmationNumber, w => w);

const redeemValue = state => get(state, 'compound.redeemValue', 0);
export const redeemValueSelector = createSelector(redeemValue, w => w);

const withdrawing = state => get(state, 'compound.withdrawing', false);
export const withdrawingSelector = createSelector(withdrawing, w => w);

const withdrawConfirmationNumber = state => get(state, 'compound.withdrawConfirmationNumber', 0);
export const withdrawConfirmationNumberSelector = createSelector(withdrawConfirmationNumber, w => w);