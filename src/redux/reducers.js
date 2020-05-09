import {combineReducers} from 'redux';

function app(state = {}, action) {
    switch (action.type) {
        case 'TORUS_LOADED':
            return { ...state, torus: action.torus }
        case 'COINGECKO_LOADED':
            return { ...state, coinGecko: action.coinGecko } 
        default:
            return state;
    }
}

function account(state = {}, action) {
    switch (action.type) {
        case 'LOGGING_IN':
            return { ...state, loggingIn: true}
        case 'LOGGED_IN':
            return { ...state, loggingIn: false, web3: action.web3, userInfo: action.userInfo }
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

const rootReducer = new combineReducers({
    app, account, display
});

export default rootReducer;