// store.js
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./reducers";

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware()));

export default store;
