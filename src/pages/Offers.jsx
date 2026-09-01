import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ProductsContext } from '../context/ProductsContext';

const Offers = () => {
  const navigate = useNavigate();
  // Filter products that have a discount
  const discountedProducts = products.filter(p => p.discountPercentage > 0);

  return (
    <div className="container section page-transition">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="section-title">Combo Offers</h1>
        <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Grab these premium educational toys at a special price. Limited time only!
        </p>
      </div>

      {discountedProducts.length > 0 ? (
        <div className="product-grid mt-40">
          {discountedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center" style={{ padding: '80px 20px', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)' }}>
          <h3>No Active Offers</h3>
          <p style={{ color: 'var(--color-text-muted)' }}>Check back later for exclusive deals!</p>
          <button className="btn btn-primary mt-30" onClick={() => navigate('/shop')}>
            Browse All Toys
          </button>
        </div>
      )}
    </div>
  );
};

export default Offers;
