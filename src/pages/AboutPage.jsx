import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-4">About Our Project</h1>
        <p className="text-gray-700 mb-6">
          Welcome to our hospital bed management system! Our project aims to streamline the process of identifying and managing available beds in hospitals, ensuring efficient allocation and utilization.
        </p>
        <p className="text-gray-700 mb-6">
          With our software solution, hospitals can easily track and update the status of their beds, providing real-time information to healthcare providers and patients. This helps in making informed decisions during emergencies and optimizing the use of available resources.
        </p>
        <p className="text-gray-700">
          Thank you for being a part of this initiative to enhance healthcare services. Feel free to explore and utilize our platform for better hospital bed management.
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
