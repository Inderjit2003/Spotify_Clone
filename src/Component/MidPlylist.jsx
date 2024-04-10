import React, { useState } from 'react';
import style from '../CSS/Home.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import HomeFooter from './HomeFooter';
import Swal from 'sweetalert2';
import AllCards from './AllCards';


export default function MidPlylist({ items }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const handleCardClick = (index) => {
        console.log('Clicked on card:', index);
        Swal.fire({
            background:'#121212',
            color:'white',
            title:'Playlist',
            html:'Log in to play playlists.',
            timer:1500,
            width: 600,
            padding: "3em",
            backdrop: `
            rgba(0,0,123,0.4)`,
            // url("https://www.bing.com/images/search?view=detailV2&ccid=hn0n4KUL&id=77A01EB72807AC58DDD8EF45D402499701D350E6&thid=OIP.hn0n4KULVRro0fSsx5Q_RgHaDg&mediaurl=https%3a%2f%2fclassroomclipart.com%2fimages%2fgallery%2fAnimations%2fMusic%2fmusical-notes-animation.gif&exph=261&expw=550&q=Music+Notes+Animation&simid=608029239386076945&FORM=IRPRST&ck=F675F2E4BE8BEEBDB6278A0755E5F876&selectedIndex=1&itb=0&ajaxhist=0&ajaxserp=0")
            // left top
            // no-repeat`,   
            confirmButtonText:'Login',
            cancelButtonColor:'#121212',
            showCancelButton:true,
            cancelButtonText:'Not now',
          
        }).then((result) =>{
            if(result.isConfirmed){
                window.location.href = '/login'
            }
        })
        // Add your logic here to handle the click event
    };
    const [showCards , setshowCards] = useState(false);
    const toggleCards = () =>{
        setshowCards(!showCards);
    }
    return (
        <Container fluid className={`mt-2 ${style.scroll}`}>
            <Row className="justify-content-between align-items-center">
                <Col xs={12} sm={8}>
                    <a href="/" className="text-decoration-none text-white">
                        <h4>Spotify Playlist</h4>
                    </a>
                </Col>
                <Col xs={12} sm={4} className={`${style.list} text-end`}>
                    <a href="/" className="text-decoration-none text-white" onClick={toggleCards}>
                        <p className={`${style.text}`}>{showCards ? 'Hide Cards' : 'show all'}</p>
                    </a>
                </Col>
            </Row>

            <section className="mt-3">
            {showCards ? (
                    <AllCards items={items} /> 
                    // Render AllCardsComponent if showAllCards is true
                ) : (
                <Row xs={1} md={2} lg={3} xl={6} className="g-0 p-2">
                    {items.slice(0, 6).map((value, index) => (
                        <Col key={index}>
                            <Card
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className={`mb-2 p-2 ${style.cardbody}`}   onClick={() => handleCardClick(index)}
                                style={{ backgroundColor: hoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                            >
                                <Card.Img variant="top" src={value.img} />
                                <Card.Body style={{  color: 'white',height:'7rem' }}>
                                    <Card.Text>
                                        <h6>{value.name}</h6>
                                        <p className={style.p}>{value.desc}</p>
                                    </Card.Text>
                                    {hoveredIndex === index && (
                                        <div className={style.play} >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="black"
                                                className="bi bi-play-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                            </svg>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                )}
            </section>

            <HomeFooter />
        </Container>
    );
}
