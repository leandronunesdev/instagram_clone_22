import { Post, Posts, PostsTypes } from './types';

const initialStatePosts: Posts = {
  arrayPosts: [],
};

function reducerPosts(state = initialStatePosts, action: any) {
  const posts: any = state.arrayPosts;

  switch (action.type) {
    case PostsTypes.GET_POSTS:
      return {
        arrayPosts: action.payload,
      };
    case PostsTypes.NEW_POST:
      posts.push(action.payload);
      return {
        arrayPosts: posts,
      };
    case PostsTypes.ADD_LIKE:
      posts.map((post: Post) => {
        if (post.id === action.payload.id) {
          post.likes = action.payload.likes;
        }
      });
      return {
        arrayPosts: posts,
      };
    default:
      return state;
  }
}

export default reducerPosts;
