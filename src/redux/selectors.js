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
const topupAmount = state => get(state, 'topup.amount', 0);
export const topupAmountSelector = createSelector(topupAmount, w => w);

//SEND
const ethSendAmount = state => get(state, 'send.amount', "");
export const ethSendAmountSelector = createSelector(ethSendAmount, w => w);

const ethSendRecipient = state => get(state, 'send.recipient', "");
export const ethSendRecipientSelector = createSelector(ethSendRecipient, w => w);

const ethSendHash = state => get(state, 'send.hash', "");
export const ethSendHashSelector = createSelector(ethSendHash, w => w);

const ethSendReceipt = state => get(state, 'send.receipt', "");
export const ethSendReceiptSelector = createSelector(ethSendReceipt, w => w);

const ethSendConfirmation = state => get(state, 'send.confirmation', 0);
export const ethSendConfirmationSelector = createSelector(ethSendConfirmation, w => w);

const ethSendError = state => get(state, 'send.error', "");
export const ethSendErrorSelector = createSelector(ethSendError, w => w);
