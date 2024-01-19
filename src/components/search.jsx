// Search.js
import React, { useState } from 'react';
import '../App.css';

const Search = ({ type, onSearch, onClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Pass the search term back to the parent component
    onSearch(searchTerm);
  };

  return (
    <div>
      <label htmlFor="searchInput" className='m-4'>{type}</label>
      <input
        type="text"
        id="searchInput"
        placeholder={type}
        className='border border-red-500'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className='m-5 bg-red-600 text-black w-40 h-12 rounded-lg'
        onClick={() => {
          handleSearch();
          // Trigger the additional onClick passed from the parent component
          if (onClick) {
            onClick();
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
