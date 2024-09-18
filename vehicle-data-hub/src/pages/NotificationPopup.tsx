import React from 'react';
import '../style/Notification.css';

interface NotificationPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="notification-popup">
      <button className="close-btn" onClick={onClose}>X</button>
      <h3>Notifications</h3>
      <ul>
        <li>Notification 1</li>
        <li>Notification 2</li>
        <li>Notification 3</li>
      </ul>
    </div>
  );
};

export default NotificationPopup;
