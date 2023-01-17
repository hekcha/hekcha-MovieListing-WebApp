import { createStore } from "redux";
import rootReducer from "./reducers";

/**
 * store - Creates a new Redux store with the root reducer and the Redux DevTools extension
 */
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
