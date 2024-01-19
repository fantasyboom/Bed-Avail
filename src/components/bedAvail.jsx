// Filter.js
import React from 'react';
import { useState } from 'react'

import '../App.css'

const BedAvailabilityFilter = ({ onFilterChange }) => {
  return (
    <div>
      <label htmlFor="availabilityFilter">Filter by Bed Availability:</label>
      <select id="availabilityFilter" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="full">Full</option>
      </select>
    </div>
  );
};

export default BedAvailabilityFilter;
