import React,{ useState } from 'react'
import LsNavbar from './LsNavbar'
import { Button, Card } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import TextInput from './TextInput'
import SignupEmailpass from './SignupEmailpass'
export default function Signup() {

  const [showPhoneSignup, setShowPhoneSignup] = useState(false);

  const handleButtonClick = () => {
    setShowPhoneSignup(true);
  };

  return (
    <div  style={{backgroundColor:'black',height:'100vh'}}>
       <LsNavbar />
       {showPhoneSignup ? (
        <SignupEmailpass />
      ) : (
       <div style={{backgroundColor:'black',alignItems:'center',justifyContent:'center',display:'flex',color:'white',marginTop:'50px'}}>
       <div  >
        <h2 className="fw-bold mb-5" style={{width:'250px'}}>Sign up to start listening</h2>
        <div className='mb-2' >
        <TextInput   label={"Email address"} placeholder ={"name@domain.com"}/>
        </div>
        <div>
        <a href='/phone'  style={{color:'#1ed760'}}>Use phone number instead.</a>
        </div>
        <Button className={`rounded-pill my-4 fw-semibold ${Style.button}`}  style={{backgroundColor:'#1ed760',borderColor:'#1ed760',width:'25rem',color:'black'}} onClick={handleButtonClick} >
                    Next
                  </Button>
                  <br/>
                  <div  style={{color:'rgb(104, 105, 104)',marginLeft:'115px'}}>
                   <span >Already have an account? </span>
                   </div>
                   <div style={{color:'white',marginLeft:'165px'}}>
                  <a href="/login" style={{color:'white'}}>Log in here.</a></div>
                  <br />
       </div>
       </div>
         )}
</div>
   
  
  )
}
