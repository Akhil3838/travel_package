import { getNewPkg } from '@/services/allApi';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function PopularPackages() {
  const [trendingPackages, setTrendingPackages] = useState([]);

  const fetchTrendingPackages = async () => {
    try {
      const result = await getNewPkg();
      setTrendingPackages(result?.data?.new_packages || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchTrendingPackages();
  }, []);

  return (
    <div className="container px-4">
      <div className="section-header text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Popular Travel Packages</h2>
        <p className='text-muted fs-5'>
          Curated experiences loved by travelers worldwide
        </p>
      </div>

      <div
        className="row g-4 pb-4 scroll-hide"
        style={{
          scrollSnapType: 'x mandatory',
          overflowX: 'auto',
          flexWrap: 'nowrap'
        }}
      >
        {trendingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="col-11 col-md-6 col-lg-4 flex-shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="package-card h-100 border-0 shadow-sm overflow-hidden rounded-4">
<Link href={`/packageDetails/${pkg.slug}`} style={{ textDecoration: 'none' }}>
                <div className="package-img-container position-relative">
                  <img
                    src={pkg.packimages?.[0]?.image || '/default-image.jpg'}
                    alt={pkg.package_title}
                    className="img-fluid w-100"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  {pkg.add_badge_status === 'yes' && (
                    <div className="package-tag bg-dark text-white position-absolute top-3 end-3 px-3 py-1 rounded-pill small fw-bold">
                      {pkg.badge?.title || 'FEATURED'}
                    </div>
                  )}
                </div>
  
</Link>
              <div className="package-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-info bg-opacity-10 text-info">
                    {pkg.days} Days
                  </span>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-star text-warning me-1 small"></i>
                    <span className="small">
                      {pkg.review_stars} ({pkg.total_review_count})
                    </span>
                  </div>
                </div>

                <h3 className="h5 fw-bold mb-2">{pkg.package_title}</h3>
                <p className="text-muted mb-3">{pkg.small_description}</p>

                <div className="package-details mb-4">
                  {pkg.inclusions?.slice(0, 3).map((inc) => (
                    <div
                      className="d-flex align-items-center mb-2"
                      key={inc.id}
                    >
                      <i className="fas fa-check text-dark me-2"></i>
                      <span className="small">{inc.title}</span>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <div>
                    {pkg.special_price && pkg.special_price < pkg.price ? (
                      <>
                        <span className="text-decoration-line-through text-muted me-2 small">
                          ₹{pkg.price}
                        </span>
                        <span className="h5 fw-bold text-dark">
                           ₹{pkg.special_price}
                        </span>
                      </>
                    ) : (
                      <span className="h5 fw-bold text-dark">${pkg.price}</span>
                    )}
                  </div>
                  <Link href={`/packageDetails/${pkg.slug}`}>
                    <button className="btn btn-light  rounded-pill px-3 py-2">
                      <span className="small fw-bold">Enquery Now</span>
                      <i className="fas fa-arrow-right ms-2 small"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href={'/packages'} style={{ textDecoration: 'none' }}>
        <div className="text-center mt-4">
          <button className="btn view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
            <span>View All Destinations</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right ms-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 
                .708-.708l5 5a.5.5 0 0 1 
                0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 
                8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default PopularPackages;
