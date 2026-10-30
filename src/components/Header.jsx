import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_CONFIG } from '../products';

export default function Header({ cartCount, onOpenCart }) {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-inner">
          <div className="announcement-text">
            <i className="fas fa-gift"></i>
            <span>🎉 Special Offer: <strong>FREE Delivery</strong> on orders over ₹999 | Code: <strong>KIDOZ10</strong> for 10% OFF</span>
          </div>
          <div className="announcement-links">
            <a href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer" className="announcement-link">
              <i className="fab fa-whatsapp"></i> Order on WhatsApp: {STORE_CONFIG.whatsappDisplayNumber}
            </a>
            <a href={STORE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="announcement-link">
              <i className="fab fa-instagram"></i> {STORE_CONFIG.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="brand-logo">
            <div className="logo-badge">
              <i className="fas fa-child"></i>
            </div>
            <div className="brand-text">
              <span className="brand-name">kidoz<span>.</span></span>
              <span className="brand-tagline">Kids Fashion</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/season/winter" className="nav-link">❄️ Winter</Link>
            <Link to="/season/summer" className="nav-link">☀️ Summer</Link>
            <Link to="/season/autumn" className="nav-link">🍂 Autumn</Link>
            <Link to="/season/spring" className="nav-link">🌸 Spring</Link>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <a 
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Hi%20Kidoz%20Kids%20Fashion!%20I'm%20visiting%20your%20website%20and%20want%20to%20order.`} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-header-whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
              <span>Order on WhatsApp</span>
            </a>

            <button className="action-icon-btn cart-toggle-btn" onClick={onOpenCart} title="View Cart">
              <i className="fas fa-shopping-bag"></i>
              <span className="cart-badge">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
