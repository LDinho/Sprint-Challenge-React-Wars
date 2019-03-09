import React from 'react';

const Character = ({character}) => {
  console.log('Character Name:', character.name)
  const { name } = character;

  return (
    <div className="character-details">
      <h2>{name}</h2>

    </div>
  )
}

export default Character;
