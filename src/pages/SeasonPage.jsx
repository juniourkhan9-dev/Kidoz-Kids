import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../products';

const SEASON_META = {
  winter: {
    title: 'Winter Collection ❄️',
    subtitle: 'Cozy layers, snug warm fleece jackets, woolen pullovers, and cute bear hoodies crafted for active little adventurers.',
    image: '/images/season-winter.jpg',
    themeBg: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
    badgeText: 'Winter Warmers'
  },
  summer: {
    title: 'Summer Collection ☀️',
    subtitle: 'Cool styles for sunny days! 100% pure organic cotton, linen co-ords, camp shirts & lightweight sundresses.',
    image: '/images/season-summer.jpg',
    themeBg: 'linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)',
    badgeText: 'Summer Cool Breeze'
  },
  autumn: {
    title: 'Autumn Collection 🍂',
    subtitle: 'Warm looks for cooler days! Soft-ribbed corduroy overalls, waffle-knit sweaters & thermal layers.',
    image: '/images/season-autumn.jpg',
    themeBg: 'linear-gradient(135deg, #ffedd5 0%, #fff7ed 100%)',
    badgeText: 'Autumn Harvest Wear'
  },
  spring: {
    title: 'Spring Collection 🌸',
    subtitle: 'Fresh styles for brighter days! Delicate pastel floral frocks, soft cardigans & daisy-embroidered dresses.',
    image: '/images/season-spring.jpg',
    themeBg: 'linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)',
    badgeText: 'Spring Bloom Edition'
  }
};

export default function SeasonPage({ onAddToCart }) {
  const { seasonName } = useParams();
  const currentSeasonKey = (seasonName || 'winter').toLowerCase();
  const meta = SEASON_META[currentSeasonKey] || SEASON_META.winter;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${meta.title} - Kidoz Kids Fashion`;
  }, [currentSeasonKey, meta]);

  const seasonalProducts = PRODUCTS.filter(
    (p) => p.season === currentSeasonKey || p.category === currentSeasonKey
  );

  return (
    <div>
      {/* Dynamic Seasonal Banner */}
      <section className="season-hero-banner" style={{ background: meta.themeBg, padding: '40px 0 50px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="season-hero-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <i className="fas fa-sparkles" style={{ color: 'var(--primary)' }}></i> {meta.badgeText}
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '12px' }}>{meta.title}</h1>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, maxWidth: '580px', marginBottom: '20px' }}>
              {meta.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="season-pill"><i className="fas fa-shield-alt" style={{ color: '#10b981' }}></i> 100% Skin Safe Cotton</span>
              <span className="season-pill"><i className="fas fa-truck-fast" style={{ color: '#3b82f6' }}></i> 24-Hr Pan-India Dispatch</span>
              <span className="season-pill"><i className="fab fa-whatsapp" style={{ color: '#25d366' }}></i> Direct WhatsApp Order</span>
            </div>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '4px solid #fff', maxHeight: '320px' }}>
            <img src={meta.image} alt={meta.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Season Quick Tabs Navigation */}
      <div style={{ background: '#fff', padding: '16px 0', borderBottom: '1px solid var(--border-light)', position: 'sticky', top: '70px', zIndex: 30, boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { id: 'winter', label: '❄️ Winter' },
              { id: 'summer', label: '☀️ Summer' },
              { id: 'autumn', label: '🍂 Autumn' },
              { id: 'spring', label: '🌸 Spring' }
            ].map((tab) => (
              <Link
                key={tab.id}
                to={`/season/${tab.id}`}
                className={`season-tab-link ${currentSeasonKey === tab.id ? 'active' : ''}`}
                style={{
                  padding: '8px 18px',
                  borderRadius: '30px',
                  border: '1.5px solid #e2e8f0',
                  background: currentSeasonKey === tab.id ? 'var(--primary)' : '#fff',
                  color: currentSeasonKey === tab.id ? '#fff' : '#475569',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#64748b' }}>
            Showing {seasonalProducts.length} Exclusive Outfits
          </span>
        </div>
      </div>

      {/* Seasonal Products Grid */}
      <main style={{ padding: '40px 0 80px', background: '#f8fafc', minHeight: '60vh' }}>
        <div className="container">
          <div className="product-grid">
            {seasonalProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
