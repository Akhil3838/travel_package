import React, { useState } from "react";
import PackageCard from "@/components/PackageCard";

const PackageList = ({ packages, totalpage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalpage) {
      setCurrentPage(page);
      if (onPageChange) onPageChange(page); // notify parent
    }
  };

  return (
    <div className="col-lg-9">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="text-muted me-2">Showing</span>
          <strong>1-{packages.length}</strong> of {packages.length} tours
        </div>
        <div>
          <select className="form-select form-select-sm">
            <option>Sort by: Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
            <option>Duration</option>
          </select>
        </div>
      </div>

      {/* Packages */}
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}

      {/* Pagination */}
      <nav aria-label="Pagination" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {[...Array(totalpage)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <li
                key={pageNum}
                className={`page-item ${currentPage === pageNum ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageClick(pageNum)}
                >
                  {pageNum}
                </button>
              </li>
            );
          })}

          <li className={`page-item ${currentPage === totalpage ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalpage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PackageList;
