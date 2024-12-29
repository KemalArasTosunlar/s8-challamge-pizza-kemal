import React from 'react';
import logo from './assets/logo.svg'; 
import homeBanner from './assets/Home.png'; // Resmi içe aktar

const Home = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center" 
            style={{
                width: '1920px',
                height: '1080px',
                gap: '10px',
                opacity: '1', 
                backgroundColor: '#CE2829',
                backgroundImage: `url(${homeBanner})`, // Resmi kullan
                backgroundSize: 'cover'
            }}
        >
            
<h1 className="text-4xl font-bold text-center text-[#FFFFFF]" style={{ fontFamily: 'Roboto Condensed', fontWeight: '300', fontSize: '86px', letterSpacing: '1.5px', position: 'absolute', left: '50%', top: '10%', transform: 'translateX(-50%)' }}>
    Teknolojik Yemekler
</h1>
<p className="text-lg text-center text-[#FFFFFF]" style={{ fontFamily: 'Roboto Condensed', fontWeight: '300', fontSize: '36px', letterSpacing: '1.5px', position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)' }}>
    KOD ACIKTIRIR, PİZZA DOYURUR.
</p>
<button 
    className="absolute" 
    style={{
        backgroundColor: '#FDC913',
        color: '#292929',
        fontSize: '18px',
        fontFamily: 'Barlow',
        padding: '10px',
        borderRadius: '10px',
        left: '50%',
        top: '30%',
        transform: 'translateX(-50%)',
        transition: 'background-color 0.3s'
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
