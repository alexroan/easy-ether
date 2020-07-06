
export function setRedeemValue(redeemValue){
    return {
        type: 'REDEEM_VALUE_SET',
        redeemValue
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