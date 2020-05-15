export const convertWeiToEth = (web3, wei) => {
    return web3.utils.fromWei(wei, 'ether');
}

export const convertEthToWei = (web3, eth) => {
    return web3.utils.toWei(eth, 'ether');
}