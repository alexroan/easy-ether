import { loadAccount } from "./interactions/account";
import {topupFail, topupClose, topupSuccess} from "./interactions/ramp";

export const subscribeToRampEvents = (dispatch, ramp) => {
    ramp.on('WIDGET_CLOSE_REQUEST_CONFIRMED', (event) => {
        topupClose(dispatch, event);
    });

    ramp.on('PURCHASE_CREATED', (event) => {
        console.log("purchase created", event);
        // event.payload.purchase
    });

    ramp.on('PURCHASE_SUCCESSFUL', (event) => {
        topupSuccess(dispatch, event);
    });

    ramp.on('PURCHASE_FAILED', (event) => {
        topupFail(dispatch, event);
    });
}

export const subscribeToAccountsChanging = async (dispatch, web3) => {
    web3.currentProvider.on('accountsChanged', function (accounts) {
        loadAccount(dispatch, web3);
    });
}