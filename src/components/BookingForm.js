import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://m4qf3xpe0f.execute-api.ap-south-1.amazonaws.com/prod/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit booking');
      }

      setStatus({
        loading: false,
        success: true,
        error: null
      });

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        notes: ''
      });

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message
      });
    }
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form-header">
        <h2>Request a Booking</h2>
      </div>
      {status.loading && (
        <div className="status-message loading">
          Submitting booking request...
        </div>
      )}
      {status.success && (
        <div className="status-message success">
          Booking request submitted successfully!
        </div>
      )}
      {status.error && (
        <div className="status-message error">
          Error: {status.error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Type</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="consultation">Consultation</option>
            <option value="training">Training</option>
            <option value="support">Support</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-button"
            disabled={status.loading}
          >
            {status.loading ? 'Submitting...' : 'Submit Booking'}
          </button>
          <button type="button" className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm; 