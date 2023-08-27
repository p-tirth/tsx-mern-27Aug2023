import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import CharecterCard from './CharacterCard';
import swapiRequest from '../api/SwapiRequest';
import LoadingSVG from '../assets/loading.svg';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiLink = 'https://swapi.dev/api/people/'; // API endpoint for characters
    swapiRequest(apiLink)
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if(error){
    return <p>Error fetching data: {error.message}</p>;
  }
  return (
    <div className='flex justify-center items-center flex-col'>
      {loading&&<img src={LoadingSVG} alt="Loading , Please wait" />}
      {characters.map(character => (
        <div key={character.name}>
          <CharecterCard className='bg-slate-300' character={character}/>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
