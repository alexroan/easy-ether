import {get} from 'lodash';
import {createSelector} from 'reselect';

//APP
const ramp = state => get(state, 'app.ramp', null);
export const rampSelector = createSelector(ramp, w => w);

const compoundEthInstance = state => get(state, 'app.cEthInstance', null);
export const compoundEthInstanceSelector = createSelector(compoundEthInstance, w => w);

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

const parameter = state => get(state, 'display.parameter', "");
export const pageParameterSelector = createSelector(parameter, w => w);


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

const aaveEthAToken = state => get(state, 'aave.ethAToken', null);
export const aaveEthATokenSelector = createSelector(aaveEthAToken, w => w);


//COMPOUND
const compoundAPY = state => get(state, 'compound.apy', "");
export const compoundAPYSelector = createSelector(compoundAPY, w => w);

const compoundEthBalance = state => get(state, 'compound.cEthBalance', 0);
export const compoundEthBalanceSelector = createSelector(compoundEthBalance, w => w);

const compoundUnderlyingBalance = state => get(state, 'compound.underlyingBalance', 0);
export const compoundUnderlyingBalanceSelector = createSelector(compoundUnderlyingBalance, w => w);


//WITHDRAW
const redeemValue = state => get(state, 'withdraw.redeemValue', 0);
export const redeemValueSelector = createSelector(redeemValue, w => w);

const withdrawing = state => get(state, 'withdraw.withdrawing', false);
export const withdrawingSelector = createSelector(withdrawing, w => w);

const withdrawConfirmationNumber = state => get(state, 'withdraw.withdrawConfirmationNumber', 0);
export const withdrawConfirmationNumberSelector = createSelector(withdrawConfirmationNumber, w => w);

//DEPOSIT
const supplyValue = state => get(state, 'deposit.supplyValue', 0);
export const supplyValueSelector = createSelector(supplyValue, w => w);

const depositing = state => get(state, 'deposit.depositing', false);
export const depositingSelector = createSelector(depositing, w => w);

const depositConfirmationNumber = state => get(state, 'deposit.depositConfirmationNumber', 0);
export const depositConfirmationNumberSelector = createSelector(depositConfirmationNumber, w => w);