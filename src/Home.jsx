import React from 'react'; 
import homeBanner from './assets/home-banner.png';
import logo from './assets/logo.svg';
import { icons } from './Data';
import Cards from './components/Cards/Cards';

const Home = ({ goToOrder }) => {
    return ( 
        <>
            <div 
                style={{
                    width: `100vw`,
                    height: '100vh',
                    backgroundImage: `url(${homeBanner})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <p style={{ fontFamily: 'Roboto Condensed', color: 'white', fontWeight: '200', fontSize: '86px' }}>
                    KOD ACIKTIRIR PİZZA DOYURUR
                </p>
                <button 
                    style={{ backgroundColor: '#FDC913', borderRadius: '30px' }} 
                    onClick={goToOrder}
                >
                    ACIKTIM
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: '20px' }}>
                {icons.map((icon, index) => (
                    <div key={icon.id} style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
                        <img src={icon.src} alt={`Icon ${icon.id}`} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        <span>{[
                            "Yeni Kore",
                            "Pizza",
                            "Burger",
                            "Kızartmalar",
                            "Fast Food",
                            "Gazlı İçecek"
                        ][index]}</span>
                    </div>
                ))}
            </div>
            <Cards /> {/* Add the Cards component here */}
        </>
    );
};

export default Home;
