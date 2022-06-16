import { action } from 'typesafe-actions';
import { User, UserTypes } from './types';

export const getUser = (payload: User) => action(UserTypes.GET_USER, payload);
