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