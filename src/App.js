import './App.css';
import { FlipWordsDemo } from './components/elements/Flipwords.jsx';
import { EvervaultCardDemo } from './components/elements/Evervault.jsx';
import { GlobeDemo } from './components/elements/Globe.jsx';
import { SparklesPreview } from './components/elements/Sparkles.jsx';
import { FloatingNavDemo } from './components/elements/Floating.jsx';
import { ThreeDCardDemo } from './components/elements/Threedcard.jsx';
function App() {
    return (
      <div className="bg-black relative min-h-screen"> {/* Ensure full height and relative positioning */}
          <div className="absolute inset-0 z-0"> {/* GlobeDemo as background */}
              <GlobeDemo/>
          </div>
          <div className="absolute top-0 left-10 z-80 sparkles-preview-container"> {/* Position SparklesPreview on the top left with responsive size */}
              <SparklesPreview/>
          </div>
          <div className="z-00 relative"> {/* Content on top of the background */}
              <FlipWordsDemo/>
              <div className="flex justify-between p-20" > {/* Adjusted for even spacing */}
                    <ThreeDCardDemo/>
                    <ThreeDCardDemo/>
                    <ThreeDCardDemo/>
              </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0 z-100"> {/* FloatingNavDemo at the bottom with highest z-index */}
              <FloatingNavDemo/>
          </div>
      </div>
    );
  }

export default App;
