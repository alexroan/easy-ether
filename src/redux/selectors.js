import {get} from 'lodash';
import {createSelector} from 'reselect';

//APP
const torus = state => get(state, 'app.torus', null);
export const torusSelector = createSelector(torus, w => w);

const coinGecko = state => get(state, 'app.coinGecko', null);
export const coinGeckoSelector = createSelector(coinGecko, w => w);

//ACCOUNT
const loggingIn = state => get(state, 'account.loggingIn', null);
export const loggingInSelector = createSelector(loggingIn, w => w);

const web3 = state => get(state, 'account.web3', null);
export const web3Selector = createSelector(web3, w => w);

const userInfo = state => get(state, 'account.userInfo', null);
export const userInfoSelector = createSelector(userInfo, w => w);

const account = state => get(state, 'account.account', null);
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