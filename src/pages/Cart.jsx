import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container section text-center empty-cart page-transition">
        <h2>Your cart is empty</h2>
        <p className="mt-30">Looks like you haven't added any toys yet.</p>
        <button className="btn btn-primary mt-30" onClick={() => navigate('/shop')}>
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container section cart-page">
      <h1 className="section-title text-left">Your Cart ({getCartCount()} items)</h1>
      
      <div className="cart-layout">
        <div className="cart-items-container">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                {item.images && item.images[0] ? (
                  <img src={item.images[0]} alt={item.name} className="cart-item-img-real" />
                ) : (
                  <span style={{fontSize: '12px', color: '#ccc'}}>No Image</span>
                )}
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">₹{item.price}</p>
                <div className="cart-item-actions">
                  <div className="cart-quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={18} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
              <div className="cart-item-total">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{getCartTotal()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{getCartTotal() > 999 ? 'Free' : '₹50'}</span>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span>₹{getCartTotal() + (getCartTotal() > 999 ? 0 : 50)}</span>
          </div>
          <button className="btn btn-primary checkout-btn" onClick={() => navigate('/checkout')}>
            Proceed to Order
          </button>
          <button className="btn btn-secondary continue-shopping-btn" onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
