import { useDispatch } from 'react-redux';
import { FiHeart } from 'react-icons/fi';

import api from '../../services/api';
import { addPostLike } from '../../store/ducks/posts/actions';

import * as Types from './types';

export const PostComponent = ({ post }: Types.Props) => {
  const dispatch = useDispatch();

  const handleAddLike = (id: number, likes: number) => {
    const params = {
      likes: likes + 1,
    };
    api
      .patch(`/posts/${id}`, params)
      .then((response) => dispatch(addPostLike(response.data)));
  };

  return (
    <div className='post'>
      <header>
        <img src={post.userPicture} alt={post.user} />
        <div className='post-user'>
          <strong>{post.user}</strong>
          <span>{post.location}</span>
        </div>
      </header>
      <div className='post-image'>
        <img src={post.postPicture} alt={post.description} />
      </div>
      <div
        className='post-likes'
        onClick={() => handleAddLike(post.id, post.likes)}
      >
        <FiHeart />
        {post.likes}
      </div>
      <p>{post.description}</p>
    </div>
  );
};

export default PostComponent;
