'use client'
export default function AboutPage() {
  return (
    <div className="about-page container-fluid px-0">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="dark-overlay">
          <div className="container text-center text-white py-5">
            <h1 className="display-4 fw-bold mb-4">Our Travel Story</h1>
            <p className="lead">
              We don't just plan trips - we craft unforgettable adventures that connect you with the world's beauty
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container py-5 my-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4 section-title">Who We Are</h2>
            <p className="lead">
              We're passionate explorers, local guides, and travel experts dedicated to transformative journeys.
            </p>
            <p>
              Founded in 2010, our team combines deep local knowledge with a genuine love for adventure. We believe travel should enrich both the visitor and the visited, creating meaningful connections with people and places.
            </p>
          </div>
          <div className="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" 
              alt="Our team on a hike" 
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title">What We Do</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">
                    <i className="bi bi-signpost-split"></i>
                  </div>
                  <h3 className="card-title">Adventure Treks</h3>
                  <p className="card-text">
                    Expertly guided hiking experiences through breathtaking landscapes with our local guides.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">
                    <i className="bi bi-bus-front"></i>
                  </div>
                  <h3 className="card-title">Scenic Bus Tours</h3>
                  <p className="card-text">
                    Comfortable, well-planned journeys that let you relax while we show you the sights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">
                    <i className="bi bi-suitcase-lg"></i>
                  </div>
                  <h3 className="card-title">Curated Packages</h3>
                  <p className="card-text">
                    Tailored experiences combining adventure, culture, and relaxation for your perfect getaway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="container py-5 my-4">
        <h2 className="text-center fw-bold mb-5 section-title">Our Values</h2>
        <div className="row g-4">
          <div className="col-sm-6 col-lg-3">
            <div className="value-card text-center p-4 h-100">
              <div className="value-icon mb-3">🛡️</div>
              <h3>Safety First</h3>
              <p>Your well-being is our top priority on every adventure</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="value-card text-center p-4 h-100">
              <div className="value-icon mb-3">🧭</div>
              <h3>Local Expertise</h3>
              <p>Authentic experiences guided by those who know best</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="value-card text-center p-4 h-100">
              <div className="value-icon mb-3">🌱</div>
              <h3>Sustainable Travel</h3>
              <p>We protect and respect the places we visit</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="value-card text-center p-4 h-100">
              <div className="value-icon mb-3">✨</div>
              <h3>Unforgettable Moments</h3>
              <p>Creating memories that will last a lifetime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}