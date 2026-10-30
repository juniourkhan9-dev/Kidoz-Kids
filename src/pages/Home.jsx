import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../products';

export default function Home({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.fabric.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">
              <i className="fas fa-sparkles"></i> Handcrafted With Pure Love & 100% Breathable Cotton
            </span>
            <h1 className="hero-title">
              Dress Your Little Stars In <span>Pure Comfort</span> & Style
            </h1>
            <p className="hero-subtitle">
              Breathable, skin-safe, ultra-soft fabrics pre-washed to prevent itching. From cozy co-ord sets to fairy-tale gowns, make every childhood moment memorable.
            </p>
            <div className="hero-cta-group">
              <a href="#catalog" className="btn btn-primary">
                <i className="fas fa-shopping-bag"></i> Explore Collection
              </a>
              <Link to="/season/winter" className="btn btn-whatsapp" style={{ background: '#3b82f6' }}>
                <i className="fas fa-snowflake"></i> Explore Seasonal Wear
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <img src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85" alt="Kidoz Fashion" />
          </div>
        </div>
      </section>

      {/* 4 Bada Seasonal Boxes Section (Links to separate pages) */}
      <section className="section" id="seasons" style={{ paddingTop: '20px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
            <span className="section-tag" style={{ background: 'rgba(255, 77, 109, 0.1)', color: 'var(--primary)' }}>
              <i className="fas fa-layer-group"></i> Separate Seasonal Pages
            </span>
            <h2 className="section-title" style={{ fontSize: '1.9rem', marginTop: '6px' }}>Shop By Season</h2>
            <p className="section-desc" style={{ maxWidth: '750px', margin: 0 }}>
              Click any box below to open its dedicated seasonal store page (Winter, Summer, Autumn & Spring with 8 outfits each).
            </p>
          </div>

          <div className="season-cards-row">
            {/* Box 1: Winter */}
            <Link to="/season/winter" className="season-card-box winter-box" style={{ textDecoration: 'none' }}>
              <div className="season-card-img-wrap">
                <img src="/images/season-winter.jpg" alt="Winter Collection" />
              </div>
              <div className="season-card-footer">
                <span className="season-card-title"><i className="fas fa-snowflake"></i> Winter</span>
                <span className="season-card-action">Shop Now <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>

            {/* Box 2: Summer */}
            <Link to="/season/summer" className="season-card-box summer-box" style={{ textDecoration: 'none' }}>
              <div className="season-card-img-wrap">
                <img src="/images/season-summer.jpg" alt="Summer Collection" />
              </div>
              <div className="season-card-footer">
                <span className="season-card-title"><i className="fas fa-sun"></i> Summer</span>
                <span className="season-card-action">Shop Now <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>

            {/* Box 3: Autumn */}
            <Link to="/season/autumn" className="season-card-box autumn-box" style={{ textDecoration: 'none' }}>
              <div className="season-card-img-wrap">
                <img src="/images/season-autumn.jpg" alt="Autumn Collection" />
              </div>
              <div className="season-card-footer">
                <span className="season-card-title"><i className="fas fa-leaf"></i> Autumn</span>
                <span className="season-card-action">Shop Now <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>

            {/* Box 4: Spring */}
            <Link to="/season/spring" className="season-card-box spring-box" style={{ textDecoration: 'none' }}>
              <div className="season-card-img-wrap">
                <img src="/images/season-spring.jpg" alt="Spring Collection" />
              </div>
              <div className="season-card-footer">
                <span className="season-card-title"><i className="fas fa-spa"></i> Spring</span>
                <span className="season-card-action">Shop Now <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Catalog */}
      <section className="section" id="catalog">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Explore The Wardrobe</span>
            <h2 className="section-title">Handpicked Outfits For Little Trendsetters</h2>
            <p className="section-desc">Select a category or search below to order directly with our WhatsApp styling team.</p>
          </div>

          {/* Filter Tabs */}
          <div className="category-filter-wrapper">
            <div className="category-tabs">
              {[
                { id: 'all', label: 'All Collections', icon: 'fa-border-all' },
                { id: 'girls', label: 'Girls Frocks & Tops', icon: 'fa-female' },
                { id: 'boys', label: 'Boys Sets & Shirts', icon: 'fa-male' },
                { id: 'coord-sets', label: 'Co-ord Sets', icon: 'fa-layer-group' },
                { id: 'festive', label: 'Festive & Party', icon: 'fa-crown' },
                { id: 'infants', label: 'Newborn Rompers', icon: 'fa-baby' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`category-tab ${selectedCategory === tab.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(tab.id)}
                >
                  <i className={`fas ${tab.icon}`}></i> {tab.label}
                </button>
              ))}
            </div>
            <div className="catalog-toolbar-right">
              <span className="product-count-badge">Showing {filteredProducts.length} styles</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
