import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaWhatsapp, FaTruck, FaLock } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import logo from "../assets/valplasto_logo.png"; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-info-box">
          <MdLocalShipping className="footer-icon" />
          <p className="footer-title">Free Shipping</p>
          <p className="footer-subtitle">On all orders above Rs 499</p>
        </div>
        <div className="footer-info-box">
          <FaTruck className="footer-icon" />
          <p className="footer-title">On Time Delivery</p>
          <p className="footer-subtitle">Delivery before estimate date</p>
        </div>
        <div className="footer-info-box">
          <FaLock className="footer-icon" />
          <p className="footer-title">100% Secured Payments</p>
          <p className="footer-subtitle">We are officially registered</p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        {/* Logo and Description */}
        <div className="footer-column">
          <img src={logo} alt="Valplasto Enterprises Logo" className="footer-logo" />
          <p className="footer-description">
            Valplasto Enterprises - Delivering quality waterproofing solutions & construction chemicals across industries with commitment and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
            <li><a href="/FAQS">FAQs</a></li>
            <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
            <li><a href="/TermsAndConditions">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div className="footer-column">
          <h3 className="footer-heading">Product Categories</h3>
          <ul className="footer-links">
            <li><a href="#">Repair</a></li>
            <li><a href="#">Renovate</a></li>
            <li><a href="#">New Construction</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-contact">
            <li>Address: Plot No. 141,Priti Society,Behind Sundar Factory,Koradi Road,Nagpur - 441111, Maharashtra, India</li>
            <li>Phone: +91-9766099437 , 9175181013</li>
            <li>Email: valplasto@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://instagram.com/valplastoenterprises" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> @valplastoenterprises
          </a>
          <a
            href="https://wa.me/919766099437?text=Hi%20Valplasto%20Enterprises!%20I%20am%20interested%20in%20your%20services.%20Want%20more%20information%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
        <p className="footer-copyright">
          &copy; 2025 Valplasto Enterprises | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
