'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getSearchBus, saveBooking, saveEnquery } from '@/services/allApi';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'; // ✅ correct import

function BusBooking() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [busList, setBusList] = useState([]);
  const [loading, setLoading] = useState(false);
    const router = useRouter(); // ⬅️ initialize router

  // modal states
  const [showModal, setShowModal] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',   
  });

  const today = new Date().toISOString().split('T')[0];

  // Search buses
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBusList([]);

    try {
      const data = await getSearchBus({
        departure: from,
        destination: to,
        travel_date: date,
        passengers: passengers,
      });

      setBusList(data?.data?.data || []);
    } catch (err) {
      console.error('Error fetching buses:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle booking save
  const handleSaveBooking = async (e) => {
    e.preventDefault();

    if (!selectedBus) return;

    try {
      const payload = {
        bus_id: selectedBus.id,
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        departure: selectedBus.departure,
        destination: selectedBus.destination,
        travel_date: selectedBus.travel_date,
        no_of_person: passengers,
      };

      const data = await saveBooking(payload);
      console.log(data);
      
      if (data?.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Bus booking successfully!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          router.push("/"); // ✅ redirect after clicking OK
        });
        
      }

      setShowModal(false);
      setBookingData({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error('Error saving booking:', err);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="bus-booking-container">
        <div className="booking-card">
          <div className="card-header">
            <h2 className="text-center">
              <i className="fas fa-bus me-2"></i> Bus Ticket Booking
            </h2>
            <p className="text-center text-muted">
              Find and book your perfect bus journey
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch}>
            {/* From & To */}
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

            {/* Date & Passengers */}
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

              {/* Passengers */}
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
                      onClick={() =>
                        setShowPassengerDropdown(!showPassengerDropdown)
                      }
                    >
                      <span>
                        {passengers}{' '}
                        {passengers === 1 ? 'Passenger' : 'Passengers'}
                      </span>
                      <i
                        className={`fas fa-chevron-down ${
                          showPassengerDropdown ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </button>

                    {showPassengerDropdown && (
                      <div className="dropdown-menu show">
                        <div className="passenger-controls">
                          <span className="label">Passengers</span>
                          <div className="counter">
                            <button
                              type="button"
                              className="counter-btn"
                              onClick={() =>
                                setPassengers(Math.max(1, passengers - 1))
                              }
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

            <button type="submit" className="search-btn">
              <i className="fas fa-search me-2"></i> Search Buses
            </button>
          </form>

          {/* Search Results */}
          <div className="search-results mt-4">
            {loading && <p className="text-center">Loading buses...</p>}

            {!loading && busList.length > 0 && (
              <>
                <h4 className="mb-3">Available Buses</h4>
                <div className="bus-list">
                  {busList.map((bus) => (
                    <div key={bus.id} className="bus-card">
                      <img
                        src={bus.image}
                        alt={bus.name}
                        className="bus-image"
                      />
                      <div className="bus-details">
                        <h5>{bus.name}</h5>
                        <p>
                          <i className="fas fa-map-marker-alt me-2"></i>
                          {bus.departure} → {bus.destination}
                        </p>
                        <p>
                          <i className="fas fa-calendar-day me-2"></i>
                          {new Date(bus.travel_date).toDateString()}
                        </p>
                        <p className="price">
                          <i className="fas fa-rupee-sign me-2"></i>
                          {bus.price}
                        </p>
                        <button
                          className="book-btn"
                          onClick={() => {
                            setSelectedBus(bus);
                            setShowModal(true);
                          }}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {!loading && busList.length === 0 && (
              <p className="text-center text-muted mt-3">
                No buses found. Try another search.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && selectedBus && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSaveBooking}>
                <div className="modal-header">
                  <h5 className="modal-title">Book {selectedBus.name}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    {selectedBus.departure} → {selectedBus.destination}
                  </p>
                  <p>Date: {new Date(selectedBus.travel_date).toDateString()}</p>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={bookingData.email}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={bookingData.phone}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          phone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default BusBooking;
