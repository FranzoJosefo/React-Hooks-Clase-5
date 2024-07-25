// Store.js

import { createStore, combineReducers } from 'redux';
import postReducer from './Reducer'; // Adjust the path as needed

const rootReducer = combineReducers({
  posts: postReducer, // You can add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;
