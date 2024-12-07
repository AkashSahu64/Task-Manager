import React from 'react';

const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar">
      <button className="close-btn" onClick={onClose}>Close</button>
      <h3>User Profile</h3>
      <ul>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
