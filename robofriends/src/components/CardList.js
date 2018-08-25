import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  
  return(
    <div>
    {
      robots.map((user,i) => {
        return <Card key={robots[i].name} name={robots[i].name} email={robots[i].email} phone={robots[i].phone}/>
      })
    }
    </div>
  );
}

export default CardList;