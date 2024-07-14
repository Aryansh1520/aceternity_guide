import React from 'react'
import { ThreeDCardDemo } from '../components/elements/Threedcard'

const OurTeam = () => {
    return (
        <div style={{backgroundSize: 'cover', height: '100vh', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
        </div>
      )
}

export default OurTeam