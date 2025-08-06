import React from 'react';

function WhatWeDo() {
  return (
    <section className="what-we-do-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-4 fw-bold mb-3">
            What We Do ?
          </h2>
          <p className="section-subtitle lead text-muted">
            We specialize in creating unforgettable travel experiences for backpackers and adventure seekers.
          </p>
        </div>

        <div className="row g-4">
          {/* Adventure Tours */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card card h-100 border-0 shadow-sm overflow-hidden hover-effect">
              <div className="card-img-top overflow-hidden">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/uk-020952730-16x9_0.jpg?VersionId=rh1.NRcsBfEvtK7FjaKTS2VswbUwHyTU&size=690:388" alt="Adventure Tours" className="img-fluid zoom-img w-100"  style={{height:'36vh'}} />
                <div className="card-icon-overlay">
                  {/* <i className="fas fa-mountain"></i> */}
                </div>
              </div>
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-3">Adventure Tours</h3>
                <p className="card-text text-muted mb-4">
                  Thrilling treks, mountain expeditions, and outdoor activities for adrenaline junkies.
                </p>
                <a href="#" className="btn btn-sm  stretched-link">
                  Explore Adventures <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Cultural Experiences */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card card h-100 border-0 shadow-sm overflow-hidden hover-effect">
              <div className="card-img-top overflow-hidden">
                <img src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/j51s57ewu3s8hzy6em94" alt="Cultural Experiences" className="img-fluid zoom-img"  style={{height:'36vh'}} />
                <div className="card-icon-overlay">
                  {/* <i className="fas fa-landmark"></i> */}
                </div>
              </div>
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-3">Cultural Experiences</h3>
                <p className="card-text text-muted mb-4">
                  Authentic local interactions, village stays, and traditional cuisine experiences.
                </p>
                <a href="#" className="btn btn-sm stretched-link">
                  Discover Cultures <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Photography Tours */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card card h-100 border-0 shadow-sm overflow-hidden hover-effect">
              <div className="card-img-top overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X1_2wQcn9TigBbbW0yB6Y3YuSvfCyb7sPQ&s" alt="Photography Tours" className="img-fluid zoom-img w-100" style={{height:'36vh'}} />
                <div className="card-icon-overlay">
                  {/* <i className="fas fa-camera-retro"></i> */}
                </div>
              </div>
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-3">Photography Tours</h3>
                <p className="card-text text-muted mb-4">
                  Guided tours to the most photogenic locations with professional photography tips.
                </p>
                <a href="#" className="btn btn-sm stretched-link">
                  Capture Moments <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Beach Getaways */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card card h-100 border-0 shadow-sm overflow-hidden hover-effect">
              <div className="card-img-top overflow-hidden">
                <img src="https://wpblogassets.paytm.com/travelblog/uploads/2024/11/Beaches-in-Kerala-scaled.jpg" alt="Beach Getaways" className="img-fluid zoom-img"  style={{height:'36vh'}} />
                <div className="card-icon-overlay">
                  {/* <i className="fas fa-umbrella-beach"></i> */}
                </div>
              </div>
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-3">Beach Getaways</h3>
                <p className="card-text text-muted mb-4">
                  Relaxing coastal retreats with water sports and beach camping experiences.
                </p>
                <a href="#" className="btn btn-sm stretched-link">
                  Find Beaches <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Camping Expeditions */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card card h-100 border-0 shadow-sm overflow-hidden hover-effect">
              <div className="card-img-top overflow-hidden">
                <img src="https://vl-prod-static.b-cdn.net/system/images/000/187/481/558558da58ca11e40172165086011386/original/prabalmachi-camping-4.jpeg?1597990448" alt="Camping Expeditions" className="img-fluid zoom-img w-100"  style={{height:'36vh'}} />
                <div className="card-icon-overlay">
                  {/* <i className="fas fa-campground"></i> */}
                </div>
              </div>
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-3">Camping Expeditions</h3>
                <p className="card-text text-muted mb-4">
                  Overnight wilderness camping under the stars with all necessary amenities.
                </p>
                <a href="#" className="btn btn-sm stretched-link">
                  Book Camping <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card card h-100 border-0 shadow-sm overflow-hidden hover-effect">
              <div className="card-img-top overflow-hidden">
                <img src="https://thumbs.dreamstime.com/b/special-offer-37086976.jpg" alt="Special Offers" className="img-fluid zoom-img"  style={{height:'36vh'}} />
                <div className="card-icon-overlay">
                  {/* <i className="fas fa-tags"></i> */}
                </div>
              </div>
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-3">Special Offers</h3>
                <p className="card-text text-muted mb-4">
                  Exclusive deals and discounts for group bookings and off-season travel.
                </p>
                <a href="#" className="btn btn-sm stretched-link ">
                  View Offers <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 pt-3">
          <button className="btn btn-outline-dark btn-lg px-3 py-2 cta-button fw-bold fs-5">
            <i className="fas fa-suitcase-rolling me-2"></i> Explore All Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;