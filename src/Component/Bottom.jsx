import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button  } from 'react-bootstrap';
import Style from '../CSS/Home.module.css'

export default function Bottom() {
  return (
    <>
    <div className={`d-flex bottom-0 ${Style.Bottom}`} style={{background:'rgba(234, 0, 0, 0.499)',overflow:'hidden'}}>
    <div>
      <Row>
        <Col >
        <p>Preview to Spotify</p>
        <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </Col>
        <Col>
        <Button href='/Signup' className={`mx-3 border-0 mb-2 fs-6 fw-semibold ${Style.text}`} style={{backgroundColor:'#121212'}} >Sign up</Button>
        </Col>
      </Row>
    </div>
 </div>
    </>
  )
}
