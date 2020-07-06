import {combineReducers} from 'redux';

function app(state = {}, action) {
    switch (action.type) {
        case 'RAMP_LOADED':
            return { ...state, ramp: action.ramp }
        case 'COMP_CETH_LOADED':
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

function deposit(state = {}, action) {
    switch (action.type) {
        case 'SUPPLY_VALUE_SET':
            return { ...state, supplyValue: action.supplyValue}
        case 'DEPOSITING_STARTED':
            return { ...state, depositing: true, depositConfirmationNumber: 0}
        case 'DEPOSITING_CONFIRMATION':
            return { ...state, depositConfirmationNumber: action.number}
        case 'DEPOSITING_FINISHED':
            return { ...state, depositing: false}
        default:
            return state;
    }
}

function withdraw(state = {}, action) {
    switch (action.type) {
        case 'REDEEM_VALUE_SET':
            return { ...state, redeemValue: action.redeemValue}
        case 'WITHDRAWING_STARTED':
            return { ...state, withdrawing: true, withdrawConfirmationNumber: 0}
        case 'WITHDRAWING_CONFIRMATION':
            return { ...state, withdrawConfirmationNumber: action.number}
        case 'WITHDRAWING_FINISHED':
            return { ...state, withdrawing: false}
        default:
            return state;
    }
}

function compound(state = {}, action) {
    switch(action.type) {
        case 'COMP_INTEREST_RATE_SET':
            return { ...state, apy: action.apy}
        case 'COMP_CETH_BALANCE_SET':
            return { ...state, cEthBalance: action.balance}
        case 'COMP_UNDERLYING_BALANCE_SET':
            return { ...state, underlyingBalance: action.underlyingBalance}
        default:
            return state;
    }
}

function aave(state = {}, action) {
    switch (action.type) {
        case 'AAVE_ADDRESS_PROVIDER_LOADED':
            return { ...state, addressProvider: action.instance }
        case 'AAVE_LENDING_POOL_ADDRESS_LOADED':
            return { ...state, lendingPoolAddress: action.address}
        case 'AAVE_LENDING_POOL_LOADED':
            return { ...state, lendingPool: action.instance }
        case 'AAVE_LENDING_RESERVE_DATA_LOADED':
            return { ...state, reserveData: action.data}
        case 'AAVE_APY_LOADED':
            return { ...state, apy: action.apy}
        case 'AAVE_LENDING_USER_DATA_LOADED':
            return { ...state, userData: action.data}
        case 'AAVE_TOTAL_LIQUIDITY_LOADED':
            return { ...state, userLiquidity: action.liquidity}
        default:
            return state;
    }
}

function account(state = {}, action) {
    switch (action.type) {
        case 'LOGGING_IN':
            return { ...state, loggingIn: true, loggedIn: false, error: false}
        case 'LOGGED_IN':
            return { ...state, loggingIn: false, loggedIn: true, web3: action.web3 }
        case 'LOGIN_FAILED':
            return { ...state, loggingIn: false, loggedIn: false, error: action.error}
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
            return { ...state, page: action.page, parameter: action.parameter }
        default:
            return state;
    }
}

const rootReducer = new combineReducers({
    app, account, aave, display, topup, compound, deposit, withdraw
});

export default rootReducer;