import { User, UserTypes } from './types';

const initialStateUser: User = {
  name: '',
  userPicture: '',
  username: '',
};

function reducerUser(state = initialStateUser, action: any) {
  switch (action.type) {
    case UserTypes.GET_USER:
      return {
        name: action.payload.name,
        userPicture: action.payload.userPicture,
        username: action.payload.username,
      };
    default:
      return state;
  }
}

export default reducerUser;
