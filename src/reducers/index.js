import { combineReducers } from "redux";
import { favReducer } from "./favouriteReducer";

/**
 * rootReducer - Combines all the individual reducers into a single root reducer
 */
const rootReducer = combineReducers({
    favReducer,
});

export default rootReducer;
