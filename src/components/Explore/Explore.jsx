import React, { useState } from 'react';
import plant_1 from "../../assets/tulsi-plant.png";
import plant_bg from "../../assets/tulsi-big-bg.png";

const Explore = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-[#012b00] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${plant_bg})`, filter: 'blur(5px)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className={`relative z-10 p-5 rounded-xl ${expanded ? 'w-3/4 h-[28rem]' : 'w-3/4 h-96'} transition-all duration-300 ease-in-out`}>
        <button
          onClick={handleExpand} 
          className={`absolute ${expanded ? 'top-4 right-8 w-48 h-48' : 'top-4 right-8 w-64 h-64'} p-0 border-0 bg-transparent cursor-pointer transition-all duration-300 ease-in-out z-20`}
          aria-label="Expand/Collapse Image"
        >
          <img
            src={plant_1}
            alt="Plant"
            className="ml-12 w-full h-full object-cover"
          />
        </button>

        <textarea
          className={`bg-[#373737] absolute ${expanded ? 'bottom-4 right-4 w-3/4 h-4/5' : 'bottom-4 right-4 w-1/2 h-3/4'} p-3 text-lg border-2 border-white rounded-xl z-10 transition-all duration-300 ease-in-out`}
          placeholder="TULSI"
        />
      </div>
    </div>
  );
};

export default Explore;
