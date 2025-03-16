import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the backend
    try {
      const response = await fetch('https://frozen-portfolio.onrender.com/api/contact', {
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
      
        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
      
        // Automatically close the popup after 3 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      
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
