import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggle.css'

const ThemeToggle = ({ onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState({ color: '#000000', icon: <FaMoon /> });
  const [isThemeBarOpen, setThemeBarOpen] = useState(false);

  // List of theme colors (darkest to lightest)
  const themeColors = [
    { color: '#000000', icon: <FaMoon /> }, // Black
    { color: '#3d3d3d', icon: <FaMoon /> }, // Dark Gray
    { color: '#696969', icon: <FaMoon /> }, // Medium Gray
    { color: '#a9a9a9', icon: <FaMoon /> }, // Light Gray
    { color: '#dcdcdc', icon: <FaSun /> },  // Lighter Gray
    { color: '#ffffff', icon: <FaSun /> },  // White
  ];

  const handleHover = (theme) => {
    setSelectedTheme(theme);
    document.body.style.backgroundColor = theme.color; // Change page background dynamically
    onThemeChange(theme.color); // Notify parent for additional changes (header/footer)
  };

  return (
    <div className="theme-toggle">
      {/* Current Theme Preview */}
      <div
        className="theme-preview"
        style={{ backgroundColor: selectedTheme.color }}
        onClick={() => setThemeBarOpen(!isThemeBarOpen)}
      >
        {selectedTheme.icon}
      </div>

      {/* Scrollable Theme Bar */}
      {isThemeBarOpen && (
        <div className="theme-bar">
          <div className="theme-bar-container">
            {themeColors.map((theme, index) => (
              <div
                key={index}
                className="theme-color"
                style={{ backgroundColor: theme.color }}
                onMouseEnter={() => handleHover(theme)} // Change on hover
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
