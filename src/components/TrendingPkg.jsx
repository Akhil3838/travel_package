import { getTrendingPkg } from '@/services/allApi';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function TrendingPkg() {
  const [trendingPackages, setTrendingPackages] = useState([]);

  const fetchTrendingPackages = async () => {
    try {
      const result = await getTrendingPkg();
      console.log(result);
      
      setTrendingPackages(result?.data?.trending_packages || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchTrendingPackages();
  }, []);
console.log(trendingPackages);

  return (
    <div className="container">
      <h2 className="display-5 text-dark fw-bold mb-3 text-center">Trending Destinations</h2>
      <p className="lead text-dark text-center">Explore the most popular travel spots this season</p>

      <div id="locationsCarousel" className="carousel trending-carousel slide">
        <div className="carousel-inner">
          {trendingPackages.length > 0 ? (
            <div className="carousel-item active">
              <div className="row g-4">
                {trendingPackages.map((pkg) => (
                  <div key={pkg.id} className="col-md-6 col-lg-3">
<Link href={`/packageDetails/${pkg.slug}`} style={{ textDecoration: 'none' }}>
                      <div className="location-card">
                        <div className="location-image-container">
                          <img
                            src={pkg.thumbnails[0].image || "https://via.placeholder.com/500x300?text=No+Image"}
                            alt={pkg.package_title}
                            className="location-image"
                          />
                          {pkg.add_badge_status !== 'no' && (
                            <div className="location-badge">{pkg.add_badge_status}</div>
                          )}
                        </div>
                        <div className="location-info p-3">
                          <h3 className="location-name">{pkg.package_title}</h3>
                          <div className="location-meta d-flex justify-content-between align-items-center">
                            <span className="location-price">From ₹{pkg.price || 'N/A'}</span>
                            <span className="location-rating">⭐ {pkg.rating || '4.8'}</span>
                          </div>
                        </div>
                      </div>
  
</Link>                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center my-4">No trending packages found</p>
          )}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#locationsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#locationsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Link href="/packages" style={{ textDecoration: 'none' }}>
        <div className="text-center mt-4">
          <button className="btn view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
            <span>View All Destinations</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 
                0 1 1 .708-.708l5 5a.5.5 
                0 0 1 0 .708l-5 5a.5.5 
                0 1 1-.708-.708L13.293 8.5H1.5A.5.5 
                0 0 1 1 8z" />
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default TrendingPkg;
