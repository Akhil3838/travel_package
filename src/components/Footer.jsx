'use client'
import { getuserData } from '@/services/allApi';
import React, { use, useEffect, useState } from 'react'

function Footer() {

  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    try {
      const result = await getuserData();
      console.log(result);
      
      setLinks(result?.data?.links || []);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  }

  useEffect(() => {
    fetchLinks();
  },[])
  return (
    <>
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
          <a href={links[1]?.value} className="text-white fs-5"><i className="fab fa-facebook-f"></i></a>
          {/* <a href="#" className="text-white fs-5"><i className="fab fa-twitter"></i></a> */}
          <a href={links[0]?.value} className="text-white fs-5"><i className="fab fa-instagram"></i></a>
          {/* <a href="#" className="text-white fs-5"><i className="fab fa-linkedin-in"></i></a> */}
          {/* <a href="#" className="text-white fs-5"><i className="fab fa-pinterest-p"></i></a> */}
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
          {/* <li className="mb-2"><a href="#" className=" text-decoration-none text-white">FAQs</a></li> */}
          <li className="mb-2"><a href="/privacy" className=" text-decoration-none text-white">Privacy Policy</a></li>
          {/* <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Terms of Service</a></li> */}
          <li className="mb-2"><a href="#" className=" text-decoration-none text-white">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-lg-4 col-md-6">
        <h5 className="fw-bold mb-4">Contact Us</h5>
        <ul className="list-unstyled text-muted">
          <li className="mb-3 d-flex align-items-start">
            <i className="fas fa-map-marker-alt me-3 text-white mt-1"></i>
            <span className="text-white">{links[9]?.value}</span>
          </li>
          <li className="mb-3 d-flex  text-white align-items-center">
            <i className="fas fa-phone-alt me-3  text-white"></i>
            <span className="text-white">{links[10]?.value}</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-envelope me-3  text-white"></i>
            <span className="text-white">{links[2]?.value}</span>
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
  )
}

export default Footer