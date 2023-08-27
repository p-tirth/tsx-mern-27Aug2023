import React from 'react';
import logo from "../assets/starWars.png" 

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between p-4 bg-black">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-20 mr-4"
        />
      </div>
      <div>
  
        {/* Filter Options */}
        <div>
            <span className="rounded-md shadow-sm">
                <button type="button" className="inline-flex justify-center w-fit rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="dropdown-menu" aria-haspopup="true" aria-expanded="true">
                    Select options
                    <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                    </svg>
                </button>
            </span>
        </div>
        div
        {/* Search Input */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search characters..."
            className="px-4 py-2 mr-4 border rounded-md"
          />
        </div>
  
      </div>
    </nav>
  );
};

export default Navbar;
