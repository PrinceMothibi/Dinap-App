import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="logo.png" alt="Company Logo" />
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: ofmothi022@student.wethinkcode.co.za</p>
        <p>Phone: (+27)78 019 9442</p>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/LilBam.sa" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/OfentseMothib13" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/prince.lilbam/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

