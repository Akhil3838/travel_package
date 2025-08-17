'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import TrendingPkg from "@/components/TrendingPkg";
import { getCategories } from "@/services/allApi";
import PopularPackages from "@/components/PopularPackages";
import SearchPackage from "@/components/SearchPackage";
import AiSearchbar from "@/components/AiSearchbar";

export default function Home() {

    const [categories, setCategories] = useState([]);
  
    const getCategory = async () => {
      try {
        const result = await getCategories();
        setCategories(result?.data?.categories || []);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };
  
    useEffect(() => {
      getCategory();
    }, []);
  console.log(categories);
  
 

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
                  {categories[0]?.title}
                </span>
                <span className="fw-bold border  border-black rounded-pill p-1 px-3 small">
                  {categories[1]?.title}
                </span>
                <span className="fw-bold border  border-black rounded-pill p-1 px-3 small">
                  {categories[2]?.title}
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
              <SearchPackage/>
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
    <TrendingPkg/>
  </section>
  {/* hot selling packages */}
  
  {/* Standard Hot Selling Packages - Mobile Optimized */}
<section className="standard-packages py-5 bg-light">
  <PopularPackages/>
</section>  


</div> 
  <AiSearchbar/>

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