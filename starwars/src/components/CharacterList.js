import React from 'react';

import Character from './Character';
import './StarWars.css';

const CharacterList = ({characters}) => {
  console.log('CharacterList:', characters);

  return (
    <div className="character-list">
      {characters.map((character) => {
        const {created} = character;

        return <Character key={created}
                          character={character}
        />
      })}
    </div>
  )
}

export default CharacterList;
