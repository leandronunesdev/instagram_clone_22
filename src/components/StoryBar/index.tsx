import * as Types from './types';

export const StoryBar = ({ story }: Types.Props) => {
  return (
    <div className='storie'>
      <div className='storie-image'>
        <img src={story.userPicture} alt={story.user} />
      </div>
      <div className='storie-user'>
        <strong>{story.user}</strong>
        <span>{story.time}</span>
      </div>
    </div>
  );
};

export default StoryBar;
