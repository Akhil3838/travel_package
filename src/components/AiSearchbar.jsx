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
    <div className="container my-4">
      {/* Hero Section */}
      <div className="row justify-content-center mb-2 ">
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
            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit} className="row g-4">
                {/* Start Location */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Start Location</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      {/* Airplane Takeoff SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                        <path d="M2.5 16a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"/>
                        <path d="M6.428 1.151c.248-.64 1.147-.64 1.395 0l1.309 3.382 4.056 1.238c.65.198.65 1.03 0 1.228l-4.056 1.238-1.309 3.382c-.248.64-1.147.64-1.395 0l-1.309-3.382-4.056-1.238c-.65-.198-.65-1.03 0-1.228l4.056-1.238 1.309-3.382z"/>
                      </svg>
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
                      {/* Map Pin SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" viewBox="0 0 16 16">
                        <path d="M8 0a5.53 5.53 0 0 0-5.5 5.5C2.5 9.795 8 16 8 16s5.5-6.205 5.5-10.5A5.53 5.53 0 0 0 8 0zm0 7.5A2 2 0 1 1 8 3a2 2 0 0 1 0 4.5z"/>
                      </svg>
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
                      {/* Flag SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="orange" viewBox="0 0 16 16">
                        <path d="M14.778 3.447c-1.4-.35-2.67-.584-3.9-.847C9.663 2.33 8.5 2.088 7.278 1.84c-1.1-.221-2.2-.442-3.3-.663-.389-.078-.678.236-.678.597v12.386a.5.5 0 0 0 1 0V9.979c1.04.209 2.08.419 3.12.628 1.176.238 2.35.478 3.527.715 1.23.263 2.5.498 3.9.847.39.097.653-.236.653-.597V4.044a.5.5 0 0 0-.653-.597z"/>
                      </svg>
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

                {/* Start Date */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Start Date</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      {/* Calendar Event SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="teal" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v1H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"/>
                      </svg>
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

                {/* End Date */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">End Date</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      {/* Calendar Check SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="teal" viewBox="0 0 16 16">
                        <path d="M2 2h12a2 2 0 0 1 2 2v1H0V4a2 2 0 0 1 2-2zM0 7v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm11.854-1.646a.5.5 0 0 0-.708-.708L7 9.793 4.854 7.646a.5.5 0 0 0-.708.708L6.293 11l5.561-5.646z"/>
                      </svg>
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
                    <label className="btn btn-outline-dark" htmlFor="affordable">
                      {/* Coin SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
                        <path d="M4.285 12.433c.003-.485.019-.905.07-1.27.07-.51.248-.85.49-1.11.244-.262.563-.44.998-.526v-.029c-.379-.106-.68-.279-.887-.514-.215-.242-.327-.561-.393-1.052-.04-.317-.053-.72-.058-1.21h-.968v-1.07h.975V3.857h1.138v1.695h1.138v1.07H6.021c.004.452.014.79.05 1.05.057.396.184.654.365.844.186.197.447.319.824.39V8.93c-.47.07-.811.237-1.058.504-.253.272-.37.63-.437 1.152a12.3 12.3 0 0 0-.073 1.209h-.984v1.07h.977v1.694h1.138v-1.694h.977v-1.07H5.423z"/>
                      </svg>
                      Budget
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
                    <label className="btn btn-outline-dark" htmlFor="quality">
                      {/* Star SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792c-.197-.39-.73-.39-.927 0L5.354 5.074l-4.898.696c-.441.062-.612.636-.282.95l3.522 3.356-.83 4.73z"/>
                      </svg>
                      Quality
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
                    <label className="btn btn-outline-dark" htmlFor="highly-rated">
                      {/* Award SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                        <path d="M4 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
                        <path d="M11 8.414V15l-3-1.5L5 15V8.414a5.97 5.97 0 0 0 2.5.586 5.97 5.97 0 0 0 2.5-.586z"/>
                      </svg>
                      Luxury
                    </label>
                  </div>
                </div>

                {/* Notes */}
                <div className="col-12">
                  <label className="form-label fw-semibold">
                    {/* Pencil Square SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="me-2" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706l-1.043 1.043-2.12-2.12 1.043-1.043a.5.5 0 0 1 .707 0l1.413 1.414z"/>
                      <path d="M14.458 3.647 5.207 12.9l-.707-.707L13.75 2.94l.707.707zM4.5 13.207 3.793 12.5l-.793.793V14h1.5v-1.5z"/>
                    </svg>
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
                        {/* Magic Wand SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="me-2" viewBox="0 0 16 16">
                          <path d="M9.828 5.172a4 4 0 1 1-5.656 5.656l5.656-5.656z"/>
                          <path d="M6.343 9.657a4 4 0 1 1 5.656-5.656l-5.656 5.656z"/>
                        </svg>
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
                  {/* Journal Check SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="green" className="me-2" viewBox="0 0 16 16">
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2.5 4.5a.5.5 0 0 0-1 0V6h1V4.5zm2.5 0a.5.5 0 0 0-1 0V6h1V4.5zM8 8a.5.5 0 0 0-.5.5V10h1V8.5A.5.5 0 0 0 8 8zm2.5 0a.5.5 0 0 0-1 0V10h1V8.5a.5.5 0 0 0-.5-.5z"/>
                  </svg>
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
