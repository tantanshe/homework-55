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
    <div className="ingredient">

      <button onClick={onAdd} className="ingredient-btn">
        <img src={ingredientDetail.image} alt={ingredient.name} style={{ width: "70px" }} />
        {ingredient.name}
      </button>
      <span className="ingredient-count">{ingredient.count}</span>
      <button className="delete-btn" onClick={onRemove}>Delete</button>
    </div>
  );
};

export default IngredientBtn;
