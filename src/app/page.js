'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
 

  return (
    <>
<div >
        <div className="container-fluid px-4 py-3" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="row g-4">
            {/* Left Column - Text */}
            <div className="col-md-3 p-3 left-column animate-on-load">
              <h4 className="fw-bold">AlsiBackpackers</h4>
              <small className="text-muted mt-4">
                Discover the world with AlsiBackpackers 
              </small>
  
              {/* Group Travel Section */}
              <div className="p-3 rounded-4 mt-2 bg-white border border-light animate-on-load">
                <h6 className="fw-semibold text-dark mb-3">Group Travel</h6>
                <div className="d-flex gap-2">
                  <button className="btn btn-dark w-50 rounded-pill py-2 shadow-sm">Book</button>
                  <button className="btn btn-outline-dark w-50 rounded-pill py-2 shadow-sm">College</button>
                </div>
              </div>
  
              {/* Carousel for Travel Video */}
              <div id="mediaCarousel" className="carousel slide mt-4 animate-on-load" data-bs-ride="carousel" data-bs-interval="3000">
                <div
                  className="carousel-inner rounded-3"
                  style={{
                    minHeight: "30vh",
                    height: "100%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Travel Video Slide 1 */}
                  <div className="carousel-item active" style={{ height: "100%" }}>
                    <div className="position-relative h-100 overflow-hidden">
                      <video
                        className="w-100 h-100"
                        muted
                        loop
                        autoPlay
                        playsInline
                        style={{
                          objectFit: "cover",
                          minHeight: "30vh"
                        }}
                      >
                        <source
                          src="https://cdn.pixabay.com/video/2025/05/06/277097_tiny.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div
                        className="position-absolute bottom-0 start-0 end-0 p-3 text-white"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          backdropFilter: "blur(2px)"
                        }}
                      >
                        <h6 className="mb-0 fw-bold">Adventure Awaits</h6>
                        <p className="small mb-0 opacity-75">Explore the Unknown</p>
                      </div>
                    </div>
                  </div>
  
                  {/* Travel Video Slide 2 */}
                  <div className="carousel-item" style={{ height: "100%" }}>
                    <div className="position-relative h-100 overflow-hidden">
                      <video
                        className="w-100 h-100"
                        muted
                        loop
                        autoPlay
                        playsInline
                        style={{
                          objectFit: "cover",
                          minHeight: "30vh"
                        }}
                      >
                        <source
                          src="https://cdn.pixabay.com/video/2019/02/19/21528-318978038_tiny.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div
                        className="position-absolute bottom-0 start-0 end-0 p-3 text-white"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          backdropFilter: "blur(2px)"
                        }}
                      >
                        <h6 className="mb-0 fw-bold">Wander Often</h6>
                        <p className="small mb-0 opacity-75">Wonder Always</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Carousel for Food Images */}
              <div id="foodCarousel" className="carousel slide mt-4 animate-on-load" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner rounded-3" style={{ height: "220px", minHeight: "30vh", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                  {/* Slide 1 */}
                  <div className="carousel-item active h-100">
                    <div className="position-relative h-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                        alt="Gourmet Dish"
                        className="w-100 h-100"
                        style={{ objectFit: "cover", minHeight: "30vh" }}
                      />
                      <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white" 
                           style={{ 
                             background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                             backdropFilter: "blur(2px)"
                           }}>
                        <h6 className="mb-0 fw-bold">Artisan Cuisine</h6>
                        <p className="small mb-0 opacity-75">Modern presentation with traditional flavors</p>
                      </div>
                    </div>
                  </div>
  
                  {/* Slide 2 */}
                  <div className="carousel-item h-100">
                    <div className="position-relative h-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                        alt="Pizza"
                        className="w-100 h-100"
                        style={{ objectFit: "cover", minHeight: "30vh" }}
                      />
                      <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white"
                           style={{ 
                             background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                             backdropFilter: "blur(2px)"
                           }}>
                        <h6 className="mb-0 fw-bold">Wood-Fired Pizza</h6>
                        <p className="small mb-0 opacity-75">Authentic Italian recipe</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Custom Indicators */}
                <div className="carousel-indicators position-static mt-2">
                  <button 
                    type="button" 
                    data-bs-target="#foodCarousel" 
                    data-bs-slide-to="0" 
                    className="active bg-dark" 
                    style={{ width: "8px", height: "8px", borderRadius: "50%" }}
                    aria-current="true"
                  ></button>
                  <button 
                    type="button" 
                    data-bs-target="#foodCarousel" 
                    data-bs-slide-to="1" 
                    className="bg-dark" 
                    style={{ width: "8px", height: "8px", borderRadius: "50%" }}
                  ></button>
                </div>
              </div>
            </div>  
            
            {/* Center - Main Image */}
            <div className="col-md-6 position-relative text-center d-flex align-items-center justify-content-center p-0 overflow-hidden main-video-container">
              {/* Curved White Header - Top Center */}
              <div
                className="position-absolute top-0 start-50 translate-middle-x text-dark d-flex justify-content-center align-items-center pb-2 px-3 gap-2 flex-wrap d-none d-md-flex animate-on-load"
                style={{
                  backgroundColor: '#f5f5f5',
                  height: '55px',
                  width: '66%',
                  borderBottomLeftRadius: '30px',
                  borderBottomRightRadius: '30px',
                  zIndex: 2,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                }}
              >
                <span className="fw-bold border  border-black rounded-pill p-1 px-3 small">
                  Beach Getaways
                </span>
                <span className="fw-bold border  border-black rounded-pill p-1 px-3 small">
                  Mountain Treks
                </span>
                <span className="fw-bold border  border-black rounded-pill p-1 px-3 small">
                  Cultural Tours
                </span>
              </div>
  
              {/* Video with overlay */}
              <div className="position-relative w-100 h-100" style={{ zIndex: 1, borderRadius: '30px' }}>
                <video
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/home/banner/dreams-desktop-2560x1440"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-100 h-100 object-fit-cover rounded-4"
                  style={{ maxHeight: '95vh' }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
            </div>    
            
            {/* Right Column - Highlights */}
            <div className="col-md-3 right-column">
              {/* Search and Profile */}
              <div className="d-flex align-items-center justify-content-between ms-auto px-3 py-2 animate-on-load" style={{ maxWidth: '100%' }}>
                {/* Search Group */}
                <div className="d-flex align-items-center position-relative me-1">
                  <svg className="position-absolute ms-2" width="20" height="20" fill="#888" viewBox="0 0 24 24" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </svg>
                  <input
                    type="search"
                    className="form-control ps-5"
                    placeholder="Search"
                    style={{ width: '250px', height: '38px' }}
                  />
                </div>
  
                {/* Profile Avatar */}
                <div className="profile-container d-flex align-items-center">
                  <div className="profile-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                  </div>
                </div>
              </div>
  
              <div id="mediaCarousel" className="carousel slide mt-4 animate-on-load " data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                  {/* Travel Video Slide 1 */}
                  <div className="carousel-item active">
                    <div className="card border-0 shadow-sm overflow-hidden mx-2" style={{ borderRadius: "12px" }}>
                      <div className="card-header bg-white border-0 pb-0">
                        <h6 className="mb-0 fw-semibold text-dark">Trending Places</h6>
                        <p className="small text-muted mb-1">Explore popular destinations</p>
                      </div>
                      <div className="card-body p-0">
                        <video
                          className="w-100"
                          muted
                          loop
                          autoPlay
                          playsInline
                          style={{ height: "200px", objectFit: "cover", minHeight: "30vh" }}
                        >
                          <source src="https://cdn.pixabay.com/video/2024/12/03/244754_tiny.mp4" type="video/mp4" />
                          Your browser does not support the video tag
                        </video>
                      </div>
                    </div>
                  </div>
                  
                  {/* Travel Video Slide 2 */}
                  <div className="carousel-item">
                    <div className="card border-0 shadow-sm overflow-hidden mx-2" style={{ borderRadius: "12px" }}>
                      <div className="card-header bg-white border-0 pb-0">
                        <h6 className="mb-0 fw-semibold text-dark">Trending Places</h6>
                        <p className="small text-muted mb-1">Discover hidden gems</p>
                      </div>
                      <div className="card-body p-0">
                        <video
                          className="w-100"
                          muted
                          loop
                          autoPlay
                          playsInline
                          style={{ height: "200px", objectFit: "cover", minHeight: "30vh" }}
                        >
                          <source src="https://cdn.pixabay.com/video/2019/02/19/21528-318978038_tiny.mp4" type="video/mp4" />
                          Your browser does not support the video tag
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded mt-4 overflow-hidden animate-on-load" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <div className="position-relative">
                  <video
                    className="w-100"
                    muted
                    loop
                    autoPlay
                    playsInline
                    style={{ height: "180px", objectFit: "cover", minHeight: "30vh" }}
                  >
                    <source src="https://cdn.pixabay.com/video/2025/06/09/284566_tiny.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                  </video>
                  
                  {/* Overlay Text */}
                  <div className="position-absolute bottom-0 start-0 end-0 p-2" 
                       style={{ 
                         background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                         color: 'white'
                       }}>
                    <p className="mb-0 fw-bold" style={{ fontSize: '1.1rem' }}>Not All Who Wander Are Lost</p>
                    <p className="mb-1 small opacity-75">Find your path through unexpected journeys</p>
                  </div>
                </div>
                
                {/* Footer Description with Arrow */}
                <div className="p-3 bg-light d-flex justify-content-between align-items-center">
                  <p className="small mb-0">The best stories come from unplanned detours stories come from unplanned detours stories come from unplanned detours</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add some CSS for the parallax effect */}
  
        {/* Trending Locations Section */}
  <section className="trending-locations py-5">
    <div className="container">
      <h2 className="display-5 text-dark fw-bold mb-3  text-center">Trending Destinations</h2>
      <p className="lead  text-dark text-center">Explore the most popular travel spots this season</p>
      
  <div id="locationsCarousel" className="carousel trending-carousel slide"> {/* Removed data-bs-ride="carousel" */}
    <div className="carousel-inner">        {/* Slide 1 - Active (contains 4 cards) */}
          <div className="carousel-item active">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-3">
                <div className="location-card">
                  <div className="location-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Paris" 
                      className="location-image"
                    />
                    <div className="location-badge">30% OFF</div>
                  </div>
                  <div className="location-info p-3">
                    <h3 className="location-name">Paris, France</h3>
                    <div className="location-meta d-flex justify-content-between align-items-center">
                      <span className="location-price">From ₹799</span>
                      <span className="location-rating">⭐ 4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="col-md-6 col-lg-3">
                <div className="location-card">
                  <div className="location-image-container">
                    <img 
                      src="https://media.timeout.com/images/106182485/750/562/image.jpg" 
                      alt="Bali" 
                      className="location-image"
                    />
                    <div className="location-badge">Early Bird</div>
                  </div>
                  <div className="location-info p-3">
                    <h3 className="location-name">Bali, Indonesia</h3>
                    <div className="location-meta d-flex justify-content-between align-items-center">
                      <span className="location-price">From ₹649</span>
                      <span className="location-rating">⭐ 4.9</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="col-md-6 col-lg-3">
                <div className="location-card">
                  <div className="location-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Tokyo" 
                      className="location-image"
                    />
                  </div>
                  <div className="location-info p-3">
                    <h3 className="location-name">Tokyo, Japan</h3>
                    <div className="location-meta d-flex justify-content-between align-items-center">
                      <span className="location-price">From ₹1099</span>
                      <span className="location-rating">⭐ 4.7</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="col-md-6 col-lg-3">
                <div className="location-card">
                  <div className="location-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Maldives" 
                      className="location-image"
                    />
                    <div className="location-badge">Popular</div>
                  </div>
                  <div className="location-info p-3">
                    <h3 className="location-name">Maldives</h3>
                    <div className="location-meta d-flex justify-content-between align-items-center">
                      <span className="location-price">From ₹1299</span>
                      <span className="location-rating">⭐ 4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slide 2 (you would duplicate the above structure with 4 different cards) */}
          <div className="carousel-item">
            <div className="row g-4">
              {/* Card 5 */}
              <div className="col-md-6 col-lg-3">
                <div className="location-card">
                  <div className="location-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="New York" 
                      className="location-image"
                    />
                    <div className="location-badge">Special</div>
                  </div>
                  <div className="location-info p-3">
                    <h3 className="location-name">New York, USA</h3>
                    <div className="location-meta d-flex justify-content-between align-items-center">
                      <span className="location-price">From ₹1499</span>
                      <span className="location-rating">⭐ 4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 6 */}
              <div className="col-md-6 col-lg-3">
                <div className="location-card">
                  <div className="location-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Rome" 
                      className="location-image"
                    />
                    <div className="location-badge">Limited</div>
                  </div>
                  <div className="location-info p-3">
                    <h3 className="location-name">Rome, Italy</h3>
                    <div className="location-meta d-flex justify-content-between align-items-center">
                      <span className="location-price">From ₹899</span>
                      <span className="location-rating">⭐ 4.9</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 7 */}
              <div className="col-md-6 col-lg-3">
                <div className="location-card">
                  <div className="location-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Sydney" 
                      className="location-image"
                    />
                  </div>
                  <div className="location-info p-3">
                    <h3 className="location-name">Sydney, Australia</h3>
                    <div className="location-meta d-flex justify-content-between align-items-center">
                      <span className="location-price">From ₹1199</span>
                      <span className="location-rating">⭐ 4.7</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 8 */}
              <div className="col-md-6 col-lg-3">
                <div className="location-card">
                  <div className="location-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Dubai" 
                      className="location-image"
                    />
                    <div className="location-badge">Luxury</div>
                  </div>
                  <div className="location-info p-3">
                    <h3 className="location-name">Dubai, UAE</h3>
                    <div className="location-meta d-flex justify-content-between align-items-center">
                      <span className="location-price">From ₹1599</span>
                      <span className="location-rating">⭐ 4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#locationsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#locationsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#locationsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#locationsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
      </div>
      
<Link href={'/packages'} style={{textDecoration:'none'}}>
        <div className="text-center mt-4">
          <button className="btn  view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
            <span >View All Destinations</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
    
              className="bi bi-arrow-right ms-2"
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>
  
</Link>  
  </div>
  </section>
  {/* hot selling packages */}
  
  {/* Standard Hot Selling Packages - Mobile Optimized */}
<section className="standard-packages py-5 bg-light">
    <div className="container px-4">
      <div className="section-header text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Popular Travel Packages</h2>
        <p className='text-muted fs-5'>Curated experiences loved by travelers worldwide</p>
      </div>
  
      <div className="row g-4 pb-4 scroll-hide" style={{scrollSnapType: 'x mandatory', overflowX: 'auto', flexWrap: 'nowrap'}}>
        {/* Package 1 */}
        <div className="col-11 col-md-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
          <div className="package-card h-100 border-0 shadow-sm overflow-hidden rounded-4">
            <div className="package-img-container position-relative">
              <img 
                src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Bali Package" 
                className="img-fluid w-100"
                style={{height: '220px', objectFit: 'cover'}}
              />
              <div className="package-tag bg-dark text-white position-absolute top-3 end-3 px-3 py-1 rounded-pill small fw-bold">BESTSELLER</div>
            </div>
            <div className="package-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-info bg-opacity-10 text-info">7 Days</span>
                <div className="d-flex align-items-center">
                  <i className="fas fa-star text-warning me-1 small"></i>
                  <span className="small">4.8 (243)</span>
                </div>
              </div>
              <h3 className="h5 fw-bold mb-2">Bali Premium Vacation</h3>
              <p className="text-muted mb-3">Private villa with pool & daily spa treatments</p>
              
              <div className="package-details mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-plane text-dark me-2"></i>
                  <span className="small">Flight Included</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-hotel text-dark me-2"></i>
                  <span className="small">5★ Accommodation</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-utensils text-dark me-2"></i>
                  <span className="small">Breakfast Included</span>
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                <div>
                  <span className="text-decoration-line-through text-muted me-2 small">$1,499</span>
                  <span className="h5 fw-bold text-dark">$1,099</span>
                  {/* <span className="badge bg-danger bg-opacity-10 text-danger ms-2 small">Save 27%</span> */}
                </div>
                <button className="btn btn-dark rounded-pill px-3 py-2 ">
                  <span className="small fw-bold">Book Now</span>
                  <i className="fas fa-arrow-right ms-2 small"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Package 2 */}
        <div className="col-11 col-md-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
          <div className="package-card h-100 border-0 shadow-sm overflow-hidden rounded-4">
            <div className="package-img-container position-relative">
              <img 
                src="https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Maldives Package" 
                className="img-fluid w-100"
                style={{height: '220px', objectFit: 'cover'}}
              />
              <div className="package-tag bg-success text-white position-absolute top-3 end-3 px-3 py-1 rounded-pill small fw-bold">LUXURY</div>
            </div>
            <div className="package-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-info bg-opacity-10 text-info">5 Days</span>
                <div className="d-flex align-items-center">
                  <i className="fas fa-star text-warning me-1 small"></i>
                  <span className="small">4.9 (187)</span>
                </div>
              </div>
              <h3 className="h5 fw-bold mb-2">Maldives Paradise</h3>
              <p className="text-muted mb-3">Overwater bungalow with private beach access</p>
              
              <div className="package-details mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-plane text-dark me-2"></i>
                  <span className="small">Flight Included</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-hotel text-dark me-2"></i>
                  <span className="small">5★ Resort</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-utensils text-dark me-2"></i>
                  <span className="small">All Inclusive</span>
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                <div>
                  <span className="text-decoration-line-through text-muted me-2 small">$2,299</span>
                  <span className="h5 fw-bold text-dark">$1,799</span>
                  {/* <span className="badge bg-danger bg-opacity-10 text-danger ms-2 small">Save 22%</span> */}
                </div>
                <button className="btn btn-dark rounded-pill px-3 py-2">
                  <span className="small fw-bold">Book Now</span>
                  <i className="fas fa-arrow-right ms-2 small"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Package 3 */}
        <div className="col-11 col-md-6 col-lg-4 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
          <div className="package-card h-100 border-0 shadow-sm overflow-hidden rounded-4">
            <div className="package-img-container position-relative">
              <img 
                src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Japan Package" 
                className="img-fluid w-100"
                style={{height: '220px', objectFit: 'cover'}}
              />
              <div className="package-tag bg-warning text-dark position-absolute top-3 end-3 px-3 py-1 rounded-pill small fw-bold">SEASONAL</div>
            </div>
            <div className="package-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-info bg-opacity-10 text-info">10 Days</span>
                <div className="d-flex align-items-center">
                  <i className="fas fa-star text-warning me-1 small"></i>
                  <span className="small">4.7 (156)</span>
                </div>
              </div>
              <h3 className="h5 fw-bold mb-2">Japan Cherry Blossom Tour</h3>
              <p className="text-muted mb-3">Tokyo, Kyoto, Osaka with sakura viewing</p>
              
              <div className="package-details mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-plane text-dark me-2"></i>
                  <span className="small">Flight Included</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-hotel text-dark me-2"></i>
                  <span className="small">4★ Hotels</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-train text-dark me-2"></i>
                  <span className="small">Bullet Train Pass</span>
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                <div>
                  <span className="h5 fw-bold text-dark">$2,499</span>
                </div>
                <button className="btn btn-dark rounded-pill px-3 py-2">
                  <span className="small fw-bold">Book Now</span>
                  <i className="fas fa-arrow-right ms-2 small"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
<Link href={'/packages'} style={{textDecoration:'none'}}>
        <div className="text-center mt-4">
          <button className="btn  view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
            <span >View All Destinations</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
    
              className="bi bi-arrow-right ms-2"
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>
  
</Link>  
    </div>
</section>  
</div>     
<footer className="bg-dark text-white pt-5 pb-4">

  <div className="container">
    <div className="row g-4">
      {/* Company Info */}
      <div className="col-lg-4 col-md-6">
        <div className="d-flex align-items-center mb-3">
          <span className="logo-icon fs-3 me-2"></span>
          <span className="logo-text fs-4 fw-bold">Aalsibackpackers</span>
        </div>
        <p className=" mb-4">
          Discover the world with GoWonder. We create unforgettable travel experiences tailored just for you.
        </p>
        <div className="social-icons d-flex gap-3">
          <a href="#" className="text-white fs-5"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="col-lg-2 col-md-6">
        <h5 className="fw-bold mb-4">Explore</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Destinations</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Tour Packages</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Flight Deals</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Hotel Stays</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-light">Travel Guides</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="col-lg-2 col-md-6">
        <h5 className="fw-bold mb-4">Support</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Help Center</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">FAQs</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Privacy Policy</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Terms of Service</a></li>
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-lg-4 col-md-6">
        <h5 className="fw-bold mb-4">Contact Us</h5>
        <ul className="list-unstyled text-muted">
          <li className="mb-3 d-flex align-items-start">
            <i className="fas fa-map-marker-alt me-3 text-white mt-1"></i>
            <span className="text-white">123 Travel Street, Wanderlust City, WC 12345</span>
          </li>
          <li className="mb-3 d-flex  text-white align-items-center">
            <i className="fas fa-phone-alt me-3  text-white"></i>
            <span className="text-white">+1 (555) 123-4567</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-envelope me-3  text-white"></i>
            <span className="text-white">hello@gowonder.com</span>
          </li>
        </ul>
        
        {/* Newsletter */}
        <div className="newsletter mt-4">
          <h6 className="fw-bold mb-3">Subscribe to our newsletter</h6>
          <div className="input-group">
            <input 
              type="email" 
              className="form-control bg-white border-dark text-dark" 
              placeholder="Your email" 
              aria-label="Your email"
            />
            <button className="btn btn-primary" type="button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="row mt-5">
      <div className="col-12">
        <hr className="border-secondary"/>
        <div className="d-md-flex justify-content-between text-center text-md-start">
          <p className=" mb-0">© {new Date().getFullYear()} Aalsibackpackers. All rights reserved.</p>
          <div className="payment-methods mt-3 mt-md-0">
            <i className="fab fa-cc-visa fs-4 me-2"></i>
            <i className="fab fa-cc-mastercard fs-4 me-2"></i>
            <i className="fab fa-cc-paypal fs-4 me-2"></i>
            <i className="fab fa-cc-amex fs-4"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}