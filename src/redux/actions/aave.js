export function addressProviderLoaded(instance) {
    return {
        type: 'AAVE_ADDRESS_PROVIDER_LOADED',
        instance
    }
}

export function lendingPoolAddressLoaded(address) {
    return {
        type: 'AAVE_LENDING_POOL_ADDRESS_LOADED',
        address
    }
}

export function lendingPoolLoaded(instance) {
    return {
        type: 'AAVE_LENDING_POOL_LOADED',
        instance
    }
}

export function reserveDataLoaded(data) {
    return {
        type: 'AAVE_LENDING_RESERVE_DATA_LOADED',
        data
    }
}

export function aPYLoaded(apy) {
    return {
        type: 'AAVE_APY_LOADED',
        apy
    }
}

export function ethATokenAddressLoaded(address) {
    return {
        type: 'AAVE_ETH_ATOKEN_ADDRESS_LOADED',
        address
    }
}

export function ethATokenLoaded(instance) {
    return {
        type: 'AAVE_ETH_ATOKEN_LOADED',
        instance
    }
}

export function userDataLoaded(data) {
    return {
        type: 'AAVE_LENDING_USER_DATA_LOADED',
        data
    }
}

export function totalLiquidityLoaded(liquidity) {
    return {
        type: 'AAVE_TOTAL_LIQUIDITY_LOADED',
        liquidity
    }
}
