import React, { useState } from 'react';
import { supabase } from '../App'; // Import your Supabase configuration
import Navbar from '../components/navbar';

const BedAvail = () => {
  const [idNumber, setIdNumber] = useState('');
  const [bedsAvailable, setBedsAvailable] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if both hospitalName and bedsAvailable are provided
      if (!idNumber || !bedsAvailable) {
        alert('Please provide both hospital name and beds available.');
        return;
      }

      // Insert or update the data in the 'Hospital' table
      
        const { error } = await supabase
        .from('Hospital')
        .update({ Beds: parseInt(bedsAvailable,10) })
        .eq('id',idNumber )

      if (error) {
        console.error('Error updating database:', error);
      } else {
        console.log('Data updated successfully:', data);
        // Optionally, reset the form after successful submission
        setIdNumber('');
        setBedsAvailable('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <h1 className='m-2 text-4xl text-red-500 font-bold'>Bed Availibility Updation</h1>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Id Number:
    <input
      type="text"
      value={idNumber}
      onChange={(e) => setIdNumber(e.target.value)}
      className="mt-1 p-2 border border-gray-300 rounded w-full"
    />
  </label>

  <label className="block text-gray-700 text-sm font-bold mb-2">
    Beds Available:
    <input
      type="number"
      value={bedsAvailable}
      onChange={(e) => setBedsAvailable(e.target.value)}
      className="mt-1 p-2 border border-gray-300 rounded w-full"
    />
  </label>

  <button
    type="submit"
    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
  >
    Submit
  </button>
</form>

    </>
  );
};

export default BedAvail;
