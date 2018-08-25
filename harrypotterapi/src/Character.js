import React from 'react';
import './Character.css';

const Character = ({ name, image, house }) => {
  return(
    <div className='tc dib br3 pa3 ma2 grow bw2 bg-near-black shadow-4'>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <h3>{house}</h3>
    </div>
  )
}

export default Character;