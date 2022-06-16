export enum StoriesTypes {
  GET_STORIES = 'GET_STORIES',
}

export interface Story {
  id: number;
  time: string;
  user: string;
  userPicture: string;
}

export interface Stories {
  arrayStories: Story[];
}
