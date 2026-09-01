import React from 'react';

const Contact = () => {
  return (
    <div className="container section page-transition">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 className="section-title">Get in Touch</h1>
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '40px' }}>
          Have questions about our products or your order? We're here to help!
        </p>
        
        <div style={{ backgroundColor: 'var(--color-surface)', padding: '32px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)' }}>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '8px' }}>WhatsApp (Fastest)</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>+91 91802 33454</p>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '8px' }}>Email</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>hello@kiddex.in</p>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '8px' }}>Business Hours</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Monday - Saturday: 10:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
