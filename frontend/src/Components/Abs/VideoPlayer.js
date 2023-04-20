import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/tLOPm7vu4Qg"}
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};


export default VideoPlayer;