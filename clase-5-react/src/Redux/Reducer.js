// const initialState = {
//     products: []
//     //Aca podria tener varios states
//     // products: [],
//     // users: {} whuteva....
//     //Las guardo aca


// }

// export const reducer = (state = initialState, action) => { 
//         switch (action.type) {
//             case "ADD_MONEY":
//                 //logica que se ejectura cuando llames la Action. 
//                 return state
//             default: //Esto siempre
//                 return state //Siempre igual
//         }
// }

// Reducer.js

const initialState = {
    postList: [], // Initialize with an empty array
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        // Assuming you've fetched the posts and have them in an array
        return { ...state, postList: action.payload }; // Update the postList
      default:
        return state;
    }
  };
  
  export default postReducer;
  