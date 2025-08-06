'use client'
import React, { useState } from 'react';

function BusBooking() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ from, to, date, passengers });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bus-booking-container">
      <div className="booking-card">
        <div className="card-header">
          <h2 className="text-center">
            <i className="fas fa-bus me-2"></i> Bus Ticket Booking
          </h2>
          <p className="text-center text-muted">Find and book your perfect bus journey</p>
        </div>
        
        <form onSubmit={handleSearch}>
          <div className="location-inputs">
            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="input-field">
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  id="from"
                  placeholder="Departure city"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>
              {/* <button 
                type="button" 
                className="swap-btn"
                onClick={() => {
                  const temp = from;
                  setFrom(to);
                  setTo(temp);
                }}
                aria-label="Swap destinations"
              >
                <i className="fas fa-exchange-alt"></i>
              </button> */}
            </div>

            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="input-field">
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  id="to"
                  placeholder="Destination city"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="secondary-inputs">
            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-calendar-day"></i>
              </div>
              <div className="input-field">
                <label htmlFor="date">Travel Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="input-field">
                <label>Passengers</label>
                <div className="dropdown">
                  <button
                    className="passenger-selector"
                    type="button"
                    onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                  >
                    <span>
                      {passengers} {passengers === 1 ? 'Passenger' : 'Passengers'}
                    </span>
                    <i className={`fas fa-chevron-down ${showPassengerDropdown ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {showPassengerDropdown && (
                    <div className="dropdown-menu show">
                      <div className="passenger-controls">
                        <span className="label">Passengers</span>
                        <div className="counter">
                          <button 
                            type="button" 
                            className="counter-btn"
                            onClick={() => setPassengers(Math.max(1, passengers - 1))}
                            disabled={passengers <= 1}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className="count">{passengers}</span>
                          <button 
                            type="button" 
                            className="counter-btn"
                            onClick={() => setPassengers(passengers + 1)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="search-btn"
          >
            <i className="fas fa-search me-2"></i> Search Buses
          </button>
        </form>

        <div className="popular-routes">
          <p className="section-title">Popular routes:</p>
          <div className="route-tags">
            {[
              { from: 'New York', to: 'Boston' },
              { from: 'Los Angeles', to: 'San Francisco' },
              { from: 'Chicago', to: 'Detroit' },
              { from: 'Miami', to: 'Orlando' },
              { from: 'Seattle', to: 'Portland' },
              { from: 'Dallas', to: 'Houston' },
            ].map((route, index) => (
              <button 
                key={index}
                className="route-tag"
                onClick={() => {
                  setFrom(route.from);
                  setTo(route.to);
                }}
              >
                {route.from} → {route.to}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusBooking;