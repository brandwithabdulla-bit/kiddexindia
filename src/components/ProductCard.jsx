import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        {product.images && product.images[0] ? (
          <img src={product.images[0]} alt={product.name} className="product-image-real" />
        ) : (
          <div className="product-image-placeholder">
            <span style={{color: '#ccc'}}>No Image</span>
          </div>
        )}
        <div className="product-badges">
          <span className="badge age-badge">{product.ageGroup} YEARS</span>
          {product.discountPercentage > 0 && (
            <span className="badge discount-badge">{product.discountPercentage}% OFF</span>
          )}
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-benefit">{product.shortDescription}</p>
        
        <div className="product-price-row">
          <div className="price-group">
            <span className="price">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="original-price">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
        
        <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
