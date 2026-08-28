import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page page-transition">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content stagger-1">
            <h1 className="hero-title">Helping Little Minds Grow,<br/><span className="text-highlight">One Playful Moment at a Time.</span></h1>
            <p className="hero-subtitle">
              At Kiddex India, we believe that childhood should be filled with discovery, creativity, and joy. In a world increasingly dominated by screens, we're on a mission to bring back meaningful, hands-on play.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="section bg-white">
        <div className="container">
          <div className="philosophy-cards-wrapper stagger-2">
            <div className="philosophy-card">
              <div className="card-image-wrapper">
                 <img src="/product6.jpg" alt="Learn" />
              </div>
              <div className="card-content">
                <h3>Learn</h3>
                <p>Every toy is designed to naturally enhance cognitive skills, problem-solving, and logical thinking without feeling like a chore.</p>
              </div>
            </div>
            
            <div className="philosophy-card">
              <div className="card-image-wrapper">
                 <img src="/product1.jpg" alt="Create" />
              </div>
              <div className="card-content">
                <h3>Create</h3>
                <p>We foster imagination through open-ended play. Let your child build, draw, and imagine entirely new worlds.</p>
              </div>
            </div>

            <div className="philosophy-card">
              <div className="card-image-wrapper">
                 <img src="/product8.jpg" alt="Explore" />
              </div>
              <div className="card-content">
                <h3>Explore</h3>
                <p>Physical toys encourage children to interact with the real world, developing fine motor skills and spatial awareness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center stagger-3">
        <div className="container" style={{maxWidth: '800px'}}>
          <h2 className="section-title">Join the Screen-Free Movement</h2>
          <p style={{fontSize: '18px', color: 'var(--color-text-muted)', marginBottom: '32px'}}>
            Give parents the peace of mind that comes from knowing their kids are engaged in activities that build real-world skills.
          </p>
          <button className="btn btn-primary btn-large" onClick={() => navigate('/shop')}>
            Explore Our Collection
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
