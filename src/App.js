import './App.css';
import React from 'react';
// import Usecase from './pages/Usecase.js'; // Corrected import statement
// import Projects from './pages/Projects.js';
// import OurTeam from './pages/OurTeam.js';
// import ContactUs from './pages/ContactUs.js';
import { TracingBeamDemo } from './components/elements/TracingBeam.jsx';
import Tan1 from "./assets/tan1.png";

function App() {
    return (
        <>
            <div style={{ 
            backgroundImage: `url(${Tan1})`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat' 
            }}>           
            {/* <Usecase />
            <Projects />
            <OurTeam /> 
            <ContactUs /> */}
            <TracingBeamDemo />
        </div>
        </>
    );
}

export default App;
