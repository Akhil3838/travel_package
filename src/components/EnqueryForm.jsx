'use client'
import { saveEnquery } from '@/services/allApi';
import React, { useState } from 'react';

function EnquiryForm({ packageId }) {
  console.log(packageId);
  
  const [formData, setFormData] = useState({
    package_id: packageId || '', // Pass packageId as prop
    name: '',
    email_id: '',
    phone_number: '',
    country: '',
    number_of_persons: 1,
    lead_traveller: '',
    message_box: '',
    booking_date: '',
  });
console.log(formData);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        fd.append(key, value);
      });

      const result = await saveEnquery(fd);
      console.log("Enquiry saved:", result);
      alert("Enquiry submitted successfully!");
    } catch (error) {
      console.error('Error saving enquiry:', error);
      alert("Failed to submit enquiry");
    }
  };

  return (
    <div className="col-lg-4">
      <div className="sticky-top" style={{ top: '20px' }}>
        <div className="card border-0 shadow-sm mb-2 p-3">
          <div className="card-body">
            <h4 className="fw-bold mb-3">Enquiry Form</h4>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email ID */}
              <div className="mb-3">
                <label className="form-label">Email ID:</label>
                <input
                  type="email"
                  name="email_id"
                  value={formData.email_id}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="mb-3">
                <label className="form-label">Phone Number:</label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Country */}
              <div className="mb-3">
                <label className="form-label">Country:</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your country"
                  required
                />
              </div>

              {/* Number of Persons */}
              <div className="mb-3">
                <label className="form-label">Number of Persons:</label>
                <select
                  name="number_of_persons"
                  value={formData.number_of_persons}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Lead Traveller */}
              <div className="mb-3">
                <label className="form-label">Lead Traveller:</label>
                <input
                  type="text"
                  name="lead_traveller"
                  value={formData.lead_traveller}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter lead traveller name"
                  required
                />
              </div>

              {/* Message Box */}
              <div className="mb-3">
                <label className="form-label">Message:</label>
                <textarea
                  name="message_box"
                  value={formData.message_box}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Booking Date */}
              <div className="mb-3">
                <label className="form-label">Booking Date:</label>
                <input
                  type="date"
                  name="booking_date"
                  value={formData.booking_date}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-gradient-primary text-light w-100 fw-bold py-3 rounded-pill shadow-sm">
                Enquiry Now
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;
