import React from "react";

const PackageDetails = () => {
  return (
    <div className="package-details ">
      {/* Hero Section */}
      <div className="bg-dark text-white py-5">
        <div className="container">
<nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-arrow bg-transparent p-0 m-0">
    <li className="breadcrumb-item">
      <a href="#" className="text-white-50">Home</a>
    </li>
    <li className="breadcrumb-item">
      <a href="#" className="text-white-50">Grand Canyon Tours</a>
    </li>
    <li className="breadcrumb-item active text-white" aria-current="page">
      4-Day Grand Canyon Adventure Tour
    </li>
  </ol>
</nav>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold mb-3">4-Day Grand Canyon Adventure Tour from Las Vegas: South Rim, Hoover Dam</h1>
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                <div className="bg-warning text-white px-3 py-1 rounded d-flex align-items-center">
                  <i className="fas fa-star me-2"></i>
                  <span>4.8</span>
                  <span className="ms-2">(16 reviews)</span>
                </div>
                <div className="badge bg-primary px-3 py-2">
                  <i className="fas fa-tag me-1"></i> Best Seller
                </div>
                <div className="badge bg-success px-3 py-2">
                  20% Off
                </div>
              </div>
              <div className="d-flex flex-wrap gap-4">
                <div>
                  <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                  <span>Departure: Las Vegas</span>
                </div>
                <div>
                  <i className="fas fa-clock me-2 text-primary"></i>
                  <span>Duration: 4 days</span>
                </div>
                <div>
                  <i className="fas fa-calendar-alt me-2 text-primary"></i>
                  <span>Product Code: 4239</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-white text-dark p-4 rounded-3 shadow">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="text-decoration-line-through text-muted me-2">
                     ₹295.68
                    </span>
                    <span className="fw-bold text-danger fs-4">
                     ₹236.54
                    </span>
                  </div>
                  <span className="text-muted small">per person</span>
                </div>
                <button className="btn btn-gradient-primary w-100 mb-3 py-3 fw-bold rounded-pill shadow-sm">
                  <i className="fas fa-shopping-cart me-2"></i> Book Now
                </button>
                <div className="text-center small text-muted">
                  <i className="fas fa-lock me-1"></i> Secure booking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Image Gallery */}
            <div className="mb-5">
              <div className="row g-3">
                <div className="col-md-8">
                  <img 
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/8f/78/23.jpg" 
                    alt="Grand Canyon Tour" 
                    className="img-fluid rounded-3 w-100" 
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column h-100 gap-3">
                    <img 
                      src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/8d/7e.jpg" 
                      alt="Grand Canyon view" 
                      className="img-fluid rounded-3" 
                      style={{ height: "190px", objectFit: "cover" }}
                    />
                    <img 
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/e1/25/91/antelope-canyon.jpg?w=900&h=500&s=1" 
                      alt="Antelope Canyon" 
                      className="img-fluid rounded-3" 
                      style={{ height: "190px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3 gap-2">
                <img 
                  src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/8f/78/23.jpg" 
                  alt="Tour 1" 
                  className="img-fluid rounded-3" 
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                />
                <img 
                  src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/8d/7e.jpg" 
                  alt="Tour 2" 
                  className="img-fluid rounded-3" 
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                />
                <img 
                  src="https://www.travelandleisure.com/thmb/RQ3JmT8V2y2fhwr7NY0cgUumcCE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg" 
                  alt="Tour 3" 
                  className="img-fluid rounded-3" 
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                />
                <img 
                  src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg" 
                  alt="Tour 4" 
                  className="img-fluid rounded-3" 
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                />
                 <img 
                  src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/8f/78/23.jpg" 
                  alt="Tour 5" 
                  className="img-fluid rounded-3" 
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                />
                 <img 
                  src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/8f/78/23.jpg" 
                  alt="Tour 6" 
                  className="img-fluid rounded-3" 
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                />
                
              </div>
            </div>

            {/* Overview */}
            <div className="mb-5">
              <h2 className="fw-bold mb-4">Overview</h2>
              <p className="lead">Experience the awe-inspiring beauty of the Grand Canyon on this 4-day adventure from Las Vegas. This comprehensive tour takes you to the most spectacular viewpoints along the South Rim, with opportunities to explore Antelope Canyon and marvel at the engineering wonder of Hoover Dam. Travel in comfort with a small group and enjoy personalized attention from your expert guide.</p>
              
              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <i className="fas fa-check-circle" ></i>
                    </div>
                    <div>Explore Grand Canyon South Rim & Antelope Canyon</div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>See the mighty Hoover Dam & historic Route 66</div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>Small group experience (max 12 travelers)</div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>Expert local guide with insider knowledge</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary */}
<div className="mb-5">
  <h2 className="fw-bold mb-4">Tour Plan</h2>
  <p className="text-muted mb-4">
    Castle In One Day Is Next To Impossible. Designed Specifically For Travelers With Limited Time In London,
    This Tour Allows You To Check Off A Range Of Southern England’s Historical Highlights.
  </p>

  <div className="accordion" id="itineraryAccordion">
    {[
      {
        day: 1,
        title: "London To Amsterdam",
        content: "Depart London and travel to Amsterdam, checking into your hotel and enjoying a welcome dinner."
      },
      {
        day: 2,
        title: "Art Museums, Central Park, Rockefeller Center, Times Square",
        content: "Explore NYC’s finest art museums and landmarks with a guided city tour ending at Times Square."
      },
      {
        day: 3,
        title: "The Statue Of Liberty, Ellis Island, The Tenement Museum & A Food Tour",
        content: "Visit Ellis Island and the Statue of Liberty. Enjoy a walking food tour in the Lower East Side."
      },
      {
        day: 4,
        title: "Empire State Building, Chelsea Market, The High Line & Hudson Yards",
        content: "Wrap up your tour with iconic sights including the Empire State Building and the trendy High Line."
      }
    ].map((item, index) => (
      <div className="accordion-item border-0 rounded shadow-sm mb-3 bg-light" key={index}>
        <h3 className="accordion-header" id={`heading${item.day}`}>
          <button
            className="accordion-button collapsed bg-light py-3 px-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${item.day}`}
            aria-expanded="false"
            aria-controls={`collapse${item.day}`}
          >
            <span className="badge text-dark bg-light me-3">Day-{item.day}</span>
            <strong>{item.title}</strong>
          </button>
        </h3>
        <div
          id={`collapse${item.day}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${item.day}`}
          data-bs-parent="#itineraryAccordion"
        >
          <div className="accordion-body px-4 pt-0 pb-3">
            <p className="mb-0 text-muted">{item.content}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="included-exclude-section my-5">
  <h4 className="fw-bold mb-4">Included/Exclude</h4>
  <div className="row">
    <div className="col-md-6">
      <ul className="list-unstyled">
        <li className="mb-2 d-flex align-items-center">
          <i className="fas fa-check-circle text-primary me-2"></i>
          Pick And Drop Service
        </li>
        <li className="mb-2 d-flex align-items-center">
          <i className="fas fa-check-circle text-primary me-2"></i>
          1 Meal Per Day
        </li>
        <li className="mb-2 d-flex align-items-center">
          <i className="fas fa-check-circle text-primary me-2"></i>
          Cruise Dinner & Music Event
        </li>
        <li className="mb-2 d-flex align-items-center">
          <i className="fas fa-check-circle text-primary me-2"></i>
          Visit 7 Best Places
        </li>
      </ul>
    </div>
    <div className="col-md-6">
      <ul className="list-unstyled">
        <li className="mb-2 d-flex align-items-center">
          <i className="fas fa-times-circle text-secondary me-2"></i>
          Gratuities
        </li>
        <li className="mb-2 d-flex align-items-center">
          <i className="fas fa-times-circle text-secondary me-2"></i>
          Return Airport And Round Trip Transfers
        </li>
        <li className="mb-2 d-flex align-items-center">
          <i className="fas fa-times-circle text-secondary me-2"></i>
          Luxury Air-Conditioned Coach
        </li>
        <li className="mb-2 d-flex align-items-center">
          <i className="fas fa-times-circle text-secondary me-2"></i>
          Tickets
        </li>
      </ul>
    </div>
  </div>
</div>

            {/* Reviews */}
            <div className="mb-5">
              <h2 className="fw-bold mb-4">Customer Reviews</h2>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning text-white px-3 py-2 rounded d-flex align-items-center me-3">
                  <i className="fas fa-star me-1"></i>
                  <span className="fs-4 fw-bold">4.8</span>
                </div>
                <div>
                  <h5 className="mb-1">Excellent</h5>
                  <p className="text-muted mb-0">Based on 16 reviews</p>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="mb-0">Amazing Experience!</h5>
                    <div className="text-warning">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <p className="text-muted small">Reviewed by Michael J. • April 15, 2023</p>
                  <p>"This tour exceeded all expectations. Our guide was incredibly knowledgeable and made sure we saw all the best spots. The small group size made it feel very personal. Highly recommend!"</p>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="mb-0">Best Grand Canyon Tour</h5>
                    <div className="text-warning">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <p className="text-muted small">Reviewed by Sarah L. • March 28, 2023</p>
                  <p>"The itinerary was perfect - we saw everything we wanted and more. Antelope Canyon was breathtaking. The hotels were comfortable and well-located. Worth every penny!"</p>
                </div>
              </div>

              <button className="btn btn-outline-gradient-primary mt-4 rounded-pill px-4 py-2">
                <i className="fas fa-plus me-2"></i> Load More Reviews
              </button>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
<div className="col-lg-4">
  <div className="sticky-top" style={{ top: "20px" }}>
    <div className="card border-0 shadow-sm mb-2 p-3">
      <div className="card-body">
        <h4 className="fw-bold mb-3">Book This Tour</h4>

        {/* Date Picker */}
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input type="date" className="form-control" />
        </div>

        {/* Time Selection */}
        <div className="mb-3">
          <label className="form-label d-block">Time:</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="time" id="time1" />
            <label className="form-check-label" htmlFor="time1">12:00</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="time" id="time2" />
            <label className="form-check-label" htmlFor="time2">12:00</label>
          </div>
        </div>

        {/* Tickets Section */}
        <div className="mb-3">
          <label className="form-label">Tickets:</label>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span>Person (18+ years) $10.00</span>
            <select className="form-select w-auto">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>Children (13–17 years) $10.00</span>
            <select className="form-select w-auto">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>

        {/* Add Extra */}
        <div className="mb-3">
          <label className="form-label">Add Extra:</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="extra1" />
            <label className="form-check-label" htmlFor="extra1">
              Service Per Person <span className="text-muted"> $10.00</span>
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="extra2" />
            <label className="form-check-label" htmlFor="extra2">
              Service Per Booking <span className="text-muted"> $20.00</span>
            </label>
          </div>
        </div>

        {/* Total Cost */}
        <div className="mb-3">
          <h5 className="d-flex justify-content-between">
            <span>Total Cost:</span>
            <span className="text-primary fw-bold fs-5">$210.00</span>
          </h5>
        </div>

        {/* Book Now Button */}
        <button className="btn btn-gradient-primary text-light w-100 fw-bold py-3 rounded-pill shadow-sm">
          BOOK NOW
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Similar Tours */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">You May Also Like</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <img 
                      src="https://www.reneeroaming.com/wp-content/uploads/2021/04/Ultimate-Yellowstone-To-Grand-Teton-Road-Trip-Itinerary.jpg" 
                      alt="Small Group Tour" 
                      className="img-fluid rounded-start h-100" 
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body d-flex flex-column h-100">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="badge bg-primary">Small Group</span>
                        <span className="badge bg-success">20% Off</span>
                      </div>
                      <h5 className="card-title">4-Day Grand Canyon Small Group Tour from Las Vegas: South Rim, Antelope Canyon</h5>
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-warning text-white px-2 py-1 rounded d-flex align-items-center me-2">
                          <i className="fas fa-star me-1"></i>
                          <span>4.8</span>
                        </div>
                        <span className="text-muted small">(5 reviews)</span>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="text-decoration-line-through text-muted me-2">
                              $1343.16
                            </span>
                            <span className="fw-bold text-danger">
                              $1074.53
                            </span>
                          </div>
                          <a href="#" className="btn btn-sm btn-gradient-outline-primary rounded-pill px-3">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;