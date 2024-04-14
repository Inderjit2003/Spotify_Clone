import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PlylistNavbar from './PlylistNavbar';
import MidPlylist from './MidPlylist';
import Style from '../CSS/Home.module.css';

export default function Plylist({ playlistitems,onPlay }) {
  const handleCardClick = (index) => {
    if (onPlay) {
      onPlay(playlistitems[index].audio);  // Pass audio path to onPlay function
    }
  };
  return (
    <div className=' py-2 '>
      <Card style={{ backgroundColor: '#121212', border: 'none' }}>
        <PlylistNavbar />
        <div className={`${Style.bg}`}>
          <MidPlylist  items={playlistitems} onPlay = {handleCardClick}
           
           />
        </div>
      </Card>
    </div>
  );
}
