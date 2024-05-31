import React from 'react';
import IngredientBtn from '../IngredientBtn/IngredientBtn';
import { Ingredient } from '../../types';

interface IngredientListProps {
  ingredients: { name: string; count: number }[];
  ingredientDetails: Ingredient[];
  onAdd: (name: string) => void;
  onRemove: (name: string) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, ingredientDetails, onAdd, onRemove }) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.name}>
          <IngredientBtn
            ingredient={ingredient}
            ingredientDetails={ingredientDetails}
            onAdd={() => onAdd(ingredient.name)}
            onRemove={() => onRemove(ingredient.name)}
          />
        </div>
      ))}
    </div>
  );
};

export default IngredientList;
