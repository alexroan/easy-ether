export const convertWeiToEth = (web3, wei) => {
    return web3.utils.fromWei(wei.toString(), 'ether');
}

export const convertEthToWei = (web3, eth) => {
    console.log(eth);
    return web3.utils.toWei(eth.toString(), 'ether');
}