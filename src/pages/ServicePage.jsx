import React from 'react';
import Navbar from '../components/navbar';

const ServicesPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Real-Time Bed Availability</h2>
            <p className="text-gray-700">
              Stay informed about the real-time availability of beds in hospitals. Our system ensures accurate and up-to-date information.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Efficient Bed Allocation</h2>
            <p className="text-gray-700">
              Optimize the allocation of beds based on patient needs. Improve resource utilization and streamline the admission process.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">User-Friendly Interface</h2>
            <p className="text-gray-700">
              Our platform features a user-friendly interface, making it easy for hospitals to update bed status and for users to access information.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;
