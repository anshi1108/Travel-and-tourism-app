import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../Assets/logo.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section: Logo and Title */}
      <div className="nav-logo">
        <Link className="navbar-brand" to="/">
          <p className="navbar-title">Trivy</p>
        </Link>
      </div>

      {/* Right section: Navigation Links and Search Bar */}
      <div className="nav-menu">
        <li className="nav-link">
          <Link to="/explore">
            <div className="nav-icon-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2439/2439655.png"
                alt="Explore"
                className="nav-icon"
              />
              <span className="tooltip-text">Explore</span>
            </div>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/home/Forum">
            <div className="nav-icon-wrapper">
              <img
                src="https://img.icons8.com/?size=100&id=11881&format=png&color=000000"
                alt="Forum"
                className="nav-icon"
              />
              <span className="tooltip-text">Forum</span>
            </div>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/home/SocialMedia">
            <div className="nav-icon-wrapper">
              <img
                src="https://img.icons8.com/?size=100&id=13071&format=png&color=000000"
                alt="Social Media"
                className="nav-icon"
              />
              <span className="tooltip-text">Social Media</span>
            </div>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/map">
            <div className="nav-icon-wrapper">
              <img
                src="https://img.icons8.com/?size=100&id=42925&format=png&color=000000"
                alt="Map"
                className="nav-icon"
              />
              <span className="tooltip-text">Map</span>
            </div>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/home/notification">
            <div className="nav-icon-wrapper">
              <img
                src="https://img.icons8.com/?size=100&id=9RaQIJXn5XR9&format=png&color=000000"
                alt="Notification"
                className="nav-icon"
              />
              <span className="tooltip-text">Notification</span>
            </div>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/login">
            <div className="nav-icon-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
                alt="Login"
                className="nav-icon"
              />
              <span className="tooltip-text">Login</span>
            </div>
          </Link>
        </li>
      </div>

      {/* Search Bar */}
      <div className="nav-login-cart">
        <form className="navbar-search">
          <input className="search-input" type="search" placeholder="Search..." aria-label="Search" />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
