import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useState('#000000'); // Default to dark theme
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isThemeBarOpen, setThemeBarOpen] = useState(false);

  // Theme color list (darkest to lightest)
  const themeColors = [
    { color: '#000000', icon: <FaMoon /> }, // Black
    { color: '#3d3d3d', icon: <FaMoon /> }, // Dark Gray
    { color: '#696969', icon: <FaMoon /> }, // Medium Gray
    { color: '#a9a9a9', icon: <FaMoon /> }, // Light Gray
    { color: '#dcdcdc', icon: <FaSun /> },  // Lighter Gray
    { color: '#ffffff', icon: <FaSun /> },  // White
  ];

  // Update theme on hover
  const handleHover = (theme) => {
    setTheme(theme.color);
    document.body.style.backgroundColor = theme.color;
    document.body.style.color = theme.color === '#000000' ? '#ffffff' : '#000000'; // Adjust text color
  };

  return (
    <header className="header" style={{ backgroundColor: theme, color: theme === '#000000' ? '#ffffff' : '#000000' }}>
      <div className="container">
        {/* Logo and Hamburger */}
        <div className="logo-menu">
          <GiHamburgerMenu
            className="menu-icon"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          />
          <Link to="/" className="logo">
            <img src="/assets/logo.png" alt="Logo" />
            <span>Task Manager</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="right-icons">
          <button
            className="theme-btn"
            onClick={() => setThemeBarOpen(!isThemeBarOpen)}
            style={{ color: theme === '#000000' ? '#ffffff' : '#000000' }}
          >
            {themeColors.find((t) => t.color === theme)?.icon || <FaMoon />}
          </button>
          <FaBell className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </div>

      {/* Sidebar for smaller screens */}
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
      )}

      {/* Theme Bar */}
      {isThemeBarOpen && (
        <div className="theme-bar">
          <div className="theme-bar-container">
            {themeColors.map((theme, index) => (
              <div
                key={index}
                className="theme-color"
                style={{ backgroundColor: theme.color }}
                onMouseEnter={() => handleHover(theme)} // Change theme dynamically
              ></div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
