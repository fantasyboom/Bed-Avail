// DetailsModal.js
import React from 'react';
import { useState } from 'react'

import '../App.css'

const DetailsModal = ({ hospital, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{hospital.name}</h2>
        <p>Location: {hospital.location}</p>
        <p>Bed Availability: {hospital.bedAvailability}</p>
        {/* Add more details based on your project requirements */}
      </div>
    </div>
  );
};

export default DetailsModal;
