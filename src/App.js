import './App.css';
import { FlipWordsDemo } from './components/elements/Flipwords.jsx';
import { EvervaultCardDemo } from './components/elements/Evervault.jsx';
import { GlobeDemo } from './components/elements/Globe.jsx';

function App() {
  return (
    <div className="bg-black relative min-h-screen"> {/* Ensure full height and relative positioning */}
        <div className="absolute inset-0 z-0"> {/* GlobeDemo as background */}
            <GlobeDemo/>
        </div>
        <div className="z-10 relative"> {/* Content on top of the background */}
            <FlipWordsDemo/>
            <div className="flex justify-between"> {/* Adjusted for even spacing */}
                <EvervaultCardDemo/>
                <EvervaultCardDemo/>
                <EvervaultCardDemo/>
                <EvervaultCardDemo/>
            </div>
        </div>
    </div>
  );
}

export default App;
