import React from 'react';
import { AnimatedPinDemo } from '../components/elements/ThreeDpin';

const Projects = () => {
  return (
    <div style={{ backgroundSize: 'cover', height: '100vh', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ transform: 'scale(1.75)' }}> {/* Adjust scale value as needed */}
        <AnimatedPinDemo />
      </div>
      <div style={{ transform: 'scale(1.75)' }}> {/* Adjust scale value as needed */}
        <AnimatedPinDemo />
      </div>
      <div style={{ transform: 'scale(1.75)' }}> {/* Adjust scale value as needed */}
        <AnimatedPinDemo />
      </div>
    </div>
  );
}

export default Projects;