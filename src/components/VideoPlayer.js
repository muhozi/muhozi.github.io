import React from 'react';
import PropTypes from 'prop-types';

const Video = props => (
  <div className="youtube-player" data-id="VIDEO_ID">
    <div onClick={() => props.onPlay()} className="play">
      <i
        className="icon ion-ios-play-circle"
        style={{ color: '#fff', fontSize: '100px' }}
      />
    </div>
    {props.init && (
      <iframe
        title="youtube player"
        frameBorder={0}
        allowFullScreen={true}
        src={`https://www.youtube.com/embed/videoseries?list=PLI2gZ_GG7WikKJkYMdlhMV2cHfEclrmVl&rel=0`}
      />
    )}
  </div>
);

Video.propTypes = {
  init: PropTypes.bool,
  onPlay: PropTypes.func
};
export default Video;
