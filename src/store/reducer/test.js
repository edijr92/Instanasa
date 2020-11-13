import { NasaActionTypes } from '../actions/test';

const initialState = {
    test: [],
};

export const nasaReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case NasaActionTypes.NASA:
            return {
                ...state,
                test: action.payload
            }
        default:
            return state
    }
}