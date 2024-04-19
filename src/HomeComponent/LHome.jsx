import React, { useEffect, useState ,useRef } from 'react';
import SplitPane from 'react-split-pane';
import Sidebar from './Sidebar';
import Plylist from './Plylist';
import { Container } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import Bottom from './Bottom';
import BellIcon from './BellIcon';
import InstallApp from './InstallApp';
import LibComp from './LibComp';
import Profile from './Profile'
import a1 from '../assets/music/Bir Zindagi.mp3';
import a2 from '../assets/music/Apa Fer Milange.mp3';
import a3 from '../assets/music/Bhali Kare Kartar.mp3';
import a4 from '../assets/music/Chal Jindiye.mp3';
import a5 from '../assets/music/My Pride.mp3';
export default function LHome() {
  const songs = [
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e02d6ae8f55846c610a0b112960',
      title: 'Zindagi',
      artist: 'Bir Singh',
      src: a1,
      color:' #1e3b60'
    },
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e0284a4d897fd4310573be70012',
      title: 'Apa fer milanga (Lofi version)',
      artist: 'Savi kahlon',
      src: a2,
      color:'#1e6051'
    },
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e023180f91f2221f258e5865b1e      ',
      title: 'Bhale Kare Kartar',
      artist: 'Bir Singh',
      src: a3,
      color:'#333073'
    },
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e021bbccdf9094270ef73e39b91      ',
      title: 'Chal jindiye',
      artist: 'Amrinder Gill',
      src: a4,
      color:'#73305b'
    },
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e020bf67e6f69d194a32295c686',
      title: 'My Pride',
      artist: 'Tarsem Jasar',
      src: a5,
      color:'#72100e'
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPath, setAudioPath] = useState(null);

  const handlePlayPause = (path) => {
    setIsPlaying(!isPlaying);
    setAudioPath(path);
  };

  const [install, setInstall] = useState('');
  
  const [playlist, setPlaylist] = useState(''); // State to manage playlist data

  const handleInstallClick = () => {
    setInstall('install');
  };

  const handleBellIconClick = () => {
    setInstall('bellIcon');
  };
  const handleprofileClick = () => {
    setInstall('profile');
  };
 
   // Function to handle playlist change
   const handlelibclick = (playlist) => {
    console.log(playlist)
    setPlaylist(playlist);

  };
  const playlistitems = [
    {
      img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
      name: 'Aam jahe munde',
      desc: 'PARDHANE',
      audio: a1,
      singer:'ranjit',
      date:'1 day ago'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
      name: 'Apa fer milanga (Lofi version)',
      desc: 'Savi kahlon',
      audio: a2,
      singer:'kahlon',
      date:'5 days ago'
    },
    
  ];
  
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
              <Sidebar handlelibclick={handlelibclick} />
            </div>
            <div className={`me-1 me-1 ${Style.pane}`}>
            {install === 'install' && <InstallApp handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />}
              {install === 'bellIcon' && <BellIcon handleprofileClick={handleprofileClick} handleInstallClick={handleInstallClick} />}
              {install === 'profile' && <Profile handleInstallClick={handleInstallClick} handleBellIconClick={handleBellIconClick} />}
              {install === '' &&(playlist ? <LibComp cmp={playlist} playlistitems={playlistitems} handleBellIconClick={handleBellIconClick} /> : <Plylist playlistitems={songs} onPlayPause={handlePlayPause} handleprofileClick={handleprofileClick} handleInstallClick={handleInstallClick} handleBellIconClick={handleBellIconClick}  /> )}
     
            {/* <Plylist playlistitems={songs} onPlayPause={handlePlayPause}  /> */}
            </div>
          </SplitPane>
        </Container>
        <Bottom audioPath={audioPath}  isPlaying ={isPlaying}  onPlayPause={handlePlayPause}  />
      </div>
    </>
  );
}
