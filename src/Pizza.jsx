import React from 'react';

// eslint-disable-next-line react/prop-types
const Pizza = ({ pizzaObject: { name, photoName, ingredients, price } }) => {
  console.log();
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default Pizza;
