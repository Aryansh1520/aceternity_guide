// src/components/Investors.js
import React from 'react';
import investor1 from '../assets/investor1.svg';
import { SparklesPreview } from '../components/elements/Sparkles';

const Investors = () => {
  const investors = [
    { img: investor1, name: 'Investor 1', designation: 'CEO' },
    { img: investor1, name: 'Investor 2', designation: 'CTO' },
    { img: investor1, name: 'Investor 3', designation: 'CFO' },
    { img: investor1, name: 'Investor 4', designation: 'COO' },
    { img: investor1, name: 'Investor 5', designation: 'CMO' },
    { img: investor1, name: 'Investor 6', designation: 'CIO' },
    { img: investor1, name: 'Investor 7', designation: 'Director' },
    { img: investor1, name: 'Investor 8', designation: 'Manager' },
    { img: investor1, name: 'Investor 9', designation: 'Analyst' },
    { img: investor1, name: 'Investor 10', designation: 'Consultant' },
  ];

  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center text-center px-36 py-24">
      <div className="mb-10">
      <SparklesPreview name="Backed by the Best" textSize="text-3xl lg:text-5xl" />

        <p className="py-5 text-xl text-white">
          Empowered by the financial expertise and strategic insights of our backers.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-x-20 gap-y-10 p-12">
        {investors.map((investor, index) => (
          <div key={index} className="text-center">
            <div className="relative overflow-hidden w-24 h-24 mx-auto transition-transform duration-300 transform hover:scale-110">
              <img src={investor.img} alt={investor.name} className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-1 text-white">{investor.name}</h3>
            <p className="text-sm text-white">{investor.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investors;
