import { action } from 'typesafe-actions';
import { Stories, StoriesTypes } from './types';

export const getStories = (payload: Stories) =>
  action(StoriesTypes.GET_STORIES, payload);
