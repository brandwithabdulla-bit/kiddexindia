import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo" style={{ marginBottom: '16px', display: 'flex', marginLeft: '-12px' }}>
            <img src="/logo.png" alt="Kiddex India Logo" style={{ height: '140px', width: 'auto', margin: '-50px 0 -40px 0', objectFit: 'contain' }} />
          </div>
          <p className="footer-desc">
            Helping kids learn, create and explore through meaningful screen-free play.
          </p>
          <div className="footer-trust">
            <ShieldCheck size={18} />
            <span>100% Screen-Free Play</span>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/shop?category=Educational">Educational Toys</Link>
          <Link to="/shop?category=DIY">DIY & Craft Kits</Link>
          <Link to="/shop?category=Learning">Learning Games</Link>
        </div>
        
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About Kiddex</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>WhatsApp: +91 91802 33454</p>
          <p>Email: hello@kiddex.in</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kiddex India. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
