import React from 'react';
import { Ingredient } from '../../types';

interface IngredientBtnProps {
  ingredient: { name: string, count: number };
  ingredientDetails: Ingredient[];
  onAdd: () => void;
  onRemove: () => void;
}

const IngredientBtn: React.FC<IngredientBtnProps> = ({ ingredient, ingredientDetails, onAdd, onRemove }) => {
  const ingredientDetail = ingredientDetails.find(ing => ing.name === ingredient.name);

  if (!ingredientDetail) {
    return null;
  }
  return (
    <div>
      <button onClick={onAdd}>
        <img src={ingredientDetail.image} alt={ingredient.name} style={{ width: "30px" }} />
        {ingredient.name}
      </button>
      <span>{ingredient.count}</span>
      <button onClick={onRemove}>Delete</button>
    </div>
  );
};

export default IngredientBtn;
