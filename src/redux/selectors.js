import {get} from 'lodash';
import {createSelector} from 'reselect';

const torus = state => get(state, 'app.torus', null);
export const torusSelector = createSelector(torus, w => w);

const loggingIn = state => get(state, 'account.loggingIn', null);
export const loggingInSelector = createSelector(loggingIn, w => w);

const web3 = state => get(state, 'account.web3', null);
export const web3Selector = createSelector(web3, w => w);

const account = state => get(state, 'account.account', null);
export const accountSelector = createSelector(account, w => w);

const balance = state => get(state, 'account.balance', null);
export const balanceSelector = createSelector(balance, w => w);