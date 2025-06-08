import React, { useState, useEffect } from 'react';
import {
  FaEnvelope, FaPhoneAlt, FaClock, FaMapMarkerAlt,
  FaBars, FaTimes, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn
} from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from "../assets/valplasto_logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        closeAllMenus();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div className="top-navbar">
        <div className="top-left">
          <FaEnvelope className="icon" />
          <span>valplasto@gmail.com</span>
        </div>
        <div className="top-middle">
          <a href="#"><FaInstagram className="icon" /></a>
          <a href="#"><FaFacebookF className="icon" /></a>
          <a href="#"><FaLinkedinIn className="icon" /></a>
        </div>
        <div className="top-right">
          <FaPhoneAlt className="icon" />
          <span>+91-9766099437 / +91-9175181013</span>
          <span className="divider">|</span>
          <FaClock className="icon" />
          <span>Mon to Sun 9 AM to 7 PM</span>
          <span className="divider">|</span>
          <FaMapMarkerAlt className="icon" />
          <span>Nagpur</span>
        </div>
      </div>

      <nav className="main-navbar">
        <div className="logo-container">
          <Link to="/" onClick={closeAllMenus}>
            <img src={logo} alt="Valplasto Enterprises logo" className="logo-img" />
          </Link>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/Home" onClick={closeAllMenus}>Home</Link></li>
          <li><Link to="/About" onClick={closeAllMenus}>About Us</Link></li>
          <li><Link to="/Our_services" onClick={closeAllMenus}>Our Services</Link></li>

          <li className={`dropdown ${openDropdown === 'products' ? 'open' : ''}`}>
            <span onClick={() => toggleDropdown('products')}>Products</span>
            {openDropdown === 'products' && (
              <ul className="dropdown-menu">
                <li><Link to="/ConcreteAdmixture" onClick={closeAllMenus}>Concrete Admixture</Link></li>
                <li><Link to="/Micro_concrete" onClick={closeAllMenus}>Micro Concrete</Link></li>
                <li><Link to="/Waterproofing_tape" onClick={closeAllMenus}>Waterproofing Tape</Link></li>
                <li><Link to="/GP" onClick={closeAllMenus}>Fosroc Conbextra GP2 Grout</Link></li>
                <li><Link to="/Tile_Adhisive" onClick={closeAllMenus}>Tile Adhesive</Link></li>
                <li><Link to="/epoxy-grout" onClick={closeAllMenus}>Epoxy Grout</Link></li>
                <li><Link to="/Waterproofing_Chemicals" onClick={closeAllMenus}>Waterproofing Chemicals</Link></li>
                <li><Link to="/Waterproofing_Membrane" onClick={closeAllMenus}>Waterproofing Membrane</Link></li>
                <li><Link to="/epoxy-flooring" onClick={closeAllMenus}>Epoxy Flooring</Link></li>
                <li><Link to="/Polyurethane_sealent" onClick={closeAllMenus}>Polyurethane Sealant</Link></li>
                <li><Link to="/app-membrain" onClick={closeAllMenus}>APP Membrane</Link></li>
                <li><Link to="/self-leveler" onClick={closeAllMenus}>Self Leveler</Link></li>
                <li><Link to="/Thermal_insulation_paint" onClick={closeAllMenus}>Thermal Insulation Paint</Link></li>
                <li><Link to="/Anchor" onClick={closeAllMenus}>Anchor</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/projects" onClick={closeAllMenus}>Projects</Link></li>
          <li><Link to="/Blogs" onClick={closeAllMenus}>Blogs</Link></li>
          <li><Link to="/ContactUs" onClick={closeAllMenus}>Contact Us</Link></li>
          <li><Link to="/Bookfreesitevisit" onClick={closeAllMenus}>Book Free Site Visit</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
