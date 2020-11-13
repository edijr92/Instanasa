import { combineReducers } from "redux";
import { nasaReducer } from "../reducer/test"

export const rootReducer = combineReducers({
    nasa: nasaReducer,
}); 