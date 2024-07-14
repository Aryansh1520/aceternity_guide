import React from 'react';
import Circle from '../assets/Circle.png';
import { FlipWordsDemo } from '../components/elements/Flipwords';
import { TextGenerateEffectDemo } from '../components/elements/Textgenerate';
import { BorderButton } from '../components/elements/GlowButton';

const Hero = () => {
  return (
    <div style={{ 
      position: 'relative', // Ensure the parent div is positioned relatively
      backgroundImage: `url(${Circle})`, 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh', // Adjust the height as needed
      width: '100%', // Adjust the width as needed
      padding: '20px', // Add padding around the content
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative', top: '-10%' }}>
        <FlipWordsDemo />
      </div>
      <div style={{
        position: 'absolute', // Position the text absolutely to place it over the circle
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Adjust for the element's dimensions
        textAlign: 'center', // Center the text within the div
        width: '30%', 
        padding: '25px', // Add padding around the content
        bottom: '12%', // Position the text at the bottom of the circle
        top: '60%', 
      }}>
        <div style={{ marginBottom: '40px' }}> {/* Add margin to the bottom of the TextGenerateEffectDemo */}
          <TextGenerateEffectDemo />
        </div>

        <BorderButton style={{ marginBottom: '40px' }} /> {/* Add margin to the bottom of the first BorderButton if needed */}
        <BorderButton />
      </div>
    </div>
  );
}

export default Hero;