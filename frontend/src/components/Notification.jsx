import React from 'react';

const Notification = ({ onClose }) => {
  return (
    <div className="notification-popup">
      <h3>Notifications</h3>
      <ul>
        <li>Task 1 completed.</li>
        <li>New task assigned.</li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Notification;
