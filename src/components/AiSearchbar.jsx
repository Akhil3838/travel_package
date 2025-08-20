"use client";

import { searchAi } from "@/services/allApi";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function TravelSearchBar() {
  const [formData, setFormData] = useState({
    start_location: "",
    destination: "",
    nationality: "",
    start_date: "",
    end_date: "",
    stay_type: "Quality",
    additional_data: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      console.log("Form Data:", formData);
      const data = await searchAi(formData);
      console.log("AI Response:", data);

      const content = data?.travel_plan || data?.citations || "";
      setResult(content || "No suggestions found.");
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#112132ff" }}>
            Plan Your Next Adventure
          </h1>
          <p className="lead text-muted mb-4">
            Discover hidden gems, create unforgettable memories, and travel smarter with our AI-powered travel planner
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Form Card */}
          <div className="card border-0 shadow-lg overflow-hidden">
            <div className="card-header p-4" style={{ background: "linear-gradient(135deg, #030906ff 0%, #2c3e50 100%)" }}>
              <h2 className="h3 text-white mb-0 text-center">
                <span style={{ color: "#ffd700" }}>Aasi</span>
                <span style={{ color: "#fff" }}>backpackers</span>
              </h2>
            </div>
            
            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit} className="row g-4">
                {/* Start Location */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Start Location</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-geo-alt-fill text-primary"></i>
                    </span>
                    <input
                      type="text"
                      name="start_location"
                      className="form-control border-start-0 ps-1"
                      value={formData.start_location}
                      onChange={handleChange}
                      placeholder="Where are you traveling from?"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Destination</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-geo-fill text-danger"></i>
                    </span>
                    <input
                      type="text"
                      name="destination"
                      className="form-control border-start-0 ps-1"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Where do you want to go?"
                    />
                  </div>
                </div>

                {/* Nationality */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Nationality</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-flag-fill text-warning"></i>
                    </span>
                    <input
                      type="text"
                      name="nationality"
                      className="form-control border-start-0 ps-1"
                      value={formData.nationality}
                      onChange={handleChange}
                      placeholder="Your nationality"
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Start Date</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-calendar-event text-info"></i>
                    </span>
                    <input
                      type="date"
                      name="start_date"
                      className="form-control border-start-0 ps-1"
                      value={formData.start_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <label className="form-label fw-semibold">End Date</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-calendar-check text-info"></i>
                    </span>
                    <input
                      type="date"
                      name="end_date"
                      className="form-control border-start-0 ps-1"
                      value={formData.end_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Stay Type */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold d-block">Accommodation Preference</label>
                  <div className="btn-group w-100" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="stay_type"
                      id="affordable"
                      value="Affordable"
                      checked={formData.stay_type === "Affordable"}
                      onChange={handleChange}
                    />
                    <label className="btn btn-outline-primary" htmlFor="affordable">
                      <i className="bi bi-coin me-2"></i>Budget
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="stay_type"
                      id="quality"
                      value="Quality"
                      checked={formData.stay_type === "Quality"}
                      onChange={handleChange}
                    />
                    <label className="btn btn-outline-primary" htmlFor="quality">
                      <i className="bi bi-star me-2"></i>Quality
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="stay_type"
                      id="highly-rated"
                      value="Highly Rated"
                      checked={formData.stay_type === "Highly Rated"}
                      onChange={handleChange}
                    />
                    <label className="btn btn-outline-primary" htmlFor="highly-rated">
                      <i className="bi bi-award me-2"></i>Luxury
                    </label>
                  </div>
                </div>

                {/* Notes */}
                <div className="col-12">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-pencil-square me-2 text-success"></i>
                    Additional Trip Details
                  </label>
                  <textarea
                    name="additional_data"
                    className="form-control"
                    rows="3"
                    value={formData.additional_data}
                    onChange={handleChange}
                    placeholder="Tell us about your preferences: cuisine, activities, budget, special requirements, etc."
                    style={{ resize: "none" }}
                  />
                </div>

                {/* Submit */}
                <div className="col-12 text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg px-2 py-2 fw-semibold"
                    disabled={loading}
                    style={{
                      background: "linear-gradient(135deg, #030906ff 0%, #2c3e50 100%)",
                      color: "white",
                      border: "none",
                      transition: "all 0.3s",
                      width: "100%",
                      maxWidth: "300px"
                    }}
                  
                  >
                    {loading ? (
                      <span className="fs-6">
                        <span className="spinner-border spinner-border-sm me-2 " role="status"></span>
                        Creating Your Plan...
                      </span>
                    ) : (
                      <span className="fs-6 bg-transparent">
                        <i className="bi bi-magic me-2 "></i>
                        Generate My Travel Plan
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Result */}
          {result && (
            <div className="card border-0 shadow-lg mt-4 overflow-hidden">
              <div className="card-header p-3" style={{ backgroundColor: "#f8f9fa" }}>
                <h5 className="mb-0 text-success">
                  <i className="bi bi-journal-check me-2"></i>
                  Your Personalized Travel Plan
                </h5>
              </div>
              <div className="card-body p-4">
                <div
                  className="p-3 rounded"
                  style={{
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    backgroundColor: "#fafafa",
                    border: "1px solid #eee"
                  }}
                >
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelSearchBar;