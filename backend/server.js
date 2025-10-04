// Import required modules
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port or default to 5000

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5000', 
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
app.use(express.json()); // Parse JSON request bodies

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail as the email service
  auth: {
    user: process.env.EMAIL_USER, // Email from environment variable
    pass: process.env.EMAIL_PASS, // Email password from environment variable
  },
});

// API endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email
    to: process.env.EMAIL_ME, // Your email (where you want to receive messages)
    subject: `New Message from ${name}`, // Email subject
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send message' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ success: true, message: 'Message sent successfully' });
    }
  });
});

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Food Delivery Web App',
    description: 'Built a full-stack food delivery app with Stripe integration for payments.',
    deployedUrl: 'https://food-delivery-frontend-42lk.onrender.com', // Replace with actual URL
    type: 'project', // Type: project
  },
  {
    id: 2,
    title: 'Gemini Clone',
    description: 'Created a clone of the Gemini app using React and Google\'s API for AI-powered interactions.',
    deployedUrl: 'https://gemini-clone-git-main-monika-sms-projects.vercel.app/', // Replace with actual URL
    type: 'project', // Type: project
  },
  {
    id: 3,
    title: 'Tic Tac Toe',
    description: 'A fun game to sharpen my skills in JavaScript and React.',
    deployedUrl: 'https://tic-tac-toe-game.com', // Replace with actual URL
    type: 'practice', // Type: practice
  },
  {
    id: 4,
    title: 'Rock Paper Scissors',
    description: 'A simple game to practice basic JavaScript concepts.',
    deployedUrl: 'https://rock-paper-scissors-game.com', // Replace with actual URL
    type: 'practice', // Type: practice
  },
  {
    id: 5,
    title: 'Round-Robin Distributor',
    description: 'Web app that distributes coupons sequentially while preventing abuse. No login is required, and users receive clear feedback on their claims.',
    deployedUrl: 'https://robin-coupon-distributor-8jzq.vercel.app/', // Replace with actual URL
    type: 'practice', // Type: practice
  },
];

// API endpoint to get projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}.`);
});
