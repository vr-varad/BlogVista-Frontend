import React, { useContext, useState } from 'react';
import { Search,Mode } from '../UserContext';

const SearchBar = () => {
    const {searchTerm, setSearchTerm} = useContext(Search)
    const {mode} = useContext(Mode)
  

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className={mode?'darkMode':'lightMode'}>
      <form className='search'>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className='search-input'
        />
      </form>
    </div>
  );
};

export default SearchBar;
