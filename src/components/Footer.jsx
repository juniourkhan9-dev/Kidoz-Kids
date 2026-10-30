import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_CONFIG } from '../products';

export default function Footer() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp-hub">
        <a 
          href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Hi%20Kidoz!%20I%20am%20exploring%20your%20website.`} 
          target="_blank" 
          rel="noreferrer" 
          className="floating-whatsapp-btn" 
          title="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <div className="logo-badge">
                <i className="fas fa-child"></i>
              </div>
              <span>kidoz<span>.</span></span>
            </Link>
            <p className="footer-tagline">
              Bringing premium, skin-friendly, fashionable outfits for your little princes and princesses. 100% breathable organic blends pre-washed for utmost comfort.
            </p>
            <div className="footer-social-links">
              <a href={STORE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="social-btn" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Seasonal Collections</h4>
            <ul className="footer-links">
              <li><Link to="/season/winter">Winter Cozy Wear (8 Styles)</Link></li>
              <li><Link to="/season/summer">Summer Cool Outfits (8 Styles)</Link></li>
              <li><Link to="/season/autumn">Autumn Warm Sweaters (8 Styles)</Link></li>
              <li><Link to="/season/spring">Spring Fresh Bloom (8 Styles)</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Care</h4>
            <ul className="footer-links">
              <li><Link to="/">Pan-India Shipping Policy</Link></li>
              <li><Link to="/">Easy 7-Day Exchange</Link></li>
              <li><a href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer">Track Order on WhatsApp</a></li>
              <li><a href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer">Bulk / Gifting Enquiries</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Get in Touch</h4>
            <div className="footer-contact-item">
              <i className="fab fa-whatsapp"></i>
              <div>
                <strong style={{ color: 'white', display: 'block' }}>WhatsApp Orders:</strong>
                <a href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer" style={{ color: 'var(--whatsapp)', fontWeight: 700 }}>
                  {STORE_CONFIG.whatsappDisplayNumber}
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fab fa-instagram"></i>
              <div>
                <strong style={{ color: 'white', display: 'block' }}>Official Instagram:</strong>
                <a href={STORE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>
                  {STORE_CONFIG.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>&copy; 2026 Kidoz Kids Fashion. All Rights Reserved. Crafted with ❤️ for little ones.</p>
            <p className="credit-tag">Direct WhatsApp Ordering Experience</p>
          </div>
        </div>
      </footer>
    </>
  );
}
