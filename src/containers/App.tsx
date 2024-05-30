import './App.css'
import { Ingredient } from '../types';
import baconImage from '../assets/bacon.png';
import cheeseImage from '../assets/cheese.png';
import meatImage from '../assets/meat.png';
import saladImage from '../assets/salad.png';

export const INGREDIENTS: Ingredient[] = [
  { name: 'Salad', price: 10, image: saladImage },
  { name: 'Cheese', price: 50, image: cheeseImage },
  { name: 'Meat', price: 80, image: meatImage },
  { name: 'Bacon', price: 60, image: baconImage },
];
const App = () => {

  return (
      <>
      </>
  )
};

export default App
