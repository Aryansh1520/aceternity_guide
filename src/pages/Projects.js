import React from 'react'
import { AnimatedPinDemo } from '../components/elements/ThreeDpin'
import Use_Case from '../assets/Use_Case.png';

const Projects = () => {
  return (
    <div style={{ backgroundImage: `url(${Use_Case})`, backgroundSize: 'cover', height: '100vh', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <AnimatedPinDemo /> 
        <AnimatedPinDemo /> 
        <AnimatedPinDemo /> 
    </div>
  )
}

export default Projects