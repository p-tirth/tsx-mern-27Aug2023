import React, { useState, } from 'react';
import logo from "../assets/starWars.png" 
import FilterList from './FilterList';


const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    console.log(inputValue)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <nav className="flex p-4 bg-black">

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo"className="h-20 mr-4"/>
      </div>

      {/* SearchBar */}
      <div className='flex w-full justify-center items-center'>
        {/* Search Filters */}
        <div>
            <span className="rounded-md shadow-sm">
              <button 
              type="button" 
              className="flex w-fit justify-center items-center px-4 py-2 border rounded-l-md bg-yellow-300" id="dropdown-menu"
              onClick={()=>{setDrop(!drop)}}
              >
                Filter
                <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
              </button>
            </span>
            {drop && <div className="absolute">
            <FilterList/>
            </div>}
        </div>
        
        {/* Search Input */}
        <div className="w-1/2">
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search characters..." className="px-4 py-2 mr-4 border  w-full"/>
        </div>
        {/* Search Button */}
        <div>
          <button onClick={handleSearch} className='px-4 py-2 mr-4 border rounded-r-md bg-yellow-300'>Search!</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
