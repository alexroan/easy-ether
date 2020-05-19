import { InjectedConnector } from '@web3-react/injected-connector';
import { AuthereumConnector } from '@web3-react/authereum-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { TorusConnector } from '@web3-react/torus-connector';

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
export const authereum = new AuthereumConnector({ chainId: 1 });
export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY, chainId: 1 });
export const portis = new PortisConnector({ dAppId: process.env.PORTIS_DAPP_ID, networks: [1] });
export const torus = new TorusConnector({ chainId: 1 });
