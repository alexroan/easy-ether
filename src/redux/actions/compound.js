export function cEthLoaded(cEthInstance){
    return {
        type: 'COMP_CETH_LOADED',
        cEthInstance
    }
}

export function setInterestRate(apy){
    return {
        type: 'COMP_INTEREST_RATE_SET',
        apy
    }
}

export function setCEthBalance(balance){
    return {
        type: 'COMP_CETH_BALANCE_SET',
        balance
    }
}

export function setUnderlyingBalance(underlyingBalance) {
    return {
        type: 'COMP_UNDERLYING_BALANCE_SET',
        underlyingBalance
    }
}

export function setSupplyValue(supplyValue){
    return {
        type: 'COMP_SUPPLY_VALUE_SET',
        supplyValue
    }
}

export function setRedeemValue(redeemValue){
    return {
        type: 'COMP_REDEEM_VALUE_SET',
        redeemValue
    }
}

export function depositing(){
    return {
        type: 'COMP_DEPOSITING_STARTED',
    }
}

export function depositConfirmation(number){
    return {
        type: 'COMP_DEPOSITING_CONFIRMATION',
        number
    }
}

export function finishedDepositing(){
    return {
        type: 'COMP_DEPOSITING_FINISHED',
    }
}

export function withdrawing(){
    return {
        type: 'COMP_WITHDRAWING_STARTED',
    }
}

export function withdrawConfirmation(number){
    return {
        type: 'COMP_WITHDRAWING_CONFIRMATION',
        number
    }
}

export function finishedWithdrawing(){
    return {
        type: 'COMP_WITHDRAWING_FINISHED',
    }
}