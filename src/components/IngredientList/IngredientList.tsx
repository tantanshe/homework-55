import React from 'react';
import { Ingredient} from '../../types';
import IngredientBtn from '../IngredientBtn/IngredientBtn';

interface IngredientListProps {
  ingredients: Ingredient [];
  ingredientCount: { [name: string]: number };
}
const IngredientList:React.FC<IngredientListProps> = ({ingredients, ingredientCount}) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <IngredientBtn key={ingredient.name} ingredient={ingredient} count={ingredientCount[ingredient.name]}/>
        ))}
    </div>
  );
};

export default IngredientList;