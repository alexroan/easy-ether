import {get} from 'lodash';
import {createSelector} from 'reselect';

//APP
const coinGecko = state => get(state, 'app.coinGecko', null);
export const coinGeckoSelector = createSelector(coinGecko, w => w);

const ramp = state => get(state, 'app.ramp', null);
export const rampSelector = createSelector(ramp, w => w);

//ACCOUNT
const loggingIn = state => get(state, 'account.loggingIn', false);
export const loggingInSelector = createSelector(loggingIn, w => w);

const web3 = state => get(state, 'account.web3', null);
export const web3Selector = createSelector(web3, w => w);

const account = state => get(state, 'account.account', "");
export const accountSelector = createSelector(account, w => w);

const balance = state => get(state, 'account.balance', null);
export const balanceSelector = createSelector(balance, w => w);

const loadingFiatBalance = state => get(state, 'account.loadingFiatBalance', false);
export const loadingFiatBalanceSelector = createSelector(loadingFiatBalance, w => w);

const fiatBalance = state => get(state, 'account.fiatBalance', null);
export const fiatBalanceSelector = createSelector(fiatBalance, w => w);

//DISPLAY
const tab = state => get(state, 'display.tab', null);
export const tabSelector = createSelector(tab, w => w);

const currency = state => get(state, 'display.currency', 'gbp');
export const currencySelector = createSelector(currency, w => w);

const currencySymbol = state => get(state, 'display.currencySymbol', "£");
export const currencySymbolSelector = createSelector(currencySymbol, w => w);

//TOPUP
const topupOpen = state => get(state, 'topup.active', false);
export const topupOpenSelector = createSelector(topupOpen, w => w);

const topupError = state => get(state, 'topup.error', false);
export const topupErrorSelector = createSelector(topupError, w => w);

const topupSuccess = state => get(state, 'topup.success', false);
export const topupSuccessSelector = createSelector(topupSuccess, w => w);

const topupResponse = state => get(state, 'topup.response', null);
export const topupResponseSelector = createSelector(topupResponse, w => w);