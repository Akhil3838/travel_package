import Link from "next/link";
import React from "react";

const PackageCard = ({ pkg = {} }) => {
  // Destructure with defaults based on your API response
  const {
    id,
    package_title = "Tour Package",
    small_description = "Explore amazing destinations",
    price = 0,
    special_price = price,
    days = "N/A",
    departure = "N/A",
    transport = "Not specified",
    review_stars = 0,
    total_review_count = 0,
    features = "",
    thumbnails = [],
    add_badge_status = "no",
    badge = null,
    category = {},
    slug=""
  } = pkg;

  // Process features into highlights
  const highlights = features ? features.split(',') : [
    "Comfortable transportation",
    "Professional guide",
    "Memorable experience"
  ];

  // Get first thumbnail image or use placeholder
  const imageUrl = thumbnails[0]?.image || "https://via.placeholder.com/300x200?text=Tour+Image";

  // Calculate discount percentage if special price exists
  const discountPercent = special_price < price 
    ? Math.round(((price - special_price) / price) * 100)
    : 0;

  return (
    <div className="card mb-4 border-0 shadow-hover overflow-hidden">
      <div className="row g-0">
        <div className="col-md-4 position-relative">
          {/* Badges */}
          <div className="position-absolute top-0 start-0 m-3 d-flex flex-column">
            {add_badge_status === "yes" && badge && (
              <span className="badge bg-danger mb-2 px-3 py-2 shadow-sm ">
                <i className="fas fa-tag me-1"></i> {badge}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="badge bg-success px-3 py-2 shadow-sm">
                {discountPercent}% Off
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm">
            <i className="fas fa-heart text-danger"></i>
          </button>

          {/* Package image */}
          <img
            src={imageUrl}
            alt={package_title}
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", minHeight: "250px" }}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body h-100 d-flex flex-column">
            {/* Title */}
            <div className="d-flex justify-content-between">
              <h5 className="card-title fw-bold mb-2">{package_title}</h5>
              {category?.title && (
                <span className="badge bg-info d-flex align-items-center justify-content-center">{category.title}</span>
              )}
            </div>

            {/* Rating */}
            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning text-white px-2 py-1 rounded d-flex align-items-center me-2">
                <i className="fas fa-star me-1"></i>
                <span>{review_stars}</span>
              </div>
              <span className="text-muted small">({total_review_count} reviews)</span>
            </div>

            {/* Description */}
            <p className="text-muted small mb-3">{small_description}</p>

            {/* Highlights */}
            <ul className="text-muted small ps-3 mb-3">
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight.trim()}</li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-auto">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <span className="text-muted me-2">
                    <i className="fas fa-bus me-1 text-primary"></i>
                    {transport}
                  </span>
                </div>
                <div>
                  <i className="fas fa-clock me-1 text-primary"></i>
                  <span>{days} days</span>
                </div>
              </div>
              
              {/* Pricing */}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {special_price < price && (
                    <span className="text-decoration-line-through text-muted me-2">
                      ₹{price.toLocaleString()}
                    </span>
                  )}
                  <span className="fw-bold text-danger fs-4">
                   ₹{special_price.toLocaleString()}
                  </span>
                  <span className="text-muted small ms-2">per person</span>
                </div>
                <div className="d-flex gap-2">
               <Link href={`/packageDetails/${slug}`}> <button className="btn btn-outline-primary">Details</button></Link>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with category */}
      <div className="bg-light py-2 px-3 text-center small">
        <span className="text-muted">Departure: {departure}</span>
      </div>
    </div>
  );
};

export default PackageCard;