import React from 'react';

const CharacterDetailCard = ({ character }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white hover:bg-gray-100 transition duration-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{character.name}</div>
        {Object.keys(character).map((key, index) => (
          <p key={index} className="text-gray-700">
            <span className="font-semibold">{key.replace(/_/g, ' ')}:</span> {character[key]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CharacterDetailCard;
