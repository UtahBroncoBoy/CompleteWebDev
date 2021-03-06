import React from 'react';
import './card.css';

const Card = ({name, email, phone}) => {
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${name}?200x200`} alt='robots'/>
      <div>
        <h2>{name}</h2>
        <p>E-Mail: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

export default Card;