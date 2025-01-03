import React from 'react';
import './CuisineList.css';

const CuisineList = ({ goToOrder }) => {
  return (
    <div className="cuisine-list-container">
      <h3 className="cuisine-list-title">en çok paketlenen menüler</h3>
      <h3 className="cuisine-list-subtitle">Acıktıran Kodlara Doyuran Lezzetler</h3>
      <div className="cuisine-buttons-container">
        <button className="cuisine-button" onClick={goToOrder}>
          <img src="/images/iteration-2-images/icons/1.svg" alt="icon" />
          <span>Ramen</span>
        </button>
        <button className="cuisine-button" onClick={goToOrder}>
          <img src="/images/iteration-2-images/icons/2.svg" alt="icon" />
          <span>Pizza</span>
        </button>
        <button className="cuisine-button" onClick={goToOrder}>
          <img src="/images/iteration-2-images/icons/3.svg" alt="icon" />
          <span>Burger</span>
        </button>
        <button className="cuisine-button" onClick={goToOrder}>
          <img src="/images/iteration-2-images/icons/4.svg" alt="icon" />
          <span>French Fries</span>
        </button>
        <button className="cuisine-button" onClick={goToOrder}>
          <img src="/images/iteration-2-images/icons/5.svg" alt="icon" />
          <span>Fast Food</span>
        </button>
        <button className="cuisine-button" onClick={goToOrder}>
          <img src="/images/iteration-2-images/icons/6.svg" alt="icon" />
          <span>Soft Drink</span>
        </button>
      </div>
    </div>
  );
};

export default CuisineList;
