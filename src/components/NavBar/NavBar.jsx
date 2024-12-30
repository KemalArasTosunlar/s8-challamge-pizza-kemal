import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.svg'; // Import the logo using ES6 import

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}
