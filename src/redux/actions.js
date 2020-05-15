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

export function topupChanged(amount){
    return {
        type: 'TOPUP_AMOUNT_CHANGED',
        amount
    }
}

export function setEthRecipient(recipient){
    return {
        type: 'ETH_SEND_RECIPIENT',
        recipient
    }
}

export function setEthSendAmount(amount){
    return {
        type: 'ETH_SEND_AMOUNT',
        amount
    }
}

export function setEthSendTransactionHash(hash){
    return {
        type: 'ETH_SEND_HASH',
        hash
    }
}

export function setEthSendReceipt(receipt){
    return {
        type: 'ETH_SEND_RECEIPT',
        receipt
    }
}

export function setEthSendConfirmation(receipt, confirmation){
    return {
        type: 'ETH_SEND_CONFIRMATION',
        receipt,
        confirmation
    }
}

export function setEthSendError(error){
    return {
        type: 'ETH_SEND_ERROR',
        error
    }
}