export function torusLoaded(torus){
    return {
        type: 'TORUS_LOADED',
        torus
    }
}

export function loggingIn(){
    return {
        type: 'LOGGING_IN'
    }
}

export function loggedIn(web3, userInfo){
    return {
        type: 'LOGGED_IN',
        web3,
        userInfo
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

export function coinGeckoLoaded(coinGecko){
    return {
        type: 'COINGECKO_LOADED',
        coinGecko
    }
}

export function tabChosen(tab){
    return {
        type: 'TAB_CHOSEN',
        tab
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