// src/redux/store.js
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import notesReducer from "./noteReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
