import { topupFail, topupClose, topupSuccess } from "./interactions";

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