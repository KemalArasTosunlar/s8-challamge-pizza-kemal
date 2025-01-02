import React from 'react';
import logo from '../../assets/logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Column - Brand Information */}
        <div className="footer-column">
          <img src={logo} alt="Teknolojik Yemekler Logo" className="footer-logo" />
          <div className="contact-info">
            <p>
              <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Location" className="contact-icon" />
              341 Londonderry Road, Istanbul, Türkiye
            </p>
            <p>
              <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Email" className="contact-icon" />
              acilkitim@teknolojikyemekler.com
            </p>
            <p>
              <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Phone" className="contact-icon" />
              +90 216 123 45 67
            </p>
          </div>
        </div>

        {/* Center Column - Hot Menu */}
        <div className="footer-column">
          <h3>Hot Menu</h3>
          <ul className="menu-list">
            <li><a href="#">Terminal Pizza</a></li>
            <li><a href="#">5 Kişilik Hackathon Pizza</a></li>
            <li><a href="#">useEffect Tavuklu Pizza</a></li>
            <li><a href="#">Beyaz Console Frosty</a></li>
            <li><a href="#">Testler Geçti Mutlu Burger</a></li>
            <li><a href="#">Position Absolute Acı Burger</a></li>
          </ul>
        </div>

        {/* Right Column - Instagram Gallery */}
        <div className="footer-column">
          <h3>Instagram</h3>
          <div className="instagram-grid">
            {[...Array(6)].map((_, index) => (
              <img 
                key={index}
                src={`/images/iteration-2-images/footer/insta/li-${index}.png`}
                alt={`Instagram ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Teknolojik Yemekler</p>
      </div>
    </footer>
  );
};

export default Footer;
