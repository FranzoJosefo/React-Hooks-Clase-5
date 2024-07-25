// // Actions.js

// // Action type
// export const FETCH_POSTS = 'FETCH_POSTS';

// // Action creator for fetching posts
// export const fetchPosts = () => (dispatch) => {
//   // Make the API call to fetch posts
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => {
//       // Dispatch the action with the fetched data
//       dispatch({
//         type: FETCH_POSTS,
//         payload: json, // Assuming the API response is an array of posts
//       });
//     })
//     .catch((error) => {
//       console.error('An error occurred while fetching posts:', error);
//     });
// };

// // Actions.js

// Actions.js

export const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('An error occurred while fetching posts:', error);
      throw error; // Rethrow the error for the component to handle
    }
  };
  