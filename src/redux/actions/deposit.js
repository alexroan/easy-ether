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