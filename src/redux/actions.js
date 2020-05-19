export function loggingIn(){
    return {
        type: 'LOGGING_IN'
    }
}

export function loggedIn(web3){
    return {
        type: 'LOGGED_IN',
        web3
    }
}

export function loginFailed(error){
    return {
        type: 'LOGIN_FAILED',
        error
    }
}

export function accountLoaded(account){
    return {
        type: 'ACCOUNT_LOADED',
        account
    }
}

export function balanceLoaded(balance){
    return {
        type: 'BALANCE_LOADED',
        balance
    }
}

export function rampLoaded(ramp){
    return {
        type: 'RAMP_LOADED',
        ramp
    }
}

export function coinGeckoLoaded(coinGecko){
    return {
        type: 'COINGECKO_LOADED',
        coinGecko
    }
}

export function currencyChosen(currency, symbol){
    return {
        type: 'CURRENCY_CHOSEN',
        currency,
        symbol
    }
}

export function gettingFiatBalance(){
    return {
        type: 'GETTING_FIAT_BALANCE'
    }
}

export function fiatBalanceLoaded(balance){
    return {
        type: 'GOT_FIAT_BALANCE',
        balance
    }
}

export function rampOpened(){
    return {
        type: 'RAMP_OPENED'
    }
}

export function rampSuccess(response){
    return {
        type: 'RAMP_SUCCESS',
        response
    }
}

export function rampClosed(response){
    return {
        type: 'RAMP_CLOSED',
        response
    }
}

export function rampFailed(response){
    return {
        type: 'RAMP_FAILED',
        response
    }
}

export function resetRamp(){
    return {
        type: 'RAMP_RESET'
    }
}