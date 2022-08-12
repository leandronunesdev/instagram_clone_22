import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { newPost } from '../../store/ducks/posts/actions';
import { Posts } from '../../store/ducks/posts/types';

import './styles.css';
import * as Types from './types';

const Form = ({ user }: Types.Props) => {
  let formInput = useRef<HTMLFormElement>(null);
  let inputImage = useRef<HTMLInputElement>(null);
  let inputDescription = useRef<HTMLInputElement>(null);
  let inputLocation = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<Boolean>(false);

  const dispatch = useDispatch();

  const postsData: Posts = useSelector((state: any) => state.posts);

  const handlePostingPost = (e: any) => {
    e.preventDefault();
    if (
      inputImage.current?.value !== '' &&
      inputDescription.current?.value !== '' &&
      inputLocation.current?.value !== ''
    ) {
      const params = {
        id: postsData.arrayPosts[postsData.arrayPosts.length - 1].id + 1,
        user: user.name,
        userPicture: user.userPicture,
        postPicture: inputImage.current?.value,
        description: inputDescription.current?.value,
        location: inputLocation.current?.value,
        likes: 0,
      };

      if (params) {
        api
          .post('/posts', params)
          .then((response) => dispatch(newPost(response.data)));
      }
      formInput.current?.reset();
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form className='form' ref={formInput}>
      <p>Create a post here</p>
      <input type='text' placeholder='Put the image URL' ref={inputImage} />
      <input
        type='text'
        placeholder='Write a description'
        ref={inputDescription}
      />
      <input type='text' placeholder='Location' ref={inputLocation} />
      {error && <div>Please, fill all the fields!</div>}
      <button onClick={handlePostingPost}>Post!</button>
    </form>
  );
};

export default Form;
