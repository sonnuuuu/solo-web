import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [showNewResponse, setShowNewResponse] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiKey = 'LtG!3WaILg-xvkJzEppFdq2BwmxE2Nz-mg9fEDhY-qxCX-W!jTNze!6yimiW4FkF';
      const response = await axios.post(
        'https://sheet.best/api/sheets/8007a6b3-3597-45c9-91ed-029b2ea7d2a4',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
        setError(null);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setShowNewResponse(true);
        setTimeout(() => {
          setShowNewResponse(false);
          setSubmitted(false);
        }, 4000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError(error.message);
    }
  };

  return (
    <div className="contact-us ">
      <h1>Contact Us</h1>
      <div className="contact-details text-white">
        <div className="address">
          <h2>NALANDA, NO.61, 3RD FLOOR,</h2>
          <p>OPP. BASAVANAGUDI HEAD POST OFFICE</p>
          <p>K R ROAD, BASAVANAGUDI, BENGALURU URBAN, KARNATAKA, 560004</p>
        </div>
        <div className="phone">
          <h2>Phone</h2>
          <p>6358242424</p>
        </div>
        <div className="email">
          <h2>Email:</h2>
          <p>memedd@wldd.in</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        {submitted && !showNewResponse ? (
          <div className="thank-you-message">
            <p>Thank you for your message!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="email">Email:</label>
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
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
        {showNewResponse && (
          <div className="new-response-message">
            <p>Submitted (Masti Nahi Rukni Chaihe )</p>
          </div>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default ContactUs;
