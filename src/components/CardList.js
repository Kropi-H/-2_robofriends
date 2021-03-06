import React from 'react';
import Card from './Card';


const CardList = (propsRobots) => {
  const { robots } = propsRobots;
  return (
    <div>
      {
        robots.map((user, i) => {
          console.log('Card list');
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              username={robots[i].username}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  )
}

export default CardList;