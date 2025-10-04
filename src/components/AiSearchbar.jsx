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
  const [refernce, setRefernce] = useState("");

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
      setRefernce(data?.results);

      const content = data?.travel_plan || data?.citations || "";
      setResult(content || "No suggestions found.");
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div style={{ 
      backgroundColor: "#fafbfc",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fafbfc 0%, #f0f4f8 50%, #e8edf2 100%)"
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
        animation: "floatBubble 8s ease-in-out infinite",
        zIndex: "0"
      }}></div>
      
      <div style={{
        position: "absolute",
        top: "60%",
        right: "8%",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
        animation: "floatBubble 10s ease-in-out infinite 2s",
        zIndex: "0"
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: "20%",
        left: "15%",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6, 182, 212, 0.07) 0%, transparent 70%)",
        animation: "floatBubble 12s ease-in-out infinite 1s",
        zIndex: "0"
      }}></div>

      {/* Subtle Grid */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        animation: "gridShift 30s linear infinite",
        zIndex: "0"
      }}></div>

      {/* Floating Particles */}
      <div style={{
        position: "absolute",
        top: "30%",
        right: "20%",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "rgba(99, 102, 241, 0.3)",
        animation: "particleDrift 15s ease-in-out infinite",
        zIndex: "0"
      }}></div>

      <div style={{
        position: "absolute",
        bottom: "40%",
        left: "25%",
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "rgba(139, 92, 246, 0.25)",
        animation: "particleDrift 12s ease-in-out infinite 3s",
        zIndex: "0"
      }}></div>

      {/* CSS Animations */}
     

      <div className="container pt-5" style={{ position: "relative", zIndex: "1" }}>
        {/* Hero Section */}
        <div className="row justify-content-center text-center mb-6">
          <div className="col-lg-9">
            <h1 style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              color: "#1e293b",
              marginBottom: "24px",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              animation: "slideUpFade 1s ease-out",
              background: "linear-gradient(135deg, #1e293b, #475569, #1e293b)",
              backgroundSize: "200% 200%",
              animation: "shimmer 3s ease-in-out infinite, slideUpFade 1s ease-out",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Design Your Perfect Journey
            </h1>
            <p style={{
              color: "#64748b",
              fontSize: "1.3rem",
              fontWeight: "300",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
              animation: "slideUpFade 1s ease-out 0.3s both"
            }}>
              AI-powered travel planning that adapts to your style, preferences, and dreams
            </p>
          </div>
        </div>

        {/* Modern Form Section */}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <form onSubmit={handleSubmit} className="row g-4">
              
              {/* Top Row - Main Inputs */}
              <div className="col-md-5">
                <div style={{
                  position: "relative",
                  background: "#ffffff",
                  borderRadius: "20px",
                  border: "2px solid #f1f5f9",
                  padding: "12px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  animation: "slideUpFade 0.8s ease-out 0.5s both, gentlePulse 4s ease-in-out infinite"
                }}>
                  <div style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6366f1",
                    zIndex: "2",
                    
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="start_location"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "20px 20px 20px 56px",
                      color: "#1e293b",
                      fontSize: "1.1rem",
                      outline: "none",
                      borderRadius: "16px",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                    value={formData.start_location}
                    onChange={handleChange}
                    placeholder="Where are you starting from?"
                    onFocus={(e) => {
                      e.target.parentElement.style.borderColor = "#6366f1";
                      e.target.parentElement.style.boxShadow = "0 15px 45px rgba(99, 102, 241, 0.15)";
                      e.target.parentElement.style.transform = "translateY(-5px)";
                    }}
                    onBlur={(e) => {
                      e.target.parentElement.style.borderColor = "#f1f5f9";
                      e.target.parentElement.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.08)";
                      e.target.parentElement.style.transform = "translateY(0)";
                    }}
                  />
                </div>
              </div>

              <div className="col-md-1 d-flex align-items-center justify-content-center">
                <div style={{
                  width: "50px",
                  height: "3px",
                  background: "linear-gradient(90deg, #f1f5f9, #6366f1, #f1f5f9)",
                  borderRadius: "2px",
                  animation: "borderGlow 3s ease-in-out infinite",
                  opacity: "0.8"
                }}></div>
              </div>

              <div className="col-md-5">
                <div style={{
                  position: "relative",
                  background: "#ffffff",
                  borderRadius: "20px",
                  border: "2px solid #f1f5f9",
                  padding: "12px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  animation: "slideUpFade 0.8s ease-out 0.7s both, gentlePulse 4s ease-in-out infinite 1s"
                }}>
                  <div style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#8b5cf6",
                    zIndex: "2",
                   
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0a5.53 5.53 0 0 0-5.5 5.5C2.5 9.795 8 16 8 16s5.5-6.205 5.5-10.5A5.53 5.53 0 0 0 8 0zm0 7.5A2 2 0 1 1 8 3a2 2 0 0 1 0 4.5z"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="destination"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "20px 20px 20px 56px",
                      color: "#1e293b",
                      fontSize: "1.1rem",
                      outline: "none",
                      borderRadius: "16px",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Where would you like to go?"
                    onFocus={(e) => {
                      e.target.parentElement.style.borderColor = "#8b5cf6";
                      e.target.parentElement.style.boxShadow = "0 15px 45px rgba(139, 92, 246, 0.15)";
                      e.target.parentElement.style.transform = "translateY(-5px)";
                    }}
                    onBlur={(e) => {
                      e.target.parentElement.style.borderColor = "#f1f5f9";
                      e.target.parentElement.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.08)";
                      e.target.parentElement.style.transform = "translateY(0)";
                    }}
                  />
                </div>
              </div>

              {/* Middle Row - Details */}
              {[
                { name: "nationality", icon: "#06b6d4", placeholder: "Your nationality", delay: "0.9s" },
                { name: "start_date", icon: "#10b981", placeholder: "Start date", delay: "1s" },
                { name: "end_date", icon: "#f59e0b", placeholder: "End date", delay: "1.1s" }
              ].map((field, index) => (
                <div key={field.name} className="col-md-4">
                  <div style={{
                    position: "relative",
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "2px solid #f1f5f9",
                    padding: "10px",
                    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: `scaleIn 0.8s ease-out ${field.delay} both`
                  }}>
                    <div style={{
                      position: "absolute",
                      left: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: field.icon,
                      zIndex: "2"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        {field.name === "nationality" && <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm-7-9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-10z"/>}
                        {field.name.includes("date") && <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v1H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"/>}
                      </svg>
                    </div>
                    <input
                      type={field.name.includes("date") ? "date" : "text"}
                      name={field.name}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        padding: "16px 16px 16px 44px",
                        color: "#1e293b",
                        fontSize: "1rem",
                        outline: "none",
                        borderRadius: "12px",
                        fontWeight: "500",
                        transition: "all 0.3s ease"
                      }}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      onFocus={(e) => {
                        e.target.parentElement.style.borderColor = field.icon;
                        e.target.parentElement.style.boxShadow = `0 8px 28px ${field.icon}20`;
                        e.target.parentElement.style.transform = "translateY(-3px)";
                      }}
                      onBlur={(e) => {
                        e.target.parentElement.style.borderColor = "#f1f5f9";
                        e.target.parentElement.style.boxShadow = "0 6px 24px rgba(0, 0, 0, 0.06)";
                        e.target.parentElement.style.transform = "translateY(0)";
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Stay Type - Modern Toggle */}
              <div className="col-12">
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "12px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "2px solid #f1f5f9",
                  padding: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                  animation: "scaleIn 0.8s ease-out 1.2s both"
                }}>
                  {["Budget", "Quality", "Luxury"].map((type) => (
                    <div key={type} style={{ position: "relative" }}>
                      <input
                        type="radio"
                        name="stay_type"
                        id={type.toLowerCase()}
                        value={type}
                        checked={formData.stay_type === type}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor={type.toLowerCase()}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "16px 12px",
                          background: formData.stay_type === type 
                            ? "linear-gradient(135deg, #6366f1, #8b5cf6)" 
                            : "transparent",
                          borderRadius: "12px",
                          color: formData.stay_type === type ? "#ffffff" : "#64748b",
                          fontWeight: "600",
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          textAlign: "center",
                          border: formData.stay_type === type ? "none" : "2px solid #f1f5f9",
                          animation: formData.stay_type === type ? "gentlePulse 2s ease-in-out infinite" : "none"
                        }}
                        onMouseEnter={(e) => {
                          if (formData.stay_type !== type) {
                            e.target.style.background = "#f8fafc";
                            e.target.style.borderColor = "#e2e8f0";
                            e.target.style.transform = "translateY(-2px)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (formData.stay_type !== type) {
                            e.target.style.background = "transparent";
                            e.target.style.borderColor = "#f1f5f9";
                            e.target.style.transform = "translateY(0)";
                          }
                        }}
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes Section */}
              <div className="col-12">
                <div style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  border: "2px solid #f1f5f9",
                  padding: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  animation: "slideUpFade 0.8s ease-out 1.3s both"
                }}>
                  <textarea
                    name="additional_data"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "20px",
                      color: "#1e293b",
                      fontSize: "1.1rem",
                      outline: "none",
                      borderRadius: "12px",
                      resize: "none",
                      minHeight: "120px",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                    value={formData.additional_data}
                    onChange={handleChange}
                    placeholder="Tell us about your travel preferences, interests, budget, or special requirements..."
                    onFocus={(e) => {
                      e.target.parentElement.style.borderColor = "#06b6d4";
                      e.target.parentElement.style.boxShadow = "0 15px 45px rgba(6, 182, 212, 0.15)";
                      e.target.parentElement.style.transform = "translateY(-3px)";
                    }}
                    onBlur={(e) => {
                      e.target.parentElement.style.borderColor = "#f1f5f9";
                      e.target.parentElement.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.08)";
                      e.target.parentElement.style.transform = "translateY(0)";
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12 text-center my-4">
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading 
                      ? "#cbd5e1" 
                      : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "white",
                    border: "none",
                    padding: "22px 48px",
                    fontWeight: "600",
                    borderRadius: "16px",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "300px",
                    boxShadow: "0 15px 40px rgba(99, 102, 241, 0.3)",
                    animation: "scaleIn 0.8s ease-out 1.4s both"
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.transform = "translateY(-5px) scale(1.05)";
                      e.target.style.boxShadow = "0 25px 50px rgba(99, 102, 241, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.transform = "translateY(0) scale(1)";
                      e.target.style.boxShadow = "0 15px 40px rgba(99, 102, 241, 0.3)";
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Creating Your Journey...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                      </svg>
                      Generate Travel Plan
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Results - Modern Design */}
            {result && (
              <div style={{
                background: "#ffffff",
                borderRadius: "24px",
                marginTop: "60px",
                padding: "40px",
                border: "2px solid #f1f5f9",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                animation: "slideUpFade 1s ease-out"
              }}>
                <h3 style={{
                  color: "#1e293b",
                  fontWeight: "700",
                  marginBottom: "24px",
                  textAlign: "center",
                  fontSize: "1.8rem",
                  background: "linear-gradient(135deg, #1e293b, #475569)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Your Personalized Journey
                </h3>
                <div style={{
                  color: "#374151",
                  lineHeight: "1.7",
                  fontSize: "1.1rem",
                  background: "#f8fafc",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #f1f5f9",
                  animation: "scaleIn 0.8s ease-out 0.3s both"
                }}>
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* References - Modern Design */}
            {refernce && refernce.length > 0 && (
              <div style={{
                background: "#ffffff",
                borderRadius: "20px",
                marginTop: "40px",
                padding: "32px",
                border: "2px solid #f1f5f9",
                boxShadow: "0 15px 50px rgba(0, 0, 0, 0.08)",
                animation: "slideUpFade 0.8s ease-out"
              }}>
                <h4 style={{
                  color: "#1e293b",
                  fontWeight: "600",
                  marginBottom: "20px",
                  fontSize: "1.3rem"
                }}>
                  Travel Insights
                </h4>
                <div style={{ display: "grid", gap: "12px" }}>
                  {refernce.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#f8fafc",
                        padding: "16px 20px",
                        borderRadius: "12px",
                        border: "1px solid #f1f5f9",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        animation: `scaleIn 0.6s ease-out ${index * 0.1}s both`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#f1f5f9";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f8fafc";
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#6366f1",
                          fontWeight: "600",
                          textDecoration: "none",
                          fontSize: "1rem",
                          display: "block",
                          marginBottom: "6px",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = "#4f46e5";
                          e.target.style.transform = "translateX(5px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = "#6366f1";
                          e.target.style.transform = "translateX(0)";
                        }}
                      >
                        {item.title}
                      </a>
                      {item.snippet && (
                        <p style={{
                          color: "#64748b",
                          margin: "0",
                          fontSize: "0.9rem",
                          lineHeight: "1.5"
                        }}>
                          {item.snippet}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelSearchBar;