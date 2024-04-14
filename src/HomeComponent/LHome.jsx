import React, { useEffect, useState } from 'react';
import SplitPane from 'react-split-pane';
import Sidebar from './Sidebar';
import Plylist from './Plylist';
import { Container } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import Bottom from './Bottom';
import a1 from '../assets/audio/Aam Jahe.mp3';
import a2 from '../assets/audio/Apa Fer Milange.mp3';


export default function LHome() {
  const playlistitems = [
    {
      img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
      name: 'Aam jahe munde',
      desc: 'PARDHANE',
      audio: a1,
      color: '#851e1e',
     
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
      name: 'Apa fer milanga (Lofi version)',
      desc: 'Savi kahlon',
      audio: a2,
      color:'#1e6888',
      
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
      name: 'Aam jahe munde',
      desc: 'PARDHANE',
      audio: a1,
      color: '#851e1e'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
      name: 'Apa fer milanga (Lofi version)',
      desc: 'Savi kahlon',
      audio: a2,
      color:'#1e6888'
    },
  ];

  const [audioPath, setAudioPath] = useState(null);

  const handlePlay = (path) => {
    setAudioPath(path);
  };
  return (
    <>
      <div className='container'>
        <Container className={`${Style.container}`}>
          <SplitPane
            split='vertical'
            minSize={305}
            maxSize={-1100}
            defaultSize={400}
            style={{ backgroundColor: 'black' }}
          >
            <div className={` me-1 ${Style.pane}`}>
              <Sidebar />
            </div>
            <div className={`me-1 ${Style.pane}`}>
              <Plylist playlistitems={playlistitems} onPlay = {handlePlay}
              />
            </div>
          </SplitPane>
        </Container>
        <Bottom audioPath={audioPath}  />
      </div>
    </>
  );
}
