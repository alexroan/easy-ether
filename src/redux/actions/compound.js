export function cEthLoaded(cEthInstance){
    return {
        type: 'CETH_LOADED',
        cEthInstance
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

export function setRedeemValue(redeemValue){
    return {
        type: 'REDEEM_VALUE_SET',
        redeemValue
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

export function withdrawing(){
    return {
        type: 'WITHDRAWING_STARTED',
    }
}

export function withdrawConfirmation(number){
    return {
        type: 'WITHDRAWING_CONFIRMATION',
        number
    }
}

export function finishedWithdrawing(){
    return {
        type: 'WITHDRAWING_FINISHED',
    }
}