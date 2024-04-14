import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Style from '../CSS/LoginHome.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ReactAudioPlayer from 'react-audio-player';
import audio from '../assets/audio/Apa Fer Milange.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

export default function Bottom({ audioPath }) {

  return (
    <>
    <div>
 <AudioPlayer
   src={audioPath}
   autoPlay
   className={`${Style.bottom}`} style={{background:'black'}} 
 >
  // </AudioPlayer>



  </div>
  </>
  );
}
