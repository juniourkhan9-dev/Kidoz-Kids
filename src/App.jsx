import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SeasonPage from './pages/SeasonPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { STORE_CONFIG } from './products';
import './style.css';

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kidoz_react_cart')) || [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product, size) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.size === size);
      let updated;
      if (existing) {
        updated = prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updated = [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size: size || product.sizes[0],
            quantity: 1
          }
        ];
      }
      localStorage.setItem('kidoz_react_cart', JSON.stringify(updated));
      return updated;
    });
    setIsCartOpen(true);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    let list = cart
      .map(
        (i, idx) =>
          `${idx + 1}. *${i.name}* (Size: ${i.size}) x${i.quantity} = ₹${i.price * i.quantity}`
      )
      .join('\n');
    const msg = `Hi Kidoz Kids Fashion! I want to confirm my bag order:\n\n${list}\n\n*Total Estimated Amount: ₹${cartSubtotal}*\n\nPlease confirm order dispatch!`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <BrowserRouter>
      <div className="app-root">
        <Header cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />

        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/season/:seasonName" element={<SeasonPage onAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
        </Routes>

        <Footer />

        {/* Global Shopping Cart Drawer */}
        {isCartOpen && (
          <>
            <div className="cart-drawer-backdrop active" onClick={() => setIsCartOpen(false)}></div>
            <aside className="cart-drawer open" style={{ right: 0 }}>
              <div className="cart-drawer-header">
                <div className="cart-header-title">
                  <i className="fas fa-shopping-bag"></i>
                  <span>My Bag ({totalCartCount})</span>
                </div>
                <button className="close-drawer-btn" onClick={() => setIsCartOpen(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="cart-items-container" style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
                {cart.length === 0 ? (
                  <p style={{ textAlign: 'center', color: '#64748b', marginTop: '40px' }}>Your bag is empty!</p>
                ) : (
                  cart.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '14px', marginBottom: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
                      <img src={item.image} alt={item.name} style={{ width: '60px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} />
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{item.name}</h4>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Size: {item.size} | Qty: {item.quantity}</span>
                        <div style={{ fontWeight: 700, marginTop: '4px' }}>₹{item.price * item.quantity}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="cart-drawer-footer">
                  <div className="cart-summary-total">
                    <span>Total: ₹{cartSubtotal}</span>
                  </div>
                  <button className="btn btn-whatsapp-checkout" onClick={handleWhatsAppCheckout} style={{ width: '100%', marginTop: '12px' }}>
                    <i className="fab fa-whatsapp"></i> Confirm Order on WhatsApp
                  </button>
                </div>
              )}
            </aside>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
