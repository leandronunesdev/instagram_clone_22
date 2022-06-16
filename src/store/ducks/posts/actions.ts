import { action } from 'typesafe-actions';
import { Post, Posts, PostsTypes } from './types';

export const getPosts = (payload: Posts) =>
  action(PostsTypes.GET_POSTS, payload);

export const newPost = (payload: Post) => action(PostsTypes.NEW_POST, payload);

export const addPostLike = (payload: Post) =>
  action(PostsTypes.ADD_LIKE, payload);
