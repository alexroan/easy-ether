import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import { subscribeToRampEvents } from "../subscriptions";
import { rampOpened, rampSuccess, rampClosed, rampFailed, resetRamp } from '../actions/ramp';


export const topupWallet = async (dispatch, account) => {
    const ramp = new RampInstantSDK({
        hostAppName: 'Easy Ether',
        hostLogoUrl: 'https://alexroan.github.io/easy-ether/static/media/logo-white.86143c9b.png',
        variant: 'auto',
        userAddress: account
    })
    .show();
    dispatch(rampOpened());
    subscribeToRampEvents(dispatch, ramp);
}

export const topupSuccess = async (dispatch, response) => {
    console.log("Topup success", response);
    dispatch(rampSuccess(response));
}

export const topupClose = async (dispatch, response) => {
    console.log("Topup closed", response);
    dispatch(rampClosed(response));
}

export const topupFail = async (dispatch, response) => {
    console.log("Topup fail", response);
    dispatch(rampFailed(response));
}

export const resetTopup = async (dispatch) => {
    dispatch(resetRamp());
}