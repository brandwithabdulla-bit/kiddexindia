import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeAge, setActiveAge] = useState('All');
  
  const location = useLocation();

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const ages = ['All', ...new Set(products.map(p => p.ageGroup))];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const ageParam = params.get('age');
    
    if (categoryParam) setActiveCategory(categoryParam);
    if (ageParam) setActiveAge(ageParam);
  }, [location]);

  useEffect(() => {
    let result = products;
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (activeAge !== 'All') {
      result = result.filter(p => p.ageGroup === activeAge);
    }
    
    setFilteredProducts(result);
  }, [activeCategory, activeAge]);

  return (
    <div className="shop-page container section page-transition">
      <div className="shop-layout">
        {/* Desktop Sidebar Filters */}
        <aside className="shop-sidebar">
          
          {(activeCategory !== 'All' || activeAge !== 'All') && (
            <div className="clear-filters-mobile mobile-only" style={{ marginBottom: '16px' }}>
              <button 
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '8px', fontSize: '14px' }}
                onClick={() => { setActiveCategory('All'); setActiveAge('All'); }}
              >
                Clear Filters
              </button>
            </div>
          )}

          <div className="filter-group">
            <h3 className="desktop-only">Categories</h3>
            
            {/* Desktop View */}
            <ul className="filter-list filter-pills desktop-only">
              {categories.map((cat, idx) => (
                <li 
                  key={idx} 
                  className={activeCategory === cat ? 'active' : ''}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>

            {/* Mobile View */}
            <div className="mobile-only filter-select-wrapper">
              <label>Categories</label>
              <select 
                value={activeCategory} 
                onChange={(e) => setActiveCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat === 'All' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="filter-group">
            <h3 className="desktop-only">Age Group</h3>
            
            {/* Desktop View */}
            <ul className="filter-list filter-pills desktop-only">
              {ages.map((age, idx) => (
                <li 
                  key={idx} 
                  className={activeAge === age ? 'active' : ''}
                  onClick={() => setActiveAge(age)}
                >
                  {age === 'All' ? 'All Ages' : `${age} YRS`}
                </li>
              ))}
            </ul>

            {/* Mobile View */}
            <div className="mobile-only filter-select-wrapper">
              <label>Age Group</label>
              <select 
                value={activeAge} 
                onChange={(e) => setActiveAge(e.target.value)}
                className="filter-select"
              >
                {ages.map((age, idx) => (
                  <option key={idx} value={age}>
                    {age === 'All' ? 'All Ages' : `${age} Years`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="shop-content">
          <div className="shop-header">
            <h1 className="shop-title">All Toys</h1>
            <p className="shop-results-count">{filteredProducts.length} products found</p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No products found</h3>
              <p>Try adjusting your filters.</p>
              <button className="btn btn-secondary mt-30" onClick={() => { setActiveCategory('All'); setActiveAge('All'); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
