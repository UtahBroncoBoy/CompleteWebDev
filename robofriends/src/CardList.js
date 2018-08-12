import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  
  return(
    <div>
    {
      robots.map((user,i) => {
        return <Card name={robots[i].name} house={robots[i].house} birthday={robots[i].dateOfBirth}/>
      })
    }
    </div>
  );
}

export default CardList;