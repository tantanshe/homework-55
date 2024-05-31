import React from 'react';

interface BurgerProps {
  ingredients: { name: string; count: number }[];
}

const Burger: React.FC<BurgerProps> = ({ingredients}) => {
  const burgerIngredients = ingredients.reduce((acc: JSX.Element[], ingredient) => {
    const count = ingredient.count ?? 0;
    for (let i = 0; i < count; i++) {
      acc.push(
        <div key={`${ingredient.name}-${i}`} className={ingredient.name}></div>
      );
    }
    return acc;
  }, []);
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {burgerIngredients}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;