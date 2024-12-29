import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h1>Teknolojik Yemekler</h1>
            <button onClick={() => window.location.href='/order'}>Sipariş Ver</button>
        </div>
    );
};

export default Home;
