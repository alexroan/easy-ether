export const convertWeiToEth = (web3, wei) => {
    wei = wei === '' ? 0 : wei;
    return web3.utils.fromWei(wei.toString(), 'ether');
}

export const convertEthToWei = (web3, eth) => {
    eth = eth === '' ? 0 : eth;
    return web3.utils.toWei(eth.toString(), 'ether');
}