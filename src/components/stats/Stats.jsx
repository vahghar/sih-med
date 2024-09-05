import React from 'react';
import plant_bg from "../../assets/tulsi-big-bg.png";

const Stats = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-[#012b00] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${plant_bg})`, filter: 'blur(5px)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="relative z-10 flex justify-between items-start p-10 bg-[#373737] w-3/4 h-3/4 rounded-xl border-2 border-white shadow-lg">
        {/* Left Section: Headline */}
        <div className="w-1/3 text-white pr-8">
          <h1 className="text-5xl font-bold mb-5 text-white text-shadow-md">Medicinal Stats</h1>
        </div>

        {/* Right Section: Statistics */}
        <div className="w-2/3 text-white leading-7">
          <p className="mb-4"><span className="font-semibold">Stress and Anxiety:</span> 39% effective in reducing general anxiety disorder symptoms compared to a placebo.</p>
          <p className="mb-4"><span className="font-semibold">Type 2 Diabetes:</span> It may help lower blood sugar levels and improve insulin sensitivity by 15-20%.</p>
          <p><span className="font-semibold">Respiratory Infections:</span> Tulsi's anti-inflammatory and antimicrobial properties may provide some relief by improving symptoms by 15-30%.</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
