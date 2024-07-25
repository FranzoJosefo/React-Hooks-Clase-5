// // ListPostCard.js

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import PostCard from './PostCard';
// import { fetchPosts } from '../Redux/Actions';

// const ListPostCard = () => {
//   const postList = useSelector((state) => state.posts.postList); // Access postList from Redux store
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Fetch posts when the component mounts
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   return (
//     <>
//       <h1>Mis Publicaciones Bellas</h1>
//       <div>
//         {postList.map((post) => (
//           <PostCard key={post.id} title={post.title} body={post.body} id={post.id} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ListPostCard;
// ListPostCard.js

// ListPostCard.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from './PostCard';
import { fetchPosts } from '../Redux/Actions';

const ListPostCard = () => {
  const postList = useSelector((state) => state.posts.postList); // Access postList from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts()
      .then((fetchedPosts) => {
        // Dispatch the action with the fetched data
        dispatch({
          type: 'FETCH_POSTS',
          payload: fetchedPosts,
        });
      })
      .catch((error) => {
        // Handle the error (e.g., show an error message)
        console.error('Error fetching posts:', error);
      });
  }, [dispatch]);

  return (
    <>
      <h1>Mis Publicaciones Bellas</h1>
      <div>
        {postList.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} id={post.id} />
        ))}
      </div>
    </>
  );
};

export default ListPostCard;
