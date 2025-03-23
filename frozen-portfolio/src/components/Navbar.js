import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navbarIcon from '../assets/snowflake.png'; // Add your icon path
import '../index.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Scrolled down
      } else {
        setIsScrolled(false); // At the top
      }
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="icon-container">
        <img src={navbarIcon} alt="Navbar Icon" className="icon" />
      </div>
      <div className="links-container">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/skills" className="link">Skills</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/contact" className="link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;