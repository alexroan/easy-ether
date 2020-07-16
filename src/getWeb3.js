import Web3 from 'web3';
import Portis from "@portis/web3";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import Fortmatic from "fortmatic";
import Web3Modal from "web3modal";

export const getWeb3 = async () => {
	const providerOptions = {
		authereum: {
			package: Authereum // required
		},
		portis: {
			package: Portis, // required
			options: {
				id: "473d6802-8441-4550-8cf0-691717a699a0" // required
			}
		},
		torus: {
			package: Torus, // required
			options: {
				networkParams: {
				},
				config: {
				}
			}
		},
		fortmatic: {
			package: Fortmatic, // required
			options: {
				key: "pk_live_1FEDAA23B87A151D" // required
			}
		}
	};
	const web3Modal = new Web3Modal({
		network: "mainnet", // optional
		providerOptions: providerOptions // required
	});
	const provider = await web3Modal.connect();
	return new Web3(provider);
}