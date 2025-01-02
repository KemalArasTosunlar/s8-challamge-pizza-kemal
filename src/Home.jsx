import React from 'react'; 
import homeBanner from './assets/home-banner.png';
import logo from './assets/logo.svg';
import { icons } from './Data';
import Cards from './components/Cards/Cards';
import CuisineList from './components/Home/CuisineList/CuisineList';
import FoodDeals from './components/Home/FoodDeals/FoodDeals';
import Footer from './components/Footer/Footer';

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
                <p style={{ 
                  fontFamily: 'Roboto Condensed', 
                  color: 'white', 
                  fontWeight: '200', 
                  fontSize: 'clamp(2.5rem, 10vw, 5.375rem)',
                  padding: '0 1rem',
                  textAlign: 'center'
                }}>
                    KOD ACIKTIRIR PİZZA DOYURUR
                </p>
                <button 
                    style={{ 
                      backgroundColor: '#FDC913', 
                      borderRadius: '30px',
                      padding: '1rem 2rem',
                      fontSize: '1.25rem',
                      marginTop: '1rem'
                    }} 
                    onClick={goToOrder}
                >
                    ACIKTIM
                </button>
            </div>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center', 
              backgroundColor: 'white', 
              padding: '1rem',
              gap: '1rem'
            }}>
                {icons.map((icon, index) => (
                    <div key={icon.id} style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center', 
                      padding: '0.5rem',
                      minWidth: '100px'
                    }}>
                        <img src={icon.src} alt={`Icon ${icon.id}`} style={{ 
                          width: '40px', 
                          height: '40px',
                          marginBottom: '0.5rem'
                        }} />
                        <span style={{ fontSize: '0.875rem', textAlign: 'center' }}>{[
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
            <Cards goToOrder={goToOrder} />
            <CuisineList />
            <FoodDeals />
           
        </>
    );
};

export default Home;
