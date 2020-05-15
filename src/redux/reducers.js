import {combineReducers} from 'redux';

function app(state = {}, action) {
    switch (action.type) {
        case 'COINGECKO_LOADED':
            return { ...state, coinGecko: action.coinGecko } 
        case 'RAMP_LOADED':
            return { ...state, ramp: action.ramp }
        default:
            return state;
    }
}

function account(state = {}, action) {
    switch (action.type) {
        case 'LOGGING_IN':
            return { ...state, loggingIn: true}
        case 'LOGGED_IN':
            return { ...state, loggingIn: false, web3: action.web3 }
        case 'ACCOUNT_LOADED':
            return { ...state, account: action.account }
        case 'BALANCE_LOADED':
            return { ...state, balance: action.balance }
        case 'GETTING_FIAT_BALANCE':
            return { ...state, loadingFiatBalance: true }
        case 'GOT_FIAT_BALANCE':
            return { ...state, loadingFiatBalance: false, fiatBalance: action.balance}
        default:
            return state;
    }
}

function display(state = {}, action) {
    switch (action.type) {
        case 'TAB_CHOSEN':
            return { ...state, tab: action.tab}
        case 'CURRENCY_CHOSEN':
            return { ...state, currency: action.currency, currencySymbol: action.symbol}
        default:
            return state;
    }
}

function topup(state = {}, action){
    switch (action.type) {
        case 'TOPUP_AMOUNT_CHANGED':
            return { ...state, amount: action.amount}
        default:
            return state;
    }
}

function send(state = {}, action){
    switch (action.type) {
        case 'ETH_SEND_RECIPIENT':
            return { ...state, recipient: action.recipient}
        case 'ETH_SEND_AMOUNT':
            return { ...state, amount: action.amount}
        case 'ETH_SEND_HASH':
            return { ...state, hash: action.hash}
        case 'ETH_SEND_RECEIPT':
            return { ...state, receipt: action.receipt}
        case 'ETH_SEND_CONFIRMATION':
            return { ...state, confirmation: action.confirmation}
        case 'ETH_SEND_ERROR':
            return { ...state, error: action.error}
        default:
            return state;
    }
}

const rootReducer = new combineReducers({
    app, account, display, topup, send
});

export default rootReducer;