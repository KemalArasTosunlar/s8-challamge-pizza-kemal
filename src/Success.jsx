import React from 'react';
import './Success.css';
import { useLocation, Link } from 'react-router-dom';

const Success = () => {
    const location = useLocation();

    if (!location.state) {
        return (
            <div className="success-container">
                <h1>Hata!</h1>
                <p>Sipariş bilgilerine ulaşılamadı.</p>
                <Link to="/">Ana Sayfaya Dön</Link>
            </div>
        );
    }

    return (
        <div className="success-container"> 
            <h1 className="success-message">TEBRİKLER! SİPARİŞİNİZ ALINDI!</h1>
            <h2>{location.state.pizzaName}</h2>
            <p>Seçilen Malzemeler: {location.state.selectedToppings.join(', ')}</p>
            <p>Toplam Fiyat: {location.state.totalPrice}₺</p>
            <Link to="/" className="home-button">Ana Sayfa</Link>
        </div>
    );
};

export default Success;
