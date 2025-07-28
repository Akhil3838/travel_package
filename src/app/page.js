import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <div className="container-fluid px-4 py-4" style={{ backgroundColor: "#f5f5f5" }}>
        {/* <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold">realme</h4>
          <button className="btn btn-dark btn-sm rounded-pill px-3">Menu</button>
        </div> */}

        <div className="row g-4">
          {/* Left Column - Text */}
<div className="col-md-3 p-3">
  <h4 className="fw-bold">AlsiBackpackers</h4>
  <small className="text-muted mt-4">
    Discover the world with AlsiBackpackers 
  </small>

  {/* Group Travel Section */}
  <div className="p-3 rounded-4 mt-2 bg-white border border-light">
    <h6 className="fw-semibold text-dark mb-3">Group Travel</h6>
    <div className="d-flex gap-2">
      <button className="btn btn-dark w-50 rounded-pill py-2 shadow-sm">Book</button>
      <button className="btn btn-outline-dark w-50 rounded-pill py-2 shadow-sm">College</button>
    </div>
  </div>

  {/* Carousel for Travel Video with fixed height */}
<div id="mediaCarousel" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="3000">
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

  {/* Carousel for Food Images with fixed height */}
  <div id="foodCarousel" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="3000">
    <div className="carousel-inner rounded-3" style={{ height: "220px",  minHeight: "30vh", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
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
<div className="col-md-6 position-relative text-center d-flex align-items-center justify-content-center p-0 overflow-hidden">
  {/* Curved White Header - Top Center */}
  <div
    className="position-absolute top-0 start-50 translate-middle-x text-dark d-flex justify-content-center align-items-center pb-2 px-3 gap-2 flex-wrap d-none d-md-flex"
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
    <span className="fw-bold border border-2 border-black rounded-pill p-1 px-3 small">
      Beach Getaways
    </span>
    <span className="fw-bold border border-2 border-black rounded-pill p-1 px-3 small">
      Mountain Treks
    </span>
    <span className="fw-bold border border-2 border-black rounded-pill p-1 px-3 small">
      Cultural Tours
    </span>
  </div>

  {/* Video with overlay */}
  <div className="position-relative w-100 h-100" style={{ zIndex: 1, borderRadius: '30px' }}>
    <video
      src="https://videos.pexels.com/video-files/27776045/12221991_1080_1920_24fps.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-100 h-100 object-fit-cover rounded-4"
      style={{ maxHeight: '95vh' }}
    />
    <div
      className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
      style={{ zIndex: 1 }}
    ></div>
  </div>
</div>          {/* Right Column - Highlights */}
          <div className="col-md-3">
            {/* <!-- From Uiverse.io by alexruix -->  */}
<div className=" d-flex align-items-center justify-content-between ms-auto px-3 py-2 " style={{ maxWidth: '100%' }}>
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

<div id="mediaCarousel" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="3000">
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

  {/* Custom Position Indicators */}

  {/* Navigation Controls */}
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#mediaCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-dark rounded-circle p-2"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#mediaCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark rounded-circle p-2"></span>
  </button> */}
</div>
<div className="border rounded mt-4 overflow-hidden" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
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
    <p className="small mb-0">The best stories come from unplanned detours  stories come from unplanned detours stories come from unplanned detours</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  </div>
</div>
          </div>
        </div>
      </div>
    </>
  );
}
