import React from 'react';
import './Cards.css';

const Cards = ({ goToOrder }) => {
  return (
    <div className="cards-container">
      <div className="card card-1">
        <div className="card-content">
          <h2 className="card-title">Özel Lezzetus</h2>
          <p className="card-subtitle">Position: Absolute Acı Burger</p>
          <button className="card-button" onClick={goToOrder}>Sipariş Ver</button>
        </div>
      </div>

      <div className="cards-column">
        <div className="card card-2">
          <div className="card-content">
            <h2 className="card-title">Hackathlon Burger Menü</h2>
            <button className="card-button" onClick={goToOrder}>Sipariş Ver</button>
          </div>
        </div>

        <div className="card card-3">
          <div className="card-content">
            <p className="card-text">Çooook hızlı npm gibi kurye</p>
            <button className="card-button" onClick={goToOrder}>Sipariş Ver</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
