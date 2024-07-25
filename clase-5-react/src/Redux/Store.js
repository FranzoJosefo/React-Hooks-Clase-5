// import { reducer } from "./Reducer";
// import {createStore} from "redux";

// const store = createStore(reducer);

// Store.js

import { createStore, combineReducers } from 'redux';
import postReducer from './Reducer';

const rootReducer = combineReducers({
  posts: postReducer, // You can add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;
