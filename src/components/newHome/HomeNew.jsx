import React from 'react';

const HomeNew = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video Section */}
      <video className="w-full h-full object-cover" controls>
        <source src="earthss.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Text Overlay */}
      <div className="absolute top-0 left-0 w-1/3 h-full flex flex-col items-start justify-center p-8 bg-gray-900 bg-opacity-50">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className="typing-animation">Step into the virtual paradise, where nature blossoms at your fingertips</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4 animate-fadeIn">
          Experience the Serenity of Nature, Anytime, Anywhere.
        </p>
      </div>
    </div>
  );
};

export default HomeNew;
