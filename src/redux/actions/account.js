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

export function setNetwork(network){
    return {
        type: 'NETWORK_LOADED',
        network
    }
}