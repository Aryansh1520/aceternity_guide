// src/components/About.js
import React from 'react';
import AboutusPhotoroom from '../assets/AboutusPhotoroom.png';

const About = () => {
  return (
    <div 
      className="h-screen flex items-start justify-start p-16 box-border" 
      style={{ 
        backgroundImage: `url(${AboutusPhotoroom})`,
        backgroundSize: '50%', // Reduce the background image size to 50%
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat' // Prevent the image from repeating
      }}
    >
      <div className="text-left">
        <h1 className="font-clash text-5xl font-semibold mb-5">
          <span className="text-white">Step into</span> <br />
          <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
            Tan Theta
          </span>
        </h1>
        <p className="text-white text-base leading-relaxed mb-5 max-w-lg">
          Tan Theta is a cutting-edge protocol designed for the Fuel Blockchain, offering unparalleled capabilities for developing decentralized applications on Fuel. 
          Our protocol empowers developers and businesses to create innovative and highly scalable products seamlessly with ease and efficiency.
        </p>
        <button className="bg-gradient-to-r from-teal-400 to-purple-500 border-none font-clash font-semibold rounded-lg text-white transition-colors duration-300 mt-4">
          Know More
        </button>
      </div>
    </div>
  );
}

export default About;
