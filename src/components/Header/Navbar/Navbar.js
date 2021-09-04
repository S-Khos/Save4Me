import './Navbar.css';
import brand from './brand_save4me.png'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="header-container">
        <img id="header-brand" src={brand}/>
        <div className="header-menu">
          <Link to="/" className="header-button" id="home">Home</Link>
          <Link to="/FAQ" className="header-button" id="faq">FAQ</Link>
          <Link to="/Contact" className="header-button" id="contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
