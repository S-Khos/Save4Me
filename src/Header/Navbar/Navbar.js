import './Navbar.css';
import brand from './brand5.png'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="header-container">
        <img id="header-brand" src={brand}/>
        <div className="header-menu">
          <a className="header-button" id="home">Home</a>
          <a className="header-button" id="faq">FAQ</a>
          <a className="header-button" id="contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;