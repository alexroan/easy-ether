import Web3 from 'web3';
import ULIFrameProvider from '@unilogin/provider';



export const getWeb3 = () =>
	new Promise( async (resolve, reject) => {

		const provider = ULIFrameProvider.create('mainnet');
		await provider.enable();
		const web3 = new Web3(provider);
		resolve(web3);
		
		// // Modern dapp browsers...
		// if (window.ethereum) {
		// 	const web3 = new Web3(window.ethereum);
		// 	try {
		// 		// Request account access if needed
		// 		await window.ethereum.enable();
		// 		// Acccounts now exposed
		// 		resolve(web3);
		// 	} catch (error) {
		// 		reject(error);
		// 	}
		// }
		// // Legacy dapp browsers...
		// else if (window.web3) {
		// 	// Use Mist/MetaMask's provider.
		// 	const web3 = window.web3;
		// 	resolve(web3);
		// }
		// // Fallback to localhost; use dev console port by default...
		// else {
		// 	reject(new Error("No web3 wallet available"));
		// }
	});