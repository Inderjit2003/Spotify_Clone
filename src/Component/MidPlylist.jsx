import React from 'react'
import style from '../CSS/Home.module.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomeFooter from './HomeFooter'

export default function MidPlylist({items}) {
  return (
    < div style={{width:'100%',minWidth:'95%'}} >
    <Container className={`mt-2 ${style.scroll}`}  >
    <div>
        <Row>
            <Col xs={11}>
            <a href="/" className='text-decoration-none text-white'><h4>Spotify Playlist</h4></a>
            </Col>
            <Col xs={1} className={`${style.list}`}>
             <a href="/" className='text-decoration-none text-white'> <p className={`${style.text}`}>Show all</p></a>
            </Col>
        </Row>
      </div>
    <section className='mt-3'>
    <Row>
        
            {items.map((value, index) => (
                <Col className='col-2'>
                <Card className='mb-2' key={index} style={{borderColor: "#121212"}} >
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body className={style.bg} style={{minHeight:'7rem',maxHeight:'20rem'}}>
                         <Card.Text style={{color:'white'}}>
                            <h6>{value.name}</h6>
                            <p className={style.p}>{value.desc}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
    </Row>
    </section>
    <HomeFooter />
</Container>

      </div>
  )
}
