import { thunk } from "redux-thunk";
import { legacy_createStore, applyMiddleware } from "redux";

// Reducers **********
import { Reducer as UserReducer } from "./Reducer";

export const Store = legacy_createStore(UserReducer, applyMiddleware(thunk));
