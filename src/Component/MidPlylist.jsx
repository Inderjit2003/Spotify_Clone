import React from 'react'
import style from '../CSS/Home.module.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomeFooter from './HomeFooter'

export default function MidPlylist({items}) {
  return (
    < div style={{width:'100%',minWidth:'95%'}} >
    <Container className={`mt-4 ${style.scroll}`}  >
    <Row>
        
            {items.map((value, index) => (
                <Col className='col-2'>
                <Card key={index} style={{borderColor: "#121212"}} >
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body className={style.bg}>
                         <Card.Text style={{color:'white'}}>
                            <h6>{value.name}</h6>
                            <p className={style.p}>{value.desc}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
    </Row>
</Container>
<HomeFooter />
      </div>
  )
}
