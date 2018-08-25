import React from 'react';

const Character = ({ name, image }) => {
  return(
    <div>
      <h1>{name}</h1>
      <img src={image}/>
    </div>
  )
}

export default Character;