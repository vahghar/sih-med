import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import bgSearch from '../../assets/footer_flowers.png';

const Search = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/search/tulsi');
  };

  return (
    <div
      className="min-h-screen bg-[#022C22] pt-16 px-4 bg-center"
      style={{ 
        backgroundImage: `url(${bgSearch})`, 
        backgroundSize: '50%', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative flex items-center w-full max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 pr-10 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg" // Added shadow-lg class for drop shadow
        />
        <button className="absolute right-2 p-2" onClick={handleSearch}>
          <MagnifyingGlassIcon
            className="w-5 h-5 text-gray-400 hover:text-gray-600"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
