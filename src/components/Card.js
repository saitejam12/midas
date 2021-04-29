import React from "react";

function Card({ name, id, image }) {
  return (
    <div className='pokeCard'>
      <div className='cardTitle'>
        {name.toUpperCase()}
        <span>ID: {id}</span>
      </div>
      <img className='pokeImage' src={image} alt={`${name}`} />
    </div>
  );
}

export default Card;
