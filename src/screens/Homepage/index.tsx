import React, { useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../components/Form';
import PostComponent from '../../components/PostComponent';
import StoryBar from '../../components/StoryBar';

import Logo from '../../images/logo-instagram.png';
import api from '../../services/api';

import { getPosts } from '../../store/ducks/posts/actions';
import { Posts } from '../../store/ducks/posts/types';
import { getStories } from '../../store/ducks/stories/actions';
import { Stories, Story } from '../../store/ducks/stories/types';
import { getUser } from '../../store/ducks/user/actions';
import { User } from '../../store/ducks/user/types';

import './styles.css';

export const Homepage = () => {
  const dispatch = useDispatch();

  const userData: User = useSelector((state: any) => state.user);
  const storiesData: Stories = useSelector((state: any) => state.stories);
  const postsData: Posts = useSelector((state: any) => state.posts);

  const handleGetUserData = async () => {
    const user = await api.get('/user');
    if (user) {
      dispatch(getUser(user.data));
    }
  };

  const handleGetStoriesData = async () => {
    const stories = await api.get('/stories');
    if (stories) {
      dispatch(getStories(stories.data));
    }
  };

  const handleGetPostsData = async () => {
    const posts = await api.get('/posts');
    if (posts) {
      dispatch(getPosts(posts.data));
    }
  };

  useEffect(() => {
    handleGetUserData();
    handleGetStoriesData();
    handleGetPostsData();
  }, []);

  return (
    <>
      <div className='header'>
        <header>
          <img src={Logo} alt='Logo Instagram' />
          <div className='top-info'>
            <span>
              <FiUser />
              {userData.name}
            </span>
          </div>
        </header>
      </div>
      <div className='home'>
        <div>
          <Form user={userData} />
          <div className='post-container'>
            {postsData &&
              postsData.arrayPosts.map((post) => (
                <PostComponent key={post.id} post={post} />
              ))}
          </div>
        </div>
        <div>
          <div className='user-info'>
            <img alt='Perfil' src={userData.userPicture} />
            <div className='user-bio'>
              <strong>{userData.name}</strong>
              <span>{userData.username}</span>
            </div>
          </div>
          <div className='stories'>
            <h2>Stories</h2>
            {storiesData &&
              storiesData.arrayStories.map((story: Story) => (
                <StoryBar key={story.id} story={story} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
