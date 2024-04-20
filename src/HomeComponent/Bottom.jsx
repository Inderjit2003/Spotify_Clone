import React, { useEffect } from 'react';
import Style from '../CSS/LoginHome.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Col, Container, Row } from 'react-bootstrap';


export default function Bottom({ audioPath ,isPlaying ,onPlayPause  }) 
{
const handlePlayPause = () => {
  onPlayPause(audioPath); // Notify parent component about play/pause action
};

return (
  <div className={`${Style.bottom}`}       style={{ background: 'black' }}>
    <Container>
      <Row>
        <Col>
        <Row>
          <Col ><img src='https://i.scdn.co/image/ab67616d00001e02d6ae8f55846c610a0b112960' style={{width:'8vh',height:'8vh'}} className='rounded ' /></Col>
          <Col > <span>Chal Jindiye</span></Col>
        </Row>
         </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
);
}