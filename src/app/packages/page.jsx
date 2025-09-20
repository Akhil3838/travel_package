'use client'
import React, { useEffect, useState } from "react";
import PackageList from "@/components/PackageList";
import FilterSidebar from "@/components/FilterSlidebar";
import { getAllPackages } from "@/services/allApi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Packages = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  const [filters, setFilters] = useState(null);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const Allpackages = async (appliedFilters = null, page = 1) => {
    try {
      const result = await getAllPackages({ ...appliedFilters, page });
      setTotalPage(result?.data?.total || 1);
      setTravelPackages(result?.data?.packages || []);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    Allpackages(filters, currentPage);
  }, [filters, currentPage]);

  const handleApplyFilters = (filterData) => {
    setFilters(filterData);
    setCurrentPage(1); // reset to first page when applying filters
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
<>
<Header/>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">Discover the Grand Canyon</h2>
          <p className="lead text-muted">
            Explore our curated selection of unforgettable adventures
          </p>
        </div>
  
        <div className="row">
          <FilterSidebar onApplyFilters={handleApplyFilters} />
          <PackageList
            packages={travelPackages}
            totalpage={totalPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
  <Footer/>
</> 
 );
};

export default Packages;
