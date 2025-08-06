import React from 'react';

function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="container">
        {/* Hero Header */}
        <div className="section-header">
          <span className="subtitle">Our Identity</span>
          <h2>Crafting <span className="highlight">Unforgettable</span> Journeys</h2>
          <p className="lead">
            A collective of global explorers redefining travel through innovation and passion since 2010
          </p>
        </div>

        {/* Story Section */}
        <div className="story-section">
          <div className="story-image-container">
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" 
              alt="Our Team Adventure" 
              className="story-image"
            />
          </div>
          
          <div className="story-content">
            <h3>From Backpackers to Trailblazers</h3>
            <p>
              What began as chance encounters on remote trails evolved into a shared vision. We're not just travel planners - we're experience architects, 
              crafting journeys that transform perspectives and create lifelong memories.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">12+</span>
                <p className="stat-label">Years of Innovation</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <p className="stat-label">Curated Destinations</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">10K+</span>
                <p className="stat-label">Transformed Travelers</p>
              </div>
            </div>
            
            <button className="primary-btn">
              Discover Our Evolution →
            </button>
          </div>
        </div>

        {/* Founders Section */}
        <div className="founders-section">
          <div className="section-header">
            <h3>The Visionaries</h3>
            <p className="lead">
              Meet the unconventional thinkers who turned their wanderlust into a movement
            </p>
          </div>
          
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="Alex Johnson" 
                  className="founder-image"
                />
              </div>
              <div className="founder-info">
                <h4>Alex Johnson</h4>
                <p className="position">CEO & Co-Founder</p>
                <p className="bio">
                  Vertical visionary who sees the world from new perspectives—literally and figuratively.
                </p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            
            <div className="founder-card">
              <div className="founder-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="Maria Garcia" 
                  className="founder-image"
                />
              </div>
              <div className="founder-info">
                <h4>Maria Garcia</h4>
                <p className="position">Head of Operations</p>
                <p className="bio">
                  Cultural bridge-builder ensuring every journey respects and uplifts local communities.
                </p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            
            <div className="founder-card">
              <div className="founder-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Sam Wilson" 
                  className="founder-image"
                />
              </div>
              <div className="founder-info">
                <h4>Sam Wilson</h4>
                <p className="position">Adventure Director</p>
                <p className="bio">
                  Boundary-pusher who crafts experiences that challenge and transform our travelers.
                </p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <div className="section-header">
            <h3>Our Compass</h3>
            <p className="lead">
              The principles that guide every decision we make and every journey we craft
            </p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h4>Sustainable Travel</h4>
              <p>
                We measure success not just by smiles, but by positive impact—on environments, economies, and communities.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h4>Authentic Experiences</h4>
              <p>
                We bypass tourist traps to connect you with the soul of each destination through meaningful local interactions.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Safety First</h4>
              <p>
                Our rigorous vetting process and 24/7 support network ensure peace of mind while you explore.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h3>Ready to Begin Your Journey?</h3>
          <div className="cta-buttons">
            <button className="primary-btn">
              Explore Open Positions
            </button>
            <button className="secondary-btn">
              Connect With Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;