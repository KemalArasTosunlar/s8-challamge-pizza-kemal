import React from 'react';
import './Success.css';

const Success = ({ pizzaName, selectedToppings, totalPrice, goToHome }) => {
  if (!pizzaName || !selectedToppings || !totalPrice) {
    return (
      <div className="success-container">
        <h1>Hata!</h1>
        <p>Sipariş bilgilerine ulaşılamadı.</p>
        <button onClick={goToHome} className="home-button">
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  return (
    <div className="success-container"> 
      <h1 className="success-message">TEBRİKLER! SİPARİŞİNİZ ALINDI!</h1>
      <h2>{pizzaName}</h2>
      <p>Seçilen Malzemeler: {selectedToppings.join(', ')}</p>
      <p>Toplam Fiyat: {totalPrice}₺</p>
      <button onClick={goToHome} className="home-button">
        Ana Sayfa
      </button>
    </div>
  );
};

export default Success;
