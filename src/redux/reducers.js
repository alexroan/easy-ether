import {combineReducers} from 'redux';

function app(state = {}, action) {
    switch (action.type) {
        case 'RAMP_LOADED':
            return { ...state, ramp: action.ramp }
        case 'CETH_LOADED':
            return { ...state, cEthInstance: action.cEthInstance}
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

function save(state = {}, action) {
    switch(action.type) {
        case 'INTEREST_RATE_SET':
            return { ...state, apy: action.apy}
        case 'CETH_BALANCE_SET':
            return { ...state, cEthBalance: action.balance}
        case 'SUPPLY_VALUE_SET':
            return { ...state, supplyValue: action.supplyValue}
        default:
            return state;
    }
}

function account(state = {}, action) {
    switch (action.type) {
        case 'LOGGING_IN':
            return { ...state, loggingIn: true, error: false}
        case 'LOGGED_IN':
            return { ...state, loggingIn: false, web3: action.web3 }
        case 'LOGIN_FAILED':
            return { ...state, loggingIn: false, error: action.error}
        case 'ACCOUNT_LOADED':
            return { ...state, account: action.account }
        case 'BALANCE_LOADED':
            return { ...state, balance: action.balance }
        case 'NETWORK_LOADED':
            return { ...state, network: action.network }
        default:
            return state;
    }
}

function display(state = {}, action) {
    switch (action.type) {
        case 'PAGE_SELECTED':
            return { ...state, page: action.page }
        default:
            return state;
    }
}

const rootReducer = new combineReducers({
    app, account, display, topup, save
});

export default rootReducer;