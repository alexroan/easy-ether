import {combineReducers} from 'redux';

function app(state = {}, action) {
    switch (action.type) {
        case 'TORUS_LOADED':
            return { ...state, torus: action.torus }
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
        default:
            return state;
    }
}

const rootReducer = new combineReducers({
    app, account
});

export default rootReducer;