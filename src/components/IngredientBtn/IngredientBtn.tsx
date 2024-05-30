import React from 'react';
import { Ingredient} from '../../types';

interface IngredientBtnProps {
  ingredient: Ingredient;
  count: number;
}

const IngredientBtn:React.FC<IngredientBtnProps> = ({ ingredient, count }) => {
  return (
    <div>
      <button>
        <img src={ingredient.image} alt={ingredient.name} style={{width: "30px"}}/>
      {ingredient.name}
      </button>
      <span>{count}</span>
      <button>Delete</button>
    </div>
  );
};

export default IngredientBtn;