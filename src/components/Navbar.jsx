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

      {/* Search Input */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search characters..."
          className="px-4 py-2 mr-4 border rounded-md"
        />
      </div>

      {/* Filter Options */}
      <div className="flex items-center">
        <select className="px-4 py-2 border rounded-md">
          <option value="vehicles">Vehicles</option>
          <option value="starships">Starships</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
          <option value="films">Films</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
