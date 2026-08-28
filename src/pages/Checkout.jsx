import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    house: '',
    street: '',
    city: '',
    district: '',
    state: '',
    pinCode: '',
    landmark: ''
  });

  // Redirect if empty
  if (cartItems.length === 0) {
    return (
      <div className="container section text-center page-transition">
        <h2>Your cart is empty</h2>
        <button className="btn btn-primary mt-30" onClick={() => navigate('/shop')}>Go to Shop</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    let message = `Hello Kiddex India! 👋\n\nI would like to place an order.\n\n`;
    message += `ORDER DETAILS\n----------------\n`;
    
    cartItems.forEach(item => {
      message += `Product: ${item.name}\nQuantity: ${item.quantity}\nPrice: ₹${item.price}\n\n`;
    });
    
    const shipping = getCartTotal() > 999 ? 0 : 50;
    const total = getCartTotal() + shipping;
    
    message += `Subtotal: ₹${getCartTotal()}\n`;
    message += `Shipping: ₹${shipping}\n`;
    message += `*Total: ₹${total}*\n\n`;
    
    message += `CUSTOMER DETAILS\n----------------\n`;
    message += `Name: ${formData.fullName}\n`;
    message += `Phone: ${formData.phone}\n\n`;
    
    message += `Address:\n${formData.house}, ${formData.street}\n`;
    if (formData.landmark) message += `Landmark: ${formData.landmark}\n`;
    message += `City: ${formData.city}\n`;
    message += `District: ${formData.district}\n`;
    message += `State: ${formData.state}\n`;
    message += `PIN: ${formData.pinCode}\n\n`;
    
    message += `Please confirm my order. Thank you! 😊`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "919180233454"; // Provided WhatsApp number
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Optional: Clear cart after order initiated (or could leave it up to user)
    // clearCart();
  };

  return (
    <div className="container section checkout-page">
      <h1 className="section-title text-left">Checkout Details</h1>
      
      <div className="checkout-layout">
        <div className="checkout-form-container">
          <h2>Delivery Information</h2>
          <form onSubmit={handleWhatsAppOrder} className="checkout-form">
            
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} />
              </div>
            </div>
            
            <div className="form-group">
              <label>House / Building *</label>
              <input type="text" name="house" required value={formData.house} onChange={handleInputChange} />
            </div>
            
            <div className="form-group">
              <label>Street / Locality *</label>
              <input type="text" name="street" required value={formData.street} onChange={handleInputChange} />
            </div>
            
            <div className="form-group">
              <label>Landmark (Optional)</label>
              <input type="text" name="landmark" value={formData.landmark} onChange={handleInputChange} />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input type="text" name="city" required value={formData.city} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>District *</label>
                <input type="text" name="district" required value={formData.district} onChange={handleInputChange} />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>State *</label>
                <input type="text" name="state" required value={formData.state} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>PIN Code *</label>
                <input type="text" name="pinCode" required value={formData.pinCode} onChange={handleInputChange} />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary checkout-submit-btn">
              ORDER VIA WHATSAPP
            </button>
          </form>
        </div>

        <div className="checkout-summary-container">
          <h2>Order Summary</h2>
          <div className="checkout-items">
            {cartItems.map(item => (
              <div key={item.id} className="checkout-item">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          
          <div className="checkout-totals">
            <div className="checkout-total-row">
              <span>Subtotal</span>
              <span>₹{getCartTotal()}</span>
            </div>
            <div className="checkout-total-row">
              <span>Shipping</span>
              <span>{getCartTotal() > 999 ? 'Free' : '₹50'}</span>
            </div>
            <div className="checkout-total-row final-total">
              <span>Total</span>
              <span>₹{getCartTotal() + (getCartTotal() > 999 ? 0 : 50)}</span>
            </div>
          </div>
          
          <div className="checkout-trust">
            <p>🔒 Secure Customer Information</p>
            <p>💬 Easy WhatsApp Ordering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
