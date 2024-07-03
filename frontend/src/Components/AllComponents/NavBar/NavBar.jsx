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
          <Link to={"/"} className={activeLink === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className={activeLink === '/about' ? 'active' : ''}>
            About Us
          </Link>
        </li>
        <li>
          <Link to={"/services"} className={activeLink === '/services' ? 'active' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link to={"/gallery"} className={activeLink === '/gallery' ? 'active' : ''}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to={"/testimonials"} className={activeLink === '/testimonials' ? 'active' : ''}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to={"/team"} className={activeLink === '/team' ? 'active' : ''}>
            Team
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className={activeLink === '/contact' ? 'active' : ''}>
            Contact
          </Link>
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
