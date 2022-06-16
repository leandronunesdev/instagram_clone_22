import { Stories, StoriesTypes } from './types';

const initialStateStories: Stories = {
  arrayStories: [],
};

function reducerStories(state = initialStateStories, action: any) {
  switch (action.type) {
    case StoriesTypes.GET_STORIES:
      return {
        arrayStories: action.payload,
      };
    default:
      return state;
  }
}

export default reducerStories;
