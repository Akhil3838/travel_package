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
        <PackageCard key={pkg.id} pkg={pkg}/>
      ))}

      {/* Pagination */}
<nav aria-label="Pagination" style={{ marginTop: "20px", textAlign: "center" }}>
  <ul
    style={{
      display: "flex",
      listStyle: "none",
      padding: 0,
      justifyContent: "center",
      gap: "8px",
    }}
  >
    {/* Previous Button */}
    <li>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "8px 14px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          backgroundColor: currentPage === 1 ? "#f5f5f5" : "#fff",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          color: currentPage === 1 ? "#aaa" : "#333",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
      >
        &lt;
      </button>
    </li>

    {/* Page Numbers */}
    {[...Array(totalpage)].map((_, index) => {
      const pageNum = index + 1;
      return (
        <li key={pageNum}>
          <button
            className={currentPage === pageNum ? "active" : ""}
            onClick={() => handlePageClick(pageNum)}
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: currentPage === pageNum ? "1px solid #007bff" : "1px solid #ddd",
              backgroundColor: currentPage === pageNum ? "#007bff" : "#fff",
              color: currentPage === pageNum ? "#fff" : "#333",
              fontWeight: currentPage === pageNum ? "600" : "400",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {pageNum}
          </button>
        </li>
      );
    })}

    {/* Next Button */}
    <li>
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalpage}
        style={{
          padding: "8px 14px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          backgroundColor: currentPage === totalpage ? "#f5f5f5" : "#fff",
          cursor: currentPage === totalpage ? "not-allowed" : "pointer",
          color: currentPage === totalpage ? "#aaa" : "#333",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
      >
        &gt;
      </button>
    </li>
  </ul>
</nav>
    </div>
  );
};

export default PackageList;
