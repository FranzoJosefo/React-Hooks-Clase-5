// import postReducer from './Reducer'; // Aca esta conectado el Reducer con el Store. 
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducer";
import {thunk} from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;