import React from 'react';

import './StarWars.css';

const Character = ({character}) => {
  const {name, birth_year, gender, hair_color} = character;

  return (
    <div className="character-card">
      <h2>{name}</h2>
      <p>
        <strong>Birth Year: </strong>{birth_year}
      </p>
      <p>
        <strong>Gender: </strong>{gender}
      </p>
      <p>
        <strong>Hair Color: </strong>{hair_color}
      </p>

    </div>
  )
}

export default Character;
