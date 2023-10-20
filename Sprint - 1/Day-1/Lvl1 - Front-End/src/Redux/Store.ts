import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// Reducers ******************
import reducer from "../Redux/reducer";

// Store *********************
const rootReducer = combineReducers({ reducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
