// src/components/OurMission.js
import React from 'react';
import Circle2 from '../assets/Circle2.png';

const OurMission = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${Circle2})` }}>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-4/5 max-w-[600px]">
          <h1 className="font-clash font-semibold text-3xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-purple-400">
            Our Mission
          </h1>
          <p className="text-xl text-white leading-6">
            At Tan Theta, we are committed to driving innovation in the decentralized space.
            Our mission is to provide developers and businesses with the tools and infrastructure needed
            to create cutting-edge decentralized applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
