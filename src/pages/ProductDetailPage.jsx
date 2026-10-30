import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, STORE_CONFIG } from '../products';

export default function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id)) || PRODUCTS[0];

  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedImg(product.images[0]);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
    document.title = `${product.name} | Kidoz Kids Fashion`;
  }, [product]);

  // Direct WhatsApp Buy
  const handleBuyOnWhatsApp = () => {
    const message = `Hi Kidoz Kids Fashion! I want to order this product from your website:

*${product.name}*
Size: *${selectedSize}*
Color: *${selectedColor}*
Price: ${STORE_CONFIG.currency}${product.price} (Original: ${STORE_CONFIG.currency}${product.originalPrice})
Link: ${window.location.href}

Please confirm my order and share payment details!`;

    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const highlights = product.highlights || [
    '100% Breathable soft pure cotton blend',
    'Gentle against sensitive kid skin with zero-itch lining',
    'Easy care & durable double-stitched seams',
    'Pan-India Fast Dispatch within 24 hours'
  ];

  const reviews = product.reviewsList || [
    { name: 'Pooja Sharma', city: 'Delhi', rating: 5, date: '2 days ago', comment: 'Fabric quality is unbelievably soft! My kid wore it all day comfortably.', verified: true },
    { name: 'Megha Singhal', city: 'Mumbai', rating: 5, date: '1 week ago', comment: 'Exact same as pictured! The colors and stitching look superb.', verified: true },
    { name: 'Ananya Iyer', city: 'Bengaluru', rating: 4.8, date: '2 weeks ago', comment: 'Fast dispatch and great customer service on WhatsApp.', verified: true }
  ];

  return (
    <div style={{ background: '#f8fafc', padding: '30px 0 60px' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Breadcrumb */}
        <div style={{ padding: '10px 0 20px', fontSize: '0.88rem', color: '#64748b' }}>
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          {product.season && (
            <>
              <Link to={`/season/${product.season}`} style={{ color: '#64748b', textDecoration: 'none', textTransform: 'capitalize' }}>
                {product.season}
              </Link>
              <span style={{ margin: '0 8px' }}>/</span>
            </>
          )}
          <span style={{ color: '#1e293b', fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* Flipkart Style Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '500px 1fr', gap: '36px', background: '#fff', borderRadius: '16px', padding: '30px', border: '1px solid var(--border-light)' }}>
          
          {/* Left: Gallery */}
          <div style={{ display: 'flex', gap: '16px', height: 'fit-content' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '76px' }}>
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  style={{
                    width: '76px',
                    height: '88px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: selectedImg === img ? '2px solid var(--primary)' : '2px solid transparent',
                    cursor: 'pointer',
                    background: '#f1f5f9'
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', background: '#f8fafc', minHeight: '480px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '14px', left: '14px', background: '#ff4757', color: '#fff', padding: '4px 12px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 700 }}>
                {product.tag}
              </span>
              <img src={selectedImg} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Right: Product Details */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#1e293b', marginBottom: '10px' }}>
              {product.name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <span style={{ background: '#388e3c', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 700 }}>
                {product.rating} ★
              </span>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{product.reviews} Ratings & Verified Reviews</span>
            </div>

            {/* Price Box */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', padding: '14px 0', borderTop: '1px dashed #e2e8f0', borderBottom: '1px dashed #e2e8f0', marginBottom: '20px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b' }}>{STORE_CONFIG.currency}{product.price}</span>
              <span style={{ fontSize: '1.2rem', color: '#94a3b8', textDecoration: 'line-through' }}>{STORE_CONFIG.currency}{product.originalPrice}</span>
              <span style={{ color: '#388e3c', fontSize: '1.15rem', fontWeight: 700 }}>{product.discount}</span>
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
                Select Size: <strong style={{ color: 'var(--primary)' }}>{selectedSize}</strong>
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: selectedSize === s ? '2px solid var(--primary)' : '1.5px solid #cbd5e1',
                      background: selectedSize === s ? 'rgba(255, 77, 109, 0.08)' : '#fff',
                      color: selectedSize === s ? 'var(--primary)' : '#334155',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
                Color: <strong>{selectedColor}</strong>
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.colors.map((c) => (
                  <span
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      border: '1.5px solid #cbd5e1',
                      background: selectedColor === c ? '#1e293b' : '#fff',
                      color: selectedColor === c ? '#fff' : '#334155',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              <button
                className="btn-pdp-cart"
                onClick={() => onAddToCart(product, selectedSize)}
                style={{ background: '#ff9f00', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}
              >
                <i className="fas fa-shopping-bag"></i> Add to Cart
              </button>

              <button
                className="btn-pdp-whatsapp"
                onClick={handleBuyOnWhatsApp}
                style={{ background: '#25D366', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}
              >
                <i className="fab fa-whatsapp"></i> Buy on WhatsApp
              </button>
            </div>

            {/* Product Highlights */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>Product Highlights</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {highlights.map((h, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#388e3c' }}></i> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fabric */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>Fabric & Care</h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{product.fabric}</p>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '6px', lineHeight: 1.6 }}>{product.description}</p>
            </div>

          </div>

        </div>

        {/* Customer Reviews Section */}
        <section style={{ marginTop: '36px', background: '#fff', borderRadius: '16px', padding: '30px', border: '1px solid var(--border-light)' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1e293b', marginBottom: '18px' }}>
            Ratings & Customer Reviews ({reviews.length})
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
            {reviews.map((r, idx) => (
              <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '0.92rem', color: '#1e293b' }}>{r.name} ({r.city})</strong>
                  <span style={{ background: '#388e3c', color: '#fff', fontSize: '0.78rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                    {r.rating} ★
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>"{r.comment}"</p>
                <span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block', marginTop: '10px' }}>Reviewed {r.date}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
