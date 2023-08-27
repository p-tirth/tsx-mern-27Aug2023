import React, { useState } from 'react';

const FilterList = () => {
  const [checkboxes, setCheckboxes] = useState([]);
  const checkboxOptions = ['vehicles', 'starships', 'species', 'planets', 'people', 'films'];

  const handleCheckboxChange = (option) => {
    if (checkboxes.includes(option)) {
      setCheckboxes(checkboxes.filter(item => item !== option));
    } else {
      setCheckboxes([...checkboxes, option]);
    }
  };

  const handleSubmit = () => {
    console.log('Selected Checkboxes:', checkboxes);
  };
  const handleReset = () => {
    setCheckboxes([])
  };

  return (
    <div className="p-6 w-fit bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Filters</h2>
    {checkboxOptions.map(option => (
      <div key={option} className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={checkboxes.includes(option)}
          onChange={() => handleCheckboxChange(option)}
          className="mr-2 leading-tight text-indigo-500"
        />
        <label className="text-lg text-black">{option}</label>
      </div>
    ))}
    <div className="mt-4">
      <button
        onClick={handleSubmit}
        className="px-4 py-2 mr-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Submit
      </button>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
      >
        Reset
      </button>
    </div>
  </div>
  
  );
};

export default FilterList;
