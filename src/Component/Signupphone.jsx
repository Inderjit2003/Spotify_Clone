import React, { useEffect, useState } from 'react';
import LsNavbar from './LsNavbar';
import { BeatLoader } from 'react-spinners';
import Style from '../CSS/Home.module.css';
import { Button } from 'react-bootstrap';

export default function Signupphone() {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <LsNavbar />
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '30px', color: 'white' }}>
        {loading ? (
          <BeatLoader color={'#b7bcbe'} loading={loading} size={20} />
        ) : (
          <div>
            <span className='fs-5 fw-bold my-2'>Enter phone number</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
              <div className={`mt-3 ${Style.inputcontainer}`} style={{ display: 'flex', alignItems: 'center', width: '100px', height: '40px' }}>
                <span className='mx-2'>+91</span>
              </div>
              <div className={`mt-3 ms-3 ${Style.inputcontainer}`} style={{ height: '40px', width: '30rem' }}>
                <input type='text' placeholder="Phone number" className={`form-label ${Style.inputcontainer}`} style={{ border: 'none', backgroundColor: 'black' }} value={phoneNumber} onChange={handleInputChange} required />
              </div>
            </div>
            <div>
              <Button
                className={`mt-4 p-2 px-4 py-3 fw-bold text-dark rounded-pill ${Style.button}`}
                style={{ background: '#1ed760', width: '7rem', border: 'none' }}
                disabled={phoneNumber.trim() === ''}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
