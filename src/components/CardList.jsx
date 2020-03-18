import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if(true) {
    throw new Error('NOOOO!');
  } 
  return (
    <div>
      {robots.map(robot => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          username={robot.username}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
