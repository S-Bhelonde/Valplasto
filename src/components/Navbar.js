import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from "../assets/valplasto_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Top Info Bar */}
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
          <span>Call us +91-9766099437 / +91-9175181013</span>
          <span className="divider">|</span>
          <FaClock className="icon" />
          <span>Mon to Sat 9 AM to 6 PM</span>
          <span className="divider">|</span>
          <FaMapMarkerAlt className="icon" />
          <span>Nagpur</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav>
        <div className="logo-container">
          <img
            src={logo}
            alt="Valplasto Enterprises"
            className="logo-img"
          />
          
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`fas fa-bars ${isMenuOpen ? 'active' : ''}`}></i>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="Home">Home</a></li>
          <li><a href="AboutUs">About us</a></li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <span onClick={() => toggleDropdown('services')}>
              Our Services <i className={`fas fa-chevron-down ${openDropdown === 'services' ? 'rotated' : ''}`}></i>
            </span>
            {openDropdown === 'services' && (
              <ul className="dropdown-menu">
                <li><a href="#Consulting">Consulting</a></li>
                <li><a href="#Maintenance">Maintenance</a></li>
                <li><a href="#Installation">Installation</a></li>
              </ul>
            )}
          </li>

          {/* Products Dropdown */}
          <li className="dropdown">
            <span onClick={() => toggleDropdown('products')}>
              Products <i className={`fas fa-chevron-down ${openDropdown === 'products' ? 'rotated' : ''}`}></i>
            </span>
            {openDropdown === 'products' && (
              <table className="dropdown-menu products-menu">
                <tbody>
                  <tr><td><a href="Concrete Admixture">Concrete Admixture</a></td></tr>
                  <tr><td><a href="Micro Concrete">Micro Concrete</a></td></tr>
                  <tr><td><a href="Bitumeous Roll">Bitumeous Roll</a></td></tr>
                  <tr><td><a href="GP2">GP2(Non Shrinkgrout)</a></td></tr>
                  <tr><td><a href="Tile Adhesive">Tile Adhesive</a></td></tr>
                  <tr><td><a href="Epoxy Grout">Epoxy Grout</a></td></tr>
                  <tr><td><a href="WaterproofingChemicals">Waterproofing Chemicals</a></td></tr>
                  <tr><td><a href="Butyle Tape">Butyle Tape</a></td></tr>
                  <tr><td><a href="Epoxy Flooring">Epoxy Flooring</a></td></tr>
                  <tr><td><a href="Polyurethane Sealent">Polyurethane Sealent</a></td></tr>
                  <tr><td><a href="App Membrain">App Membrain</a></td></tr>
                  <tr><td><a href="Self Leveler">Self Leveler</a></td></tr>
                </tbody>
              </table>
            )}
          </li>

          {/* Projects Dropdown */}
          <li className="dropdown">
            <span onClick={() => toggleDropdown('projects')}>
              Projects <i className={`fas fa-chevron-down ${openDropdown === 'projects' ? 'rotated' : ''}`}></i>
            </span>
            {openDropdown === 'projects' && (
              <ul className="dropdown-menu">
                <li><a href="Ongoing">Ongoing</a></li>
                <li><a href="Completed">Completed</a></li>
              </ul>
            )}
          </li>

          <li><a href="Blogs">Blogs</a></li>
          <li><a href="ContactUs">Contact Us</a></li>
          <li><a href="Bookfreesitevisit">Book free site visit</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
