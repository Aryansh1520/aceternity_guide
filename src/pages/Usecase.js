// src/components/UseCase.js
import React from 'react';
import { SparklesPreview } from '../components/elements/Sparkles';
var imagePath = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
const useCases = [
  {
    title: "Create Prediction Market",
    description: "Build and deploy decentralized prediction markets effortlessly with Tan Theta. Utilize our order matching system to facilitate trading, integrate real-time data feeds, and ensure security and transparency. Tan Theta's robust architecture simplifies the complexities of decentralized prediction markets, allowing you to focus on innovation.",
    img: imagePath
  },
  {
    title: "Develop Oracles",
    description: "Implement reliable oracles to bring off-chain data into your decentralized applications. Tan Theta provides tools and frameworks to build secure and efficient oracles that can be easily integrated with your blockchain solutions.",
    img: imagePath
  },
  {
    title: "Build Decentralized Exchanges",
    description: "Create highly scalable and secure decentralized exchanges with Tan Theta. Our protocol supports various exchange models, including spot exchanges and derivatives trading, ensuring a comprehensive solution for your trading needs.",
    img: imagePath
  },
  {
    title: "Develop Oracles",
    description: "Implement reliable oracles to bring off-chain data into your decentralized applications. Tan Theta provides tools and frameworks to build secure and efficient oracles that can be easily integrated with your blockchain solutions.",
    img: imagePath
  },
  {
    title: "Build Decentralized Exchanges",
    description: "Create highly scalable and secure decentralized exchanges with Tan Theta. Our protocol supports various exchange models, including spot exchanges and derivatives trading, ensuring a comprehensive solution for your trading needs.",
    img: imagePath
  }
];

const UseCase = () => {
  return (
    <div className="use-case bg-cover bg-center h-screen flex flex-col items-center justify-center p-15 box-border text-white">
      <SparklesPreview name="Use Cases" textSize="text-3xl lg:text-5xl" />
      <p className="sub-heading text-xl text-white mb-10 text-center">Discover practical applications and real-world scenarios where our solutions make a difference.</p>
      <div className="carousel-container p-5 w-full max-w-[90%] overflow-hidden">
        <div className="carousel flex animate-scroll">
          {useCases.map((useCase, index) => (
            <div key={index} className="card bg-white bg-opacity-10 rounded-lg flex-shrink-0 w-[33.33%] max-w-[33.33%] mx-3 text-center p-5 box-border text-white transition-transform duration-300 ease-in-out hover:scale-105">
<img src={useCase.img} alt={useCase.title} className="w-full h-[200px] object-cover border-b border-white border-opacity-20 transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg" />              <div className="card-content py-2.5">
                <h3 className="font-clash font-semibold text-xl my-5">{useCase.title}</h3>
                <p className="text-sm mb-2.5">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCase;
