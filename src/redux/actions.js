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

export function cEthLoaded(cEthInstance){
    return {
        type: 'CETH_LOADED',
        cEthInstance
    }
}

export function rampLoaded(ramp){
    return {
        type: 'RAMP_LOADED',
        ramp
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

export function selectPage(page){
    return {
        type: 'PAGE_SELECTED',
        page
    }
}

export function setInterestRate(apy){
    return {
        type: 'INTEREST_RATE_SET',
        apy
    }
}

export function setCEthBalance(balance){
    return {
        type: 'CETH_BALANCE_SET',
        balance
    }
}

export function setUnderlyingBalance(underlyingBalance) {
    return {
        type: 'UNDERLYING_BALANCE_SET',
        underlyingBalance
    }
}

export function setSupplyValue(supplyValue){
    return {
        type: 'SUPPLY_VALUE_SET',
        supplyValue
    }
}

export function depositing(){
    return {
        type: 'DEPOSITING_STARTED',
    }
}

export function depositConfirmation(number){
    return {
        type: 'DEPOSITING_CONFIRMATION',
        number
    }
}

export function finishedDepositing(){
    return {
        type: 'DEPOSITING_FINISHED',
    }
}