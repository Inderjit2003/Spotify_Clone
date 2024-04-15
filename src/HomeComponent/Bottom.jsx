import React, { useState } from 'react';
import Style from '../CSS/LoginHome.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Bottom({ audioPath , isPlaying , handleAudioControl  }) {

  return (
    <>
    <div>
 <AudioPlayer  src={audioPath}
   autoPlay

   className={`${Style.bottom}`} style={{background:'black'}} />
  </div>
  </>
  );
}
