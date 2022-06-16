export enum PostsTypes {
  GET_POSTS = 'GET_POSTS',
  NEW_POST = 'NEW_POST',
  ADD_LIKE = 'ADD_LIKE',
}

export interface Post {
  id: number;
  user: string;
  userPicture: string;
  postPicture: string;
  location: string;
  description: string;
  likes: number;
}

export interface Posts {
  arrayPosts: Post[];
}
