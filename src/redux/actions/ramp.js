export function rampLoaded(ramp){
    return {
        type: 'RAMP_LOADED',
        ramp
    }
}

export function rampOpened(){
    return {
        type: 'RAMP_OPENED'
    }
}

export function rampSuccess(response){
    return {
        type: 'RAMP_SUCCESS',
        response
    }
}

export function rampClosed(response){
    return {
        type: 'RAMP_CLOSED',
        response
    }
}

export function rampFailed(response){
    return {
        type: 'RAMP_FAILED',
        response
    }
}

export function resetRamp(){
    return {
        type: 'RAMP_RESET'
    }
}