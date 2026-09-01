import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  // Show up to 6 featured products
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);

  return (
    <div className="home-page page-transition">
      {/* Hero Section */}
      <section className="hero-section stagger-1">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">Award-Winning Toys</div>
            <h1 className="hero-title">
              Less Screen.<br/>
              <span className="text-highlight">More Play.</span><br/>
              More Learning.
            </h1>
            <p className="hero-subtitle">
              Expertly crafted toys that help children learn, create, and explore without the distraction of digital screens. Give them the gift of real, meaningful play.
            </p>
            <div className="hero-cta-group">
              <button className="btn btn-primary btn-large" onClick={() => navigate('/shop')}>
                Shop Collection
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
             <img src="/product1.jpg" alt="Children playing with educational toys" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-white stagger-2">
        <div className="container">
          <div className="section-header">
            <div className="section-header-text">
              <h2 className="section-title text-left">Our Bestsellers</h2>
              <p className="section-subtitle text-left">Toys that parents trust and kids genuinely love.</p>
            </div>
            <div className="section-header-action">
              <button className="btn btn-secondary" onClick={() => navigate('/shop')}>
                View All Toys
              </button>
            </div>
          </div>
          
          <div className="product-grid mt-40">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button className="btn btn-secondary btn-large" onClick={() => navigate('/shop')} style={{ padding: '12px 32px' }}>
              More Products
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section stagger-3">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <CheckCircle size={40} strokeWidth={1.5} color="var(--color-primary)" />
              </div>
              <h3>Safe & Durable</h3>
              <p>Made with high-quality, non-toxic materials built to survive generations of play.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <CheckCircle size={40} strokeWidth={1.5} color="var(--color-primary)" />
              </div>
              <h3>Cognitive Growth</h3>
              <p>Designed by experts to naturally enhance logical thinking and problem-solving skills.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <CheckCircle size={40} strokeWidth={1.5} color="var(--color-primary)" />
              </div>
              <h3>100% Screen-Free</h3>
              <p>We believe in the power of physical play to foster deeper focus and creativity.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <CheckCircle size={40} strokeWidth={1.5} color="var(--color-primary)" />
              </div>
              <h3>Sparks Joy</h3>
              <p>Vibrant, engaging designs that instantly capture your child's imagination.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Philosophy */}
      <section className="section philosophy-section">
        <div className="container philosophy-container">
          <div className="philosophy-image-wrapper">
             <img src="/product3.jpg" alt="Family playing together" className="philosophy-image" />
          </div>
          <div className="philosophy-content">
            <h2 className="section-title text-left">Why Kiddex?</h2>
            <p className="philosophy-text">
              We started Kiddex because we noticed a growing problem: childhood was moving behind glass screens. We missed the sound of wooden blocks falling, the focus of solving a physical puzzle, and the joy of shared family board games.
            </p>
            <p className="philosophy-text">
              Every toy we offer is carefully selected to ensure it provides immense educational value without feeling like "homework". We make learning invisible, hiding it behind hours of pure fun.
            </p>
            <button className="btn btn-primary mt-30" onClick={() => navigate('/about')}>
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Parent CTA Section */}
      <section className="section">
        <div className="container">
          <div className="parent-cta-box">
            <h2 className="parent-cta-title">Ready to bring back real play?</h2>
            <p style={{fontSize: '20px', marginBottom: '32px', opacity: 0.9}}>Join thousands of parents choosing Kiddex for smarter, screen-free playtime.</p>
            <button className="btn btn-primary btn-large bg-white text-primary" onClick={() => navigate('/shop')} style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>
              Explore the Shop
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
