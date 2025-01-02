import React from 'react';
import { pizzaTerminal, pizza, burger } from '../../../Data'; // Assuming these are correctly defined in Data
import './FoodDeals.css';

const FoodDeals = () => {
  return (
    <div className="food-deals-container">
      <div className="food-deals-cards">

        {/* First Food Deal Card */}
        <div className="food-deal-card">
          <img src="/images/iteration-2-images/pictures/food-1.png" alt="food" />
          <div className="food-deal-info">
            <h3>{pizzaTerminal.name}</h3>
            <div className="food-deal-rating">
              <span>⭐ {pizzaTerminal.rate}</span>
              <span>💬 {pizzaTerminal.comments}</span>
            </div>
          </div>
        </div>

        {/* Second Food Deal Card */}
        <div className="food-deal-card">
          <img src="/images/iteration-2-images/pictures/food-2.png" alt="food" />
          <div className="food-deal-info">
            <h3>{pizza.name}</h3>
            <div className="food-deal-rating">
              <span>⭐ {pizza.rate}</span>
              <span>💬 {pizza.comments}</span>
            </div>
          </div>
        </div>

        {/* Third Food Deal Card */}
        <div className="food-deal-card">
          <img src="/images/iteration-2-images/pictures/food-3.png" alt="food" />
          <div className="food-deal-info">
            <h3>{burger.name}</h3>
            <div className="food-deal-rating">
              <span>⭐ {burger.rate}</span>
              <span>💬 {burger.comments}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodDeals;

