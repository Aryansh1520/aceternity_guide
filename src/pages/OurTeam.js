import React from 'react'
import { ThreeDCardDemo } from '../components/elements/Threedcard'
import Use_Case from '../assets/Use_Case.png';

const OurTeam = () => {
    return (
        <div style={{ backgroundImage: `url(${Use_Case})`, backgroundSize: 'cover', height: '100vh', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
        </div>
      )
}

export default OurTeam