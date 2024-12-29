import React from 'react'; 
import homeBanner from './assets/home-banner.png'; // Resmi içe aktar

const Home = () => {
    return (
        <div 
            style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${homeBanner})`, // Resmi kullan
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <h1 style={{ fontSize: '86px', color: '#FFFFFF', fontFamily: 'Roboto Condensed', fontWeight: '300', letterSpacing: '1.5px' }}>
                Teknolojik Yemekler
            </h1>
            <p style={{ fontSize: '36px', color: '#FFFFFF', fontFamily: 'Roboto Condensed', fontWeight: '300', letterSpacing: '1.5px' }}>
                KOD ACIKTIRIR, PİZZA DOYURUR.
            </p>
            <button 
                style={{
                    backgroundColor: '#FDC913',
                    color: '#292929',
                    fontSize: '18px',
                    fontFamily: 'Barlow',
                    padding: '10px',
                    borderRadius: '10px',
                    transition: 'background-color 0.3s',
                }} 
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0b912'} 
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FDC913'}
                onClick={() => window.location.href='/order'}
            >
                Acıktım
            </button>
        </div>
    );
};

export default Home;
