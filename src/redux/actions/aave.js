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