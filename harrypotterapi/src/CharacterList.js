import React from 'react';
import Character from './Character';

const CharacterList = ({ characters }) => {
  return(
    <div>
    {
      characters.map((character,i) => {
        return <Character key={i} name={character.name} image={character.image} />
      })
    }
    </div>
  )
}

export default CharacterList;