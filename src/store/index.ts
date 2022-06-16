import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerPosts from './ducks/posts/reducer';
import reducerStories from './ducks/stories/reducer';
import reducerUser from './ducks/user/reducer';

const createRootReducer = () =>
  combineReducers({
    user: reducerUser,
    stories: reducerStories,
    posts: reducerPosts,
  });

const store = createStore(createRootReducer(), composeWithDevTools());

export { store };
