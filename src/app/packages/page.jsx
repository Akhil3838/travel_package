import React from "react";

const travelPackages = [
  {
    id: 1,
    title: "4-Day Grand Canyon Adventure Tour from Las Vegas: South Rim, Hoover Dam",
    price: 236.54,
    originalPrice: 295.68,
    duration: "4 days",
    from: "Las Vegas",
    rating: 4.8,
    reviews: 16,
    tag: "Best Seller",
    discount: "20% Off",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/8f/78/23.jpg",
    code: "4239",
    highlights: [
      "Explore Grand Canyon South Rim & Antelope Canyon",
      "See the mighty Hoover Dam & historic Route 66",
      "Small group experience (max 12 travelers)",
      "Expert local guide with insider knowledge"
    ]
  },
  {
    id: 2,
    title: "4-Day Grand Canyon Small Group Tour from Las Vegas: South Rim, Antelope Canyon",
    price: 1074.53,
    originalPrice: 1343.16,
    duration: "4 days",
    from: "Las Vegas",
    rating: 4.8,
    reviews: 5,
    tag: "Small Group",
    discount: "20% Off",
    image: "https://www.reneeroaming.com/wp-content/uploads/2021/04/Ultimate-Yellowstone-To-Grand-Teton-Road-Trip-Itinerary.jpg",
    code: "9369",
    highlights: [
      "Exclusive small group experience (max 8 travelers)",
      "Sunset photography session at Horseshoe Bend",
      "Luxury transportation with panoramic windows",
      "Gourmet picnic lunch with canyon views"
    ]
  },
];

const Packages = () => {
  return (
<>


        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3">Discover the Grand Canyon</h2>
            <p className="lead text-muted">Explore our curated selection of unforgettable adventures</p>
          </div>
          
          <div className="row">
            {/* Sidebar */}
<div className="col-lg-3 mb-4">
  <div className="border p-4 rounded-3 mb-4 shadow-sm bg-white">
    <h5 className="fw-bold mb-3">Refine Your Search</h5>
    <hr className="my-3" />
    
    <div className="mb-4">
      <h6 className="fw-semibold mb-3">Product Type</h6>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="vacation" />
        <label className="form-check-label d-flex align-items-center" htmlFor="vacation">
          <span className="ms-2">Vacation Packages</span>
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="dayTrips" />
        <label className="form-check-label d-flex align-items-center" htmlFor="dayTrips">
          <span className="ms-2">Day Trips</span>
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="thingsToDo" />
        <label className="form-check-label d-flex align-items-center" htmlFor="thingsToDo">
          <span className="ms-2">Things to Do</span>
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="cruises" />
        <label className="form-check-label d-flex align-items-center" htmlFor="cruises">
          <span className="ms-2">Cruises</span>
        </label>
      </div>
    </div>

    <div className="mb-4">
      <h6 className="fw-semibold mb-3">Price Range</h6>
      <div className="range-slider mb-2">
        <input type="range" className="form-range" min="0" max="5000" step="100" id="priceMin" />
        <input type="range" className="form-range" min="0" max="5000" step="100" id="priceMax" />
      </div>
      <div className="d-flex justify-content-between small text-muted">
        <span>₹0</span>
        <span>₹5000+</span>
      </div>
    </div>

    <div className="mb-4">
      <h6 className="fw-semibold mb-3">Duration</h6>
      <div className="d-flex flex-wrap gap-2">
        {["1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D+"].map((label, index) => (
          <div key={index}>
            <input type="checkbox" id={`duration-${index}`} className="btn-check" />
            <label className="btn btn-outline-primary btn-sm" htmlFor={`duration-${index}`}>
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* <div className="mb-4">
      <h6 className="fw-semibold mb-3">Travel Dates</h6>
      <div className="input-group mb-2">
        <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
        <input type="text" className="form-control" placeholder="Departure Date" id="departureDate" />
      </div>
      <div className="input-group">
        <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
        <input type="text" className="form-control" placeholder="Return Date" id="returnDate" />
      </div>
    </div> */}

    <div className="mb-4">
      <h6 className="fw-semibold mb-3">Destinations</h6>
      <div className="search-box mb-3">
        <input type="text" className="form-control" placeholder="Search destinations..." />
      </div>
      <div className="list-group list-group-flush" style={{maxHeight: "200px", overflowY: "auto"}}>
        {["Hawaii", "Europe", "Caribbean", "Asia", "Australia", "Mexico", "Canada", "Alaska"].map((dest, idx) => (
          <div className="list-group-item border-0 px-0 py-1" key={idx}>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id={`dest-${idx}`} />
              <label className="form-check-label" htmlFor={`dest-${idx}`}>
                <i className="fas fa-globe-americas me-2 text-primary"></i>
                {dest}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* <div className="mb-3">
      <h6 className="fw-semibold mb-3">Departure City</h6>
      <div className="list-group list-group-flush">
        {["Los Angeles", "Las Vegas", "San Francisco", "Seattle", "Denver", "New York", "Chicago", "Dallas"].map((city, idx) => (
          <div className="list-group-item border-0 px-0 py-1" key={idx}>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id={`city-${idx}`} />
              <label className="form-check-label" htmlFor={`city-${idx}`}>
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                {city}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div> */}

    <div className="mb-4">
      <h6 className="fw-semibold mb-3">Travel Style</h6>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="family" />
        <label className="form-check-label" htmlFor="family">
          Family Friendly
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="luxury" />
        <label className="form-check-label" htmlFor="luxury">
          Luxury
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="adventure" />
        <label className="form-check-label" htmlFor="adventure">
          Adventure
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="romantic" />
        <label className="form-check-label" htmlFor="romantic">
          Romantic
        </label>
      </div>
    </div>


    <button className="btn btn-primary w-100 mt-3">Apply Filters</button>
    <button className="btn btn-link w-100 mt-2 text-decoration-none">Reset All Filters</button>
  </div>
  
  <div className="border p-4 rounded-3 shadow-sm bg-white">
    <h5 className="fw-bold mb-3">Need Help?</h5>
    <p className="small text-muted">Our travel experts are available 24/7 to help you plan your perfect trip.</p>
    <button className="btn btn-outline-primary w-100">Contact Us</button>
  </div>
</div>     
       {/* Package Cards */}
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <span className="text-muted me-2">Showing</span>
                  <strong>1-{travelPackages.length}</strong> of {travelPackages.length} tours
                </div>
                <div>
                  <select className="form-select form-select-sm">
                    <option>Sort by: Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Duration</option>
                  </select>
                </div>
              </div>
              
              {travelPackages.map((pkg) => (
                <div key={pkg.id} className="card mb-4 border-0 shadow-hover overflow-hidden">
                  <div className="row g-0">
                    <div className="col-md-4 position-relative">
                      <div className="position-absolute top-0 start-0 m-3 d-flex flex-column">
                        {pkg.tag && (
                          <span className="badge bg-danger mb-2 px-3 py-2 shadow-sm">
                            <i className="fas fa-tag me-1"></i> {pkg.tag}
                          </span>
                        )}
                        <span className="badge bg-success px-3 py-2 shadow-sm">
                          {pkg.discount}
                        </span>
                      </div>
                      <button className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm">
                        <i className="fas fa-heart text-danger"></i>
                      </button>
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover", minHeight: "250px" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body h-100 d-flex flex-column">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title fw-bold mb-2">{pkg.title}</h5>
                        </div>
                        
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-warning text-white px-2 py-1 rounded d-flex align-items-center me-2">
                            <i className="fas fa-star me-1"></i>
                            <span>{pkg.rating}</span>
                          </div>
                          <span className="text-muted small">({pkg.reviews} reviews)</span>
                        </div>
                        
                        <ul className="text-muted small ps-3 mb-3">
                          {pkg.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                              <span className="text-muted me-2"><i className="fas fa-map-marker-alt me-1 text-primary"></i>From:</span>
                              <strong>{pkg.from}</strong>
                            </div>
                            <div>
                              <i className="fas fa-calendar-alt me-1 text-primary"></i>
                              <span>{pkg.duration}</span>
                            </div>
                          </div>
                          
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span className="text-decoration-line-through text-muted me-2">
                                ${pkg.originalPrice.toFixed(2)}
                              </span>
                              <span className="fw-bold text-danger fs-4">
                                ${pkg.price.toFixed(2)}
                              </span>
                              <span className="text-muted small ms-2">per person</span>
                            </div>
                            <div className="d-flex gap-2">
                              <button className="btn btn-outline-primary">Quick View</button>
                              <button className="btn btn-primary">Book Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-light py-2 px-3 text-center small">
                    <span className="text-muted">Product Code: {pkg.code}</span>
                  </div>
                </div>
              ))}
              
              <nav aria-label="Pagination" className="mt-4">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    
</>  );
};

export default Packages;