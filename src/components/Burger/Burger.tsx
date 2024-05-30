import React from 'react';
import { Ingredient} from '../../types';

interface BurgerProps {
  ingredients: Ingredient[];
}
const Burger:React.FC<BurgerProps> = ({ ingredients}) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {ingredients.map((ingredient, index) => (
        <div key={`${ingredient.name}-${index}`} className={ingredient.name}></div>
      ))}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;