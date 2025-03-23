import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Lottie from 'lottie-react';
import snowflakeAnimation from './assets/snowflake.json'; // Add your JSON file path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import leetcodeIcon from './assets/leetcode-icon.png'; // Ensure this file is in src/assets
import olafImage from './assets/olaf.png';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="snowflake-container">
          <Lottie animationData={snowflakeAnimation} loop={true} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <section className="home">
                <div className="home-content">
                  {/* Welcome Text and Olaf Image Container */}
                  <div className="welcome-container">
                    <h1 className='heading'>Welcome to My Portfolio!</h1>
                    <div className="olaf-container">
                      <img src={olafImage} alt="Olaf" className="olaf-image" />
                    </div>
                  </div>

                  {/* Social Icons with Names */}
                  <div className="social-links">
                    <a href="hhttps://github.com/moni-sm" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="icon" />
                      <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/monika--sm/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className="icon" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://www.hackerearth.com/@monika1548/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faHackerrank} className="icon" />
                      <span>HackerEarth</span>
                    </a>
                    <a href="hhttps://leetcode.com/u/Moni_1009/" target="_blank" rel="noopener noreferrer">
                      <img src={leetcodeIcon} alt="LeetCode" className="icon" />
                      <span>Leetcode</span>
                    </a>
                  </div>

                  {/* Brief Experience Section */}
                  <div className="brief-experience">
                    <h2>My Experience</h2>
                    <ul>
                      <li>
                        <strong>Food Delivery Web App (MERN Stack):</strong> Built a full-stack food delivery app with Stripe integration for payments.<Link to="/projects">View Projects</Link>
                      </li>
                      <li>
                        <strong>Gemini Clone (React + Google API):</strong> Created a clone of the Gemini app using React and Google's API for AI-powered interactions. <Link to="/projects">View Projects</Link>
                      </li>
                      <li>
                        <strong>Practice Projects:</strong> Developed fun games like Tic Tac Toe and Rock Paper Scissors to sharpen my skills.<Link to="/projects">View Projects</Link>
                      </li>
                      <li>
                        <strong>Round-Robin Distributor:</strong> Built a coupon distribution system that ensures users get a new coupon only after 60 minutes. <Link to="/projects">View Projects</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Explore Content Section */}
                  <div className="explore-content">
                    <h2>Explore My Work</h2>
                    <p>
                      Dive into my projects, skills, and experiences to see how I bring ideas to life. Whether you're here to collaborate or just explore, there's something for everyone!
                    </p>
                  </div>

                  {/* Recent Updates Section */}
                  <div className="recent-updates">
                    <h2>Recent Updates</h2>
                    <ul>
                      <li>
                        <strong>New Project Added:</strong> Check out my latest project on the{' '}
                        <Link to="/projects">Projects</Link> page.
                      </li>
                      <li>
                        <strong>Skills Updated:</strong> I've added new skills to my repertoire. Visit the{' '}
                        <Link to="/skills">Skills</Link> page to see what's new.
                      </li>
                      <li>
                        <strong>Blog Post:</strong> Read my latest blog post on{' '}
                        <Link to="/">Blog</Link>.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
