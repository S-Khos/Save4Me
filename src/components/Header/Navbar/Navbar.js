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
          <a href="/" className="header-button" id="home">Home</a>
          <a href="/FAQ" className="header-button" id="faq">FAQ</a>
          <a href="/Contact" className="header-button" id="contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
