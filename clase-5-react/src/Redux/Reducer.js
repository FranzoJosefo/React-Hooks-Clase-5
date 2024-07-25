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
  