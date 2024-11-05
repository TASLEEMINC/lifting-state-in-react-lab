// `src/components/BurgerStack.jsx`
const BurgerStack = ({ stack, removeFromBurger }) => {

  
  return (
    <ul>
      {stack.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
