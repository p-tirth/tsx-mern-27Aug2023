import React, { useState, } from 'react';
import { useNavigate  } from "react-router-dom";

export default function CharectarCard({character}) {
  const navigate = useNavigate ();
  const [characters, setCharacters] = useState([]);
  const handleOnSelect = () => {
    navigate("/Details")
    console.log("take me to other place")
  }

  return (
    <div onClick={handleOnSelect} className="flex flex-col justify-center items-center rounded overflow-hidden shadow-lg hover:bg-gray-100 transition duration-300">
      <div className="px-6 py-4">
      <img src="https://picsum.photos/200/300.jpg" alt="IMAGE" />
        <div className="font-bold text-xl mb-2">{character.name}</div>
        <p className="text-gray-700 text-base">
          Height: {character.height} | Mass: {character.mass}
        </p>
        <p className="text-gray-700 text-base">Hair Color: {character.hair_color}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Gender: {character.gender}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Eye Color: {character.eye_color}
        </span>
      </div>
    </div>
  );
};
