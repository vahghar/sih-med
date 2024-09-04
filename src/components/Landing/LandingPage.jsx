import React from 'react';
import landingImg from "../../assets/landing_page.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 mt-10">
        <p className="text-sm font-normal mb-4">Powering Tomorrow</p>
        <h1 className="text-5xl md:text-7xl mb-4">
          The Future of <br />
          <span>Green</span> <br />
          <span>Energy</span>
        </h1>
        <p className="text-lg font-light mb-8">
          Our commitment to green energy is paving the way for a cleaner,
          healthier planet. Join us on a journey towards a future where clean,
          renewable energy sources transform the way we power our lives.
        </p>
        {/* Buttons Section */}
        <div className="flex space-x-4">
          <Link
            to="/solutions"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            View our Solutions
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={landingImg}
          alt="Green Energy"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default LandingPage;
