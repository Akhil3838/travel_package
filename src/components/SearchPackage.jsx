import { searchPackageApi } from '@/services/allApi'
import React, { useEffect, useState } from 'react'

function SearchPackage() {
  const [query, setQuery] = useState("");       // Search input
  const [results, setResults] = useState([]);   // Search results

  // API call
  const searchPackage = async (searchTerm) => {
    try {
      const result = await searchPackageApi(searchTerm);
      console.log("API Response:", result);
      setResults(result?.data?.package || []); // ✅ correct access
    } catch (error) {
      console.error("Error searching packages:", error);
    }
  };

  // Debounced search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        searchPackage(query);
      } else {
        setResults([]); // clear when empty
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between ms-auto px-3 py-2 animate-on-load" style={{ maxWidth: '100%' }}>
        
        {/* Search Input */}
        <div className="d-flex align-items-center position-relative me-1">
          <svg
            className="position-absolute ms-2"
            width="20"
            height="20"
            fill="#888"
            viewBox="0 0 24 24"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </svg>
          <input
            type="search"
            className="form-control ps-5"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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

      {/* Show Results */}
<div className="results-container mt-3 px-3">
  {results.length > 0 ? (
    <ul className="package-list list-group">
      {results.map((pkg) => (
        <li key={pkg.id} className="package-item list-group-item">
          <div className="package-content d-flex align-items-center">
            <div className="package-image mr-3">
              <img 
                src={pkg?.thumbnails[0]?.image} 
                alt={pkg.package_title}
                className="package-thumbnail"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/40?text=📦';
                }}
              />
            </div>
            <div className="package-details flex-grow-1">
              <h5 className="package-title mb-0">{pkg.package_title}</h5>
              {pkg.author && (
                <small className="package-author text-muted">by {pkg.author}</small>
              )}
            </div>
            <div className="package-arrow ml-2">
              <i className="fas fa-chevron-right text-secondary"></i>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : query.trim() ? (
    <div className="no-results text-center py-4">
      <div className="no-results-icon mb-3">
        <i className="far fa-frown fa-3x text-muted"></i>
      </div>
      <h4 className="no-results-title">No packages found</h4>
      <p className="no-results-message text-muted">
        We couldn't find any packages matching "{query}"
      </p>
      <button className="btn btn-primary mt-3">
        <i className="fas fa-plus mr-2"></i>
        Request Package
      </button>
    </div>
  ) : null}
</div>    </>
  );
}

export default SearchPackage;
