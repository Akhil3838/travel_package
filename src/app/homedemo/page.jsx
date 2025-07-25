import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <header className="navbar navbar-expand navbar-light bg-white fixed-top shadow-sm" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="container">
          <div className="navbar-brand me-4">
            <Link href="/" className="text-decoration-none">
              <span className="fw-bold text-gradient">
                AlsiBackpackers
              </span>
            </Link>
          </div>
          
          <div className="navbar-nav me-auto">
            <Link href="/who-we-are" className="nav-link px-3 position-relative hover-effect">
              Who we are ?
              <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{
                width: "0",
                height: "2px",
                transition: "width 0.3s ease",
              }}></span>
            </Link>
            <Link href="/what-we-stand-for" className="nav-link px-3 position-relative hover-effect">
              What we stand for ?
              <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{
                width: "0",
                height: "2px",
                transition: "width 0.3s ease",
              }}></span>
            </Link>
          </div>
          
<div className="navbar-nav ms-auto">
  <Link href="/profile" className="nav-link profile-modern">
    <div className="profile-container">
      <span className="profile-text">My Account</span>
      <div className="profile-avatar">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </div>
    </div>
  </Link>
</div>        </div>
      </header>

      <main style={{ paddingTop: "70px" }}>
        {/* Your page content goes here */}
        <h4  className="text-center mt-5 pb-5 border-bottom">Advantage about trending things</h4>
         
        <form className="register-form">
  <h2 className="form-title">Create Your Account</h2>
  
  <div className="form-group">
    <label htmlFor="name">Full Name</label>
    <input 
      type="text" 
      id="name" 
      placeholder="Enter your full name" 
      className="form-input"
    />
  </div>
  
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input 
      type="email" 
      id="email" 
      placeholder="Enter your email" 
      className="form-input"
    />
  </div>
  
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input 
      type="password" 
      id="password" 
      placeholder="Create a password" 
      className="form-input"
    />
  </div>
  
  <button type="submit" className="register-button">
    Register Now
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  </button>
  
  <p className="login-link">
    Already have an account? <a href="/login">Log in</a>
  </p>
</form>



      </main>
    </>
  );
}