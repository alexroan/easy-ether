export const convertWeiToEth = (web3, wei) => {
    return web3.utils.fromWei(wei, 'ether');
}