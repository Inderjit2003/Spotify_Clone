import React, { useState } from 'react';
import PlylistNavbar from './PlylistNavbar';
import MidPlylist from './MidPlylist';
import HomeARPM from './HomeARPM';
import InstallApp from './InstallApp';
import style from '../CSS/Home.module.css';
import Style from '../CSS/LoginHome.module.css';
import { Card, Col, Container, Row ,CardBody, Navbar ,Button,Nav} from 'react-bootstrap';
import HomeFooter from './HomeFooter';
import Plc from '../SharedComponent/Plc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/logo.svg'
import { Howl, Howler } from 'howler';
import SongPlay from './SongPlay';
import AlbumPlay from './AlbumPlay';

export default function Playlist({ playlistitems, radio , album , artist, handleBellIconClick, handleInstallClick, handleprofileClick }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [artistHoveredIndex, setArtistHoveredIndex] = useState(null);
    const [albumHoveredIndex, setAlbumHoveredIndex] = useState(null);
    const [radioHoveredIndex, setRadioHoveredIndex] = useState(null);
    const [playlistHoveredIndex, setPlaylistHoveredIndex] = useState(null);
  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleMenuItemClick = () => {
    setShowDropdown(false);
    // Handle menu item click actions here
  };
  const handleMouseEnter = (index, type) => {
    if (type === 'artist') {
        setArtistHoveredIndex(index);
    } else if (type === 'album') {
        setAlbumHoveredIndex(index);
    } else if (type === 'radio') {
        setRadioHoveredIndex(index);
    } else if (type === 'playlist') {
        setPlaylistHoveredIndex(index);
    }
};
const handleMouseLeave = (type) => {
    if (type === 'artist') {
        setArtistHoveredIndex(null);
    } else if (type === 'album') {
        setAlbumHoveredIndex(null);
    } else if (type === 'radio') {
        setRadioHoveredIndex(null);
    } else if (type === 'playlist') {
        setPlaylistHoveredIndex(null);
    }
};
  const handleShowAllClick = () => {
    setSelectedCardIndex(null); // Deselect the selected card
};
const [audioPath , setAudioPath] = useState();
const [selectedCardIndex, setSelectedCardIndex] = useState(null);
const [isPlaying, setIsPlaying] = useState(false);
const [audio, setAudio] = useState(null);

const handleCardClick = (index) => {
    if (selectedCardIndex === index) {
        // If the same card is clicked again, deselect it

        setSelectedCardIndex(null);
    } else {
        setSelectedCardIndex(index);
        setIsPlaying(!isPlaying);
        setAudioPath(selectedItem.src);
        onPlay(selectedItem.src);
    }
};


  const onPlayPause = (index) => {
    if (selectedCardIndex === index && isPlaying) {
        audio.pause();
        setIsPlaying(false);
    } else {
        const selectedItem = playlistitems[index];
        setSelectedCardIndex(index);
        if (audio) {
            audio.stop();
        }
        const newAudio = new Howl({
            src: [selectedItem.src],
            onend: () => {
                setIsPlaying(false);
                setSelectedCardIndex(null);
            },
        });
        setAudio(newAudio);
        newAudio.play();
        setIsPlaying(true);
    }
};


 return (
    <div>
           <div className=' py-2 '>
      <Card style={{ backgroundColor: '#121212', border: 'none' }}>
        <div className='mx-1 '>    
        <Navbar  sticky='top' expand="lg" >
      <Container className='mt-1'>
       <Button variant='dark' className='mx-1' style={{borderRadius:'50%'}} size='sm' disabled> 
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
           </svg>
       </Button>
       <Button variant='dark'  className='mx-1' style={{borderRadius:'50%'}} size='sm'  disabled> 
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                     </svg>
       </Button>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
         </Nav>
         <Nav>
           <div className='m-1'>
        <Button variant="light" className={`mx-1 btn-sm px-3 ${style.button}`} style={{borderRadius:'25px'}}  >
          <a  className={style.navA} style={{color:'black'}} >
          Explore Premium
          </a>
        
        </Button>
        <Button onClick={handleInstallClick} className={`mx-1 btn-sm px-3 ${style.button}`}  style={{borderRadius:'25px', backgroundColor:'black', borderColor:'black'}}>
          <a  className={style.navA} style={{color:'white'}}>
            <span>
                <svg data-encore-id="icon" role="img"
                style={{paddingBottom:'1px'}}
                width="16"
                height="16" 
                fill='white'
                 aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path></svg></span>

            <span className='ms-1'>
              
                   Install App
            </span>
            </a>
        </Button>
        <Button
        onClick={handleBellIconClick}
        variant="dark" style={{borderRadius:"100px", backgroundColor:'black', borderColor:'black'}} className='mx-2 btn-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
         </svg>
        </Button>
 {/* Button to toggle dropdown */}
           
            <Button
            variant="dark"
            style={{ borderRadius: '100px', paddingBottom: '6px', backgroundColor: 'black', borderColor: 'black' }}
            className="mx-1 btn-sm p-1"
            onClick={handleButtonClick}
          >
            <img src={img1} height={'24px'} width={'24px'} style={{ borderRadius: '100px' }} alt="Profile" />
          </Button>
          {/* Dropdown menu */}
          {showDropdown && (
            <div className="dropdown-menu show" style={{ position: 'absolute', right: '0', zIndex: '1', backgroundColor:'' }}>
              <Button  className={`dropdown-item ${style.dropdownItem}`} onClick={handleprofileClick}>
              
              
                Profile
              </Button>
              <Button  className={`dropdown-item ${style.dropdownItem}`} onClick={handleMenuItemClick}>
                Settings
              </Button>
              <div className="dropdown-divider"></div>
              <Button className={`dropdown-item ${style.dropdownItem}`} onClick={handleMenuItemClick}>
                <a href='/'>
                Logout
                </a>
               
              </Button>
            </div>
          )}
          </div>
         </Nav>
       </Navbar.Collapse>
      
      </Container>
     
        </Navbar>
        <Row className='mx-2 mb-1'>
          <Col>
          <Button variant="light"  className='mx-1 btn-sm' style={{borderRadius:'25px'}}>All</Button>
          <Button variant="dark" className='mx-1 btn-sm' style={{borderRadius:'25px'}}>Music</Button>
          <Button variant="dark" className='mx-1 btn-sm' style={{borderRadius:'25px'}}>Podcasts</Button>
          </Col>
        </Row>
        </div>
        <div className={`mt-2 ${Style.bg}`}>
        <div>
    <Container fluid className={` ${Style.scrollStart}`}>
    <div>
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Artist */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                <section className="mt-2">      
             
                <div>
                <Row
                    className="justify-content-between align-items-center p-2"
                    style={{
                        backgroundImage: 'linear-gradient(to top , #121212 , rgba(37, 33, 33, 0.693)  )',
                    }}
                >
                    <Col xs={12} sm={8}>
                        <a href="/" className="text-decoration-none text-white">
                            <h5 style={{ fontWeight: '700', fontSize: '22px' }} className={style.Heading} >
                            Popular artists                          
                            </h5>
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className={`${style.list} text-end`}>
                        <a href="/" className="text-decoration-none text-white">
                        <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'artist')}>
                                        Show all
                                    </p>
                        </a>
                    </Col>
                </Row>

                <Row xs={1} md={2} lg={3} xl={6} className="g-0">
                    {artist.slice(0,6).map((value, index) => (
                        <Col key={index}>
                                <Card
                                 onMouseEnter={() => handleMouseEnter(index, 'artist')}
                                 onMouseLeave={() => handleMouseLeave('artist')}
                                 className={`mb-2 p-2 border-0`}
                                 onClick={() => handleCardClick(index)}
                                 style={{
                                     height: '14rem',
                                     backgroundColor: artistHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212',
                                     cursor: 'pointer',
                                     display: 'block',
                                 }}
                                >
                                    <Card.Img
                                        style={{ borderRadius: '50vh', height: '21vh', width: '21vh' }}
                                        variant="top"
                                        src={value.img}
                                    />
                                    <div className="mt-2" style={{ color: 'white', fontWeight: '500' }}>
                                        <h6 style={{ fontSize: '15px', fontWeight: '550' }} className={style.headingname}>
                                            {value.name}
                                        </h6>
                                        <p className={style.p}>{value.desc}</p>
                                    </div>

                                    {artistHoveredIndex === index && (
                                        <div className={style.play}>
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
                                </Card>
                        </Col>
                    ))}
                </Row>
                </div>
                    </section>
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Album */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}

     <section className='foralbum'>
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular album
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'album')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {album.slice(0,6).map((value, index) => (
                    <Col key={index}>       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'album')}
                            onMouseLeave={() => handleMouseLeave('album')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                            style={{height:'16rem', backgroundColor: albumHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img} />
                            <div className='mt-2' style={{  color: 'white' }}>
                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                    <p className={style.p}>{value.desc}</p>
                                    </div>
                            
                            
                                {albumHoveredIndex === index && (
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
                            
                        </Card>
                    </Col>
                ))}
            </Row>
       
        </div>   
    </section> 
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Radio */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}
     <section className='forradio'>
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular radio
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'radio')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {radio.slice(0,6).map((value, index) => (
                    <Col key={index}>       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'radio')}
                            onMouseLeave={() => handleMouseLeave('radio')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                            style={{height:'16rem', backgroundColor: radioHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img} />
                            <div className='mt-2' style={{  color: 'white' }}>
                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                    <p className={style.p}>{value.desc}</p>
                                    </div>
                            
                            
                                {radioHoveredIndex === index && (
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
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </section> 
      {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Playlist */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}

        <section className='forplaylist'>
        {!selectedCardIndex ? (
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular Playlist
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'playlist')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {playlistitems.slice(0,6).map((value, index) => (
                    <Col key={index}>       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'playlist')}
                            onMouseLeave={() => handleMouseLeave('playlist')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                            style={{height:'16rem', backgroundColor: playlistHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img_src} />
                            <div className='mt-2' style={{  color: 'white' }}>

                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.title}</h6>
                                    <p className={style.p}>{value.artist}</p>
                                    </div>
                            
                            
                                {playlistHoveredIndex === index && (
                                    <div className={style.play}  onClick={() => {onPlayPause(index)}}>
                                    {selectedCardIndex === index && isPlaying ? (
       <FontAwesomeIcon icon={faPause} />
   ) : (
       <FontAwesomeIcon icon={faPlay} />
   )}
                                    </div>
                                )}
                            
                        </Card>
                    </Col>
                ))}
            </Row>
       
        </div> 
         ) : (
       <SongPlay items={playlistitems} index={selectedCardIndex} />
         )}
    </section> 
                </div>
                <HomeFooter />
            </Container>
        </div>
        </div>
      </Card>
    </div>
    </div>
  )
}
