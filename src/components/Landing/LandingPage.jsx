import React from 'react';
import landing_bg from "../../assets/landing.png";

const LandingPage = () => {
  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <img 
        src={landing_bg} 
        alt="Landing Background"
        className='w-full h-full'
      />
    </div>
  );
}

export default LandingPage;
