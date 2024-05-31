import './App.css';
import {Ingredient} from '../types';
import baconImage from '../assets/bacon.png';
import cheeseImage from '../assets/cheese.png';
import meatImage from '../assets/meat.png';
import saladImage from '../assets/salad.png';
import {useState} from 'react';
import IngredientList from '../components/IngredientList/IngredientList';
import Burger from '../components/Burger/Burger';

export const INGREDIENTS: Ingredient[] = [
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

const basePrice = 30;
const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const addIngredient = (ingredientName: string) => {
    setIngredients(prevIngredients =>
      prevIngredients.map(ing => {
        if (ing.name === ingredientName) {
          return {...ing, count: ing.count + 1};
        }
        return ing;
      })
    );
  };

  const removeIngredient = (ingredientName: string) => {
    setIngredients(prevIngredients =>
      prevIngredients.map(ing => {
        if (ing.name === ingredientName && ing.count > 0) {
          return {...ing, count: ing.count - 1};
        }
        return ing;
      })
    );
  };

  const calculateTotalPrice = (): number => {
    return ingredients.reduce((acc, ingredient) => {
      const originalIngredient = INGREDIENTS.find(ing => ing.name === ingredient.name);
      return acc + (originalIngredient ? originalIngredient.price * ingredient.count : 0);
    }, basePrice);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      <IngredientList
        ingredients={ingredients}
        ingredientDetails={INGREDIENTS}
        onAdd={addIngredient}
        onRemove={removeIngredient}
      />
      <Burger ingredients={ingredients}/>
      <div>Total Price: {totalPrice} kgs</div>
    </>
  );
};

export default App;
