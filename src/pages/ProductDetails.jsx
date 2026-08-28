import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import { Check, Package, MessageCircle } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container section text-center page-transition">
        <h2>Product not found</h2>
        <button className="btn btn-primary mt-30" onClick={() => navigate('/shop')}>
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="product-details-page container section page-transition">
      <div className="product-details-grid">
        
        {/* Images */}
        <div className="product-gallery">
          {product.images && product.images[0] ? (
             <img src={product.images[0]} alt={product.name} className="product-main-image" />
          ) : (
            <div className="main-image-placeholder">
               <span>No Image</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="product-info-panel">
          <div className="product-breadcrumbs">
            <span onClick={() => navigate('/')}>Home</span> / 
            <span onClick={() => navigate('/shop')}>Shop</span> / 
            <span className="current">{product.name}</span>
          </div>

          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-badges-row">
            <span className="badge age-badge">{product.ageGroup} YEARS</span>
            <span className="badge tag-badge">{product.category}</span>
          </div>

          <div className="product-price-large">
            <span className="price">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="original-price">₹{product.originalPrice}</span>
            )}
            {product.discountPercentage > 0 && (
              <span className="discount-tag">Save {product.discountPercentage}%</span>
            )}
          </div>

          <p className="product-description-short">{product.fullDescription}</p>

          <div className="product-skills-section">
            <h3>Skills They Build</h3>
            <div className="skills-list">
              {product.skills.map((skill, idx) => (
                <span key={idx} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>

          <div className="add-to-cart-section">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            
            <div className="action-buttons">
              <button className="btn btn-secondary flex-1" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn btn-primary flex-1" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
            
            <button className="btn btn-outline" style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', borderColor: '#25D366', color: '#25D366'}} onClick={() => window.open(`https://wa.me/919180233454?text=Hi, I have a question about ${product.name}`, '_blank')}>
              <MessageCircle size={20} />
              Have a question? Ask on WhatsApp
            </button>
          </div>

          <div className="product-trust-box">
            <p>🚚 Free shipping on orders over ₹999</p>
            <p>📦 7-day easy returns</p>
            <p>📵 100% Screen-Free Guarantee</p>
          </div>
        </div>
      </div>

      {/* Tabs / More Details */}
      <div className="product-extra-details">
        <div className="detail-section">
          <h2>Why Kids Love It</h2>
          <ul className="benefits-list">
            {product.benefits.map((benefit, idx) => (
              <li key={idx}><Check size={18} color="#25D366" style={{marginRight: '8px', flexShrink: 0}}/> {benefit}</li>
            ))}
          </ul>
        </div>
        <div className="detail-section">
          <h2>What's Inside</h2>
          <ul className="includes-list">
            {product.includes.map((item, idx) => (
              <li key={idx}><Package size={18} color="var(--color-primary)" style={{marginRight: '8px', flexShrink: 0}}/> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
