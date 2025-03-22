import React, { useState } from 'react';
import olaf from '../assets/olaf.png'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      if (data.success) {
        setPopupMessage('Message sent successfully!');
        setShowPopup(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setPopupMessage('Failed to send message. Please try again.');
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setPopupMessage('An error occurred. Please try again.');
      setShowPopup(true);
    }
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      {/* Olaf image and attractive lines container */}
      <div className="contact-header">
        <div className="olaf-container">
          <img src={olaf} alt="Olaf" className="olaf-image" />
        </div>
        <div className="contact-lines">
          <p className="line1">Reach out and let’s melt the ice!</p>
          <p className="line2">Your message warms my snowy heart!</p>
        </div>
      </div>
      {/* Contact form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {/* Popup for confirmation */}
      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </section>
  );
};

export default Contact;