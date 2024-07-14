import React from 'react'
import { InfiniteMovingCardsDemo } from '../components/elements/InfiniteCard';
const Usecase = () => {
    return (
        <div style={{ 
          height: '100%', // Ensure full height

          position: 'relative', // Ensure relative positioning
          width: '100%', // Limit width to 80% of its parent
          margin: '0 auto' // Center the div itself
        }}> 
          <InfiniteMovingCardsDemo/>
        </div>

  

      );
}

export default Usecase