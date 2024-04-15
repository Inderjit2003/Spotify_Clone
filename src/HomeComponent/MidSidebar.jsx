import React from 'react'
import { Card,CardTitle ,DropdownButton,ButtonGroup,Dropdown,Row,Col ,Stack, Button} from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Style from '../CSS/Home.module.css'

export default function MidSidebar() {
 
  return (
    <div>
      <Row>
        <Col xs={6}  className={`my-3 mx-4` }>
           <a href="/" className={`text-decoration-none text-white ${Style.icon}`}> 
             <svg  data-encore-id="icon" className={Style.icon} width="26" height="26" fill='white'
                      role="img" aria-hidden="true" viewBox="0 0 24 24"
                      class="Svg-sc-ytk21e-0 bneLcE">
                      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 
                      0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0
                      0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                       <span   className={`ms-3 `} class="Svg-sc-ytk21e-0 ms-3 bneLcE"  style={{fontSize:'17px'}}>Your Library</span>
             </a>
        </Col>
        <Col xs={2}  className={`${Style.list}`} style={{marginTop:'14px'}}>
             {/* <Button variant="none" style={{marginLeft:'5vh'}} size="sm">
             <svg data-encore-id="icon" className={Style.icon} width="16" height="16" fill='white'  role="img" aria-hidden="true" viewBox="0 0 16 16" >
                   <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
 
             </Button> */}
     
        </Col>
       <Col xs={2} className={`mt-2 ${Style.list}`} >
             <Button variant="none" size="sm" >
             <svg xmlns="http://www.w3.org/2000/svg"className={Style.icon} width="34" height="34" fill="white"  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
           </Button>
         </Col>
     </Row>
   <Row className='m-1'> 
       <Col>
       <Button variant="dark" size='sm' className='mx-1' style={{borderRadius:'25px',fontWeight:'500'}}>Playlists</Button>
       <Button variant="dark" size='sm' className='mx-1' style={{borderRadius:'25px',fontWeight:'500'}}>Albums</Button>
       </Col>
   </Row>

  <Row>
      <Col xs={6}> 
      {/* <Button style={{backgroundColor:'#121212',border:'none', borderRadius:'100px' , marginLeft:'8px'}} >
        
      <svg width="16" height="16"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path 
        d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
      </svg>
        </Button> */}
      </Col>
      <Col xs={5}>
      </Col>
  </Row>
    </div>
  )
}