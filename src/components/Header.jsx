import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header-navbar shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/logo.png" alt="Logo" className="logo me-2" />
          <span className="brand-name fw-bold">YourBrand</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* {["Home", "About", "Services", "Contact"].map((link, idx) => ( */}
              <li className="nav-item mx-2">
                <a
                  href='/Home'
                  className="nav-link position-relative"
                >
               <span className="bold">   Home</span>
                  <span className="underline"></span>
                </a>
              </li>

             <li className="nav-item mx-2">
                <a
                  href='/about'
                  className="nav-link position-relative"
                >
               <span className="bold">   About</span>
                  <span className="underline"></span>
                </a>
              </li>

             <li className="nav-item mx-2">
                <a
                  href='/trekServices'
                  className="nav-link position-relative"
                >
               <span className="bold">Bus Ticket Booking</span>
                  <span className="underline"></span>
                </a>
              </li>

            {/* ))} */}
            <li className="nav-item ms-3">
              <a href="/packages" className="btn btn-rounded btn-primary d-flex align-items-center">
                {/* <FaUserAlt className="me-1" /> */}
                Enquiry Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
