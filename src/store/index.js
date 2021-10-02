import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createReducer from "./rootReducer";

const enhancher = compose(applyMiddleware(thunkMiddleware));
const store = createStore(createReducer(), enhancher);
export default store;
