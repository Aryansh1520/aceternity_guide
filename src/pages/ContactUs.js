import React from 'react'
import Use_Case from '../assets/Use_Case.png';
import { SignupFormDemo } from '../components/elements/SignForm';

const ContactUs = () => {
  return (
    <div style={{
      backgroundImage: `url(${Use_Case})`,
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the background image
      height: '100vh', // Set the height to full viewport height
      width: '100%', // Set the width to full width
    }}>
      ContactUs
      <SignupFormDemo />
    </div>
  )
}

export default ContactUs