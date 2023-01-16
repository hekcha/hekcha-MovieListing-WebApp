import { combineReducers } from "redux";
import {favReducer} from "./favouriteReducer";
const rootReducer =  combineReducers({
    favReducer,
});

export default rootReducer;
