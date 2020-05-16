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

function topup(state = {}, action) {
    switch (action.type) {
        case 'RAMP_OPENED':
            return { ...state, active: true }
        case 'RAMP_FAILED':
            return { ...state, active: false, error: true, response: action.response }
        case 'RAMP_CLOSED':
            return { ...state, active: false, response: action.response }
        case 'RAMP_SUCCESS':
            return { ...state, active: false, success: true, response: action.response }
        case 'RAMP_RESET':
            return { ...state, active: false, error: false, success: false, response: null }
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
        case 'CURRENCY_CHOSEN':
            return { ...state, currency: action.currency, currencySymbol: action.symbol}
        default:
            return state;
    }
}

const rootReducer = new combineReducers({
    app, account, display, topup
});

export default rootReducer;