"use client"; // if using Next.js App Router

import { searchAi } from "@/services/allApi";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown"; // ✅ import for markdown rendering

function TravelSearchBar() {
  const [formData, setFormData] = useState({
    start_location: "",
    destination: "",
    nationality: "",
    start_date: "",
    end_date: "",
    cuisine_preference: "",
    interests: "",
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
    <div className="container my-5 p-4 rounded shadow bg-light">
      {/* Title */}
      <h2
        className="text-center mb-4 fw-bold"
        style={{
          color: "#2c3e50",
          fontSize: "2.2rem",
          letterSpacing: "1px",
        }}
      >
        ✈️ <span style={{ color: "#27ae60" }}>Aasi</span>
        <span style={{ color: "#e67e22" }}>backpackers</span>
      </h2>
      <p className="text-center text-muted mb-5" style={{ fontSize: "1.1rem" }}>
        Discover. Explore. Experience. – Plan Your Next Adventure With Us 🌍
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="row g-3">
        {/* Start Location */}
        <div className="col-md-6">
          <label className="form-label">Start Location</label>
          <input
            type="text"
            name="start_location"
            className="form-control"
            value={formData.start_location}
            onChange={handleChange}
          />
        </div>

        {/* Destination */}
        <div className="col-md-6">
          <label className="form-label">Destination</label>
          <input
            type="text"
            name="destination"
            className="form-control"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>

        {/* Nationality */}
        <div className="col-md-6">
          <label className="form-label">Nationality</label>
          <input
            type="text"
            name="nationality"
            className="form-control"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>

        {/* Cuisine Preference */}
        <div className="col-md-6">
          <label className="form-label">Cuisine Preference</label>
          <input
            type="text"
            name="cuisine_preference"
            className="form-control"
            value={formData.cuisine_preference}
            onChange={handleChange}
          />
        </div>

        {/* Dates */}
        <div className="col-md-6">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            name="start_date"
            className="form-control"
            value={formData.start_date}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">End Date</label>
          <input
            type="date"
            name="end_date"
            className="form-control"
            value={formData.end_date}
            onChange={handleChange}
          />
        </div>

        {/* Interests */}
        <div className="col-md-12">
          <label className="form-label">Select Interests</label>
          <input
            type="text"
            name="interests"
            className="form-control"
            placeholder="Cultural Tours, Adventure..."
            value={formData.interests}
            onChange={handleChange}
          />
        </div>

        {/* Stay Type */}
        <div className="col-md-12">
          <label className="form-label d-block">Stay Type</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="stay_type"
              value="Affordable"
              checked={formData.stay_type === "Affordable"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">Affordable</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="stay_type"
              value="Quality"
              checked={formData.stay_type === "Quality"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">Quality</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="stay_type"
              value="Highly Rated"
              checked={formData.stay_type === "Highly Rated"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">Highly Rated</label>
          </div>
        </div>

        {/* Notes */}
        <div className="col-md-12">
          <label className="form-label">Additional Trip Details / Notes</label>
          <textarea
            name="additional_data"
            className="form-control"
            rows="3"
            value={formData.additional_data}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <div className="col-12 text-center">
          <button
            type="submit"
            className="btn btn-success px-5 py-2"
            disabled={loading}
          >
            {loading ? "Generating..." : "🌍 Generate My Plan"}
          </button>
        </div>
      </form>

      {/* Result */}
      {result && (
        <div className="mt-4 p-3 border rounded bg-white shadow-sm">
          <h5 className="text-success">📝 Your End-to-End Travel Plan</h5>
          <div
            className="p-4 border rounded shadow-sm bg-white"
            style={{
              lineHeight: "1.6",
              fontSize: "1rem",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {/* ✅ Render Markdown properly */}
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default TravelSearchBar;
