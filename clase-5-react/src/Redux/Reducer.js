import { combineReducers } from "redux";
import { FETCH_POSTS } from "./ActionTypes";

const initialState = {
    postList: [],
};

/**En el reducer, es el lugar donde ejecuto la logica luego de una accion
 * Por ejemplo si hice un FETCH_POSTS, y quiero filtrar algunos posts, y hacerles un display en algun lado, todo eso lo hago aca
 * Si alguna vez laburaron con ViewModel toda la business logic esta aca
 * 
 * 
 */

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log("case FETCH_POSTS", action.payload)
            //Reducer Se entera gracis a que esta conectado con el Store, que alguien ejecuto esta Action, y le llega el payload de ella - aca se hace la logica 
            return { ...state, postList: action.payload };
        default:
            return state;
    }
};

// const rootReducer = combineReducers({  // Esto es para usar muchos reducers, entonces tenes ponele, uno por feature. 
//     posts: postReducer,
// });

// export default rootReducer;
