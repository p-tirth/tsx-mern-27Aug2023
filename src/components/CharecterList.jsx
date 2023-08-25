import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import CharecterCard from './CharacterCard';
import swapiRequest from '../api/SwapiRequest';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCharacters(swapiRequest('https://swapi.dev/api/people/'))
    // axios.get('https://swapi.dev/api/people/')
    // .then(response => {
    //       const data = response.data.results
    //       setCharacters(data);
    //       console.log(data)
    //       console.log(characters)
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     setError(error);
    //     setLoading(false);
    //   });
  }, []);
  return (
    <div>
      {characters.map(character => (
        <div key={character.name}>
          <CharecterCard character={character}/>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
