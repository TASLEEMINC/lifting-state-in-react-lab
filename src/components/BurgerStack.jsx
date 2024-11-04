// src/components/BurgerStack.jsx

import React from 'react';

const BurgerStack = ({ stack, removeIngredient }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeIngredient(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
