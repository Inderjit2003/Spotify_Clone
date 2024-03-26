import React from 'react'
import { Card } from 'react-bootstrap'
import PlylistNavbar from './PlylistNavbar'
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import MidPlylist from './MidPlylist';

const playlistitems=[{
  img:img1,
  name:'Daily Mix 1',
  desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
},
{
  img:img2,
  name:'Daily Mix 2',
  desc:'Sidhu Moose Wala, Karan Aujla, AP Dhillon and more'
},
{
  img:img3,
  name:'Daily Mix 3',
  desc:'Sant Niranjan Singh Ji, Bir Singh , Bhai Rai Singh and more'
},
{
  img:img4,
  name:'Daily Mix 4',
  desc:'Jassi Gill, Akhil, B Praak and more'
},
{
  img:img5,
  name:'Daily Mix 5',
  desc:'Jordan Sandhu, Balraj, Diljit Dosanjh and more'
},
{
  img:img6,
  name:'Daily Mix 6',
  desc:'Jordan Sandhu, Kulbir Jhinjer, Amrinder Gill and more'
}   ]

export default function Plylist() {
  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
      <PlylistNavbar />
    </Card>
    <div>
      <MidPlylist items={playlistitems} />
    </div>
    </div>
  )
}
