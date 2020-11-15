import { NasaActionTypes } from '../actions/test';

const initialState = {
    rover: {},
};

export const nasaReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case NasaActionTypes.GET_ROVER:
            return {
                ...state,
                rover: action.payload
            }
        default:
            return state
    }
}