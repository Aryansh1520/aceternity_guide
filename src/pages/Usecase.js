import React from 'react'
import { FlipWordsDemo } from '../components/elements/Flipwords.jsx';
import { EvervaultCardDemo } from '../components/elements/Evervault.jsx';
import { GlobeDemo } from '../components/elements/Globe.jsx';
import { SparklesPreview } from '../components/elements/Sparkles.jsx';
import { FloatingNavDemo } from '../components/elements/Floating.jsx';
import { ThreeDCardDemo } from '../components/elements/Threedcard.jsx';
import { BentoGridDemo } from '../components/elements/Bento-grid.jsx';
import Use_Case from '../assets/Use_Case.png';
const Usecase = () => {
    return (
        <div className="bg-black relative min-h-screen"> {/* Ensure full height and relative positioning */}
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${Use_Case})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> {/* Use_Case.png as background */}
                {/* Removed <GlobeDemo/> */}
            </div>
  
            <div className="z-00 relative"> {/* Content on top of the background */}
                <div className="flex justify-between p-20" > {/* Adjusted for even spacing */}
                      <BentoGridDemo/>
                </div>
            </div>
  
        </div>
      );
}

export default Usecase