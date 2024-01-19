// HospitalList.js
import React from 'react';
import { useState } from 'react'

import '../App.css'

const HospitalList = ({ hospitals }) => {
  return (
    <div>
      <h2>Hospitals List</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            {hospital.name} - Beds: {hospital.bedAvailability}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;
