import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_CONFIG } from '../products';

export default function ProductCard({ product, onAddToCart }) {
  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const message = `Hi Kidoz Kids Fashion! I want to order this outfit:

*${product.name}*
Price: ${STORE_CONFIG.currency}${product.price} (Original: ${STORE_CONFIG.currency}${product.originalPrice})
Tag: ${product.tag}
Size: ${product.sizes[0]}
Link: ${window.location.origin}/product/${product.id}

Please confirm availability and how I can pay!`;
    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="product-card">
      <div className="product-media">
        <span className="product-badge">{product.tag}</span>
        <Link to={`/product/${product.id}`} style={{ display: 'block', textDecoration: 'none' }}>
          <img src={product.images[0]} alt={product.name} className="product-img main-img" loading="lazy" />
          {product.images[1] && (
            <img src={product.images[1]} alt={product.name} className="product-img hover-img" loading="lazy" />
          )}
        </Link>
        <div className="product-overlay-actions">
          <Link to={`/product/${product.id}`} className="quick-view-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <i className="fas fa-eye"></i> View Details
          </Link>
        </div>
      </div>

      <div className="product-info">
        <div className="product-rating">
          <div className="stars">★★★★★</div>
          <span className="rating-number">{product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>

        <h3 className="product-title" title={product.name}>
          <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {product.name}
          </Link>
        </h3>

        <div className="product-size-preview">
          <span className="size-label">Sizes:</span>
          <div className="size-chips">
            {product.sizes.slice(0, 4).map((s, idx) => (
              <span key={idx} className="size-chip">{s}</span>
            ))}
          </div>
        </div>

        <div className="product-pricing">
          <span className="current-price">{STORE_CONFIG.currency}{product.price}</span>
          <span className="original-price">{STORE_CONFIG.currency}{product.originalPrice}</span>
          <span className="discount-pill">{product.discount}</span>
        </div>

        <div className="card-action-buttons">
          <button className="btn btn-primary btn-add-cart" onClick={() => onAddToCart(product, product.sizes[0])}>
            <i className="fas fa-shopping-bag"></i> Add to Cart
          </button>
          <button className="btn btn-whatsapp-direct" onClick={handleWhatsAppOrder} title="Order instantly on WhatsApp">
            <i className="fab fa-whatsapp"></i> Order
          </button>
        </div>
      </div>
    </div>
  );
}
