import React, { useEffect } from 'react';
import Style from '../CSS/LoginHome.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Bottom({ audioPath ,isPlaying ,onPlayPause  }) 
{
const handlePlayPause = () => {
  onPlayPause(audioPath); // Notify parent component about play/pause action
};

return (
  <div className={`${Style.bottom}`}>
    <AudioPlayer
      src={audioPath}
      autoPlay={isPlaying}
      onPlay={handlePlayPause}
      onPause={handlePlayPause}
      style={{ background: 'black' }}
    />
  </div>
);
}