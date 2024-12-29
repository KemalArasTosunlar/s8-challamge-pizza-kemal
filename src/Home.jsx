import React from 'react'; 
import homeBanner from './assets/home-banner.png'; 
import logo from './assets/logo.svg'; // Import the logo

const Home = () => {
    return (
        <div 
            style={{
                width: `100vw`,
                height: '100vh',
                backgroundImage: `url(${homeBanner})`, 
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the background image
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
            <p style={{ fontFamily: 'Roboto Condensed', color: 'white', fontWeight: '300', fontSize: '86px' }}>
                KOD ACIKTIRIR PİZZA DOYURUR
            </p>
            <button 
                style={{ backgroundColor: '#FDC913', borderRadius: '30px' }} 
                onClick={() => window.location.href = '/Order'}
            >
                ACIKTIM
            </button>
        </div>
    );
};

export default Home;
