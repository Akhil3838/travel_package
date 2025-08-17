"use client"; // if using Next.js App Router

import { searchAi } from "@/services/allApi";
import React, { useState, useEffect } from "react";

function TravelSearchBar() {
  const [formData, setFormData] = useState({ query: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.query.trim()) return;

  setLoading(true);
  setResult("");

  try {
    console.log("Query:", formData);

const data = await searchAi(formData);
console.log("AI Response:", data);

const content =
  data?.choices?.[0]?.message?.content ||
  data?.choices?.[0]?.delta?.content ||
  "";

setResult(content || "No suggestions found.");
  } catch (error) {
    console.error("Error:", error);
    setResult("Something went wrong. Try again later.");
  }

  setLoading(false);
};

  const clearInput = () => setFormData({ query: "" });

  // Optional: watch result changes
  useEffect(() => {
    if (result) console.log("Updated result:", result);
  }, [result]);

  return (
    <div className="container my-5 py-4">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-dark mb-3">WanderAI</h1>
        <p className="lead text-dark">
          Your smart travel assistant - find perfect destinations, hotels, and
          experiences
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form onSubmit={handleSubmit}>
            <div className="input-group input-group-lg shadow-lg rounded-pill overflow-hidden bg-white text-dark bg-opacity-25">
              <span className="input-group-text border-0">
                <i className="fa-solid fa-location-dot text-warning"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 py-3 px-2 bg-transparent text-dark"
                value={formData.query}
                onChange={(e) =>
                  setFormData({ ...formData, query: e.target.value })
                }
                placeholder="Where would you like to go next?"
                aria-label="Travel destination search"
                style={{ backdropFilter: "blur(5px)" }}
              />

              {formData.query && (
                <button
                  type="button"
                  className="btn btn-link text-dark position-absolute end-0 top-50 translate-middle-y me-5"
                  onClick={clearInput}
                  style={{ zIndex: 5 }}
                >
                  <i className="fa-solid fa-xmark fs-4"></i>
                </button>
              )}

              <button className="btn btn-warning px-4 text-dark" type="submit">
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  <i className="fa-solid fa-magnifying-glass fs-5"></i>
                )}
              </button>
            </div>
          </form>

          {/* AI Result */}
          {result && (
            <div className="mt-4 p-3 border rounded bg-light text-dark shadow-sm">
              <h5>Suggestions:</h5>
              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelSearchBar;
