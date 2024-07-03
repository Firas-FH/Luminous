import React, { useState, useEffect } from 'react';
import '../NavBar/NavBarStyle.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
          <span>Luminous</span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="/" className={activeLink === '/' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={activeLink === '/about' ? 'active' : ''}>
            About Us
          </a>
        </li>
        <li>
          <a href="/services" className={activeLink === '/services' ? 'active' : ''}>
            Services
          </a>
        </li>
        <li>
          <a href="/gallery" className={activeLink === '/gallery' ? 'active' : ''}>
            Gallery
          </a>
        </li>
        <li>
          <a href="/testimonials" className={activeLink === '/testimonials' ? 'active' : ''}>
            Testimonials
          </a>
        </li>
        <li>
          <a href="/team" className={activeLink === '/team' ? 'active' : ''}>
            Team
          </a>
        </li>
        <li>
          <a href="/contact" className={activeLink === '/contact' ? 'active' : ''}>
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <img className="moon" src={'./Picture/moon.svg'} alt="moon" />
        <span className="language">EN</span>
      </div>
      <div>
        <Link to={'./signup'}>
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/Picture/menu.svg" alt="menu icon" className="menu-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
