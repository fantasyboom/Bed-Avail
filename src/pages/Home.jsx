import React from 'react';
import { useState } from 'react'
import { Radio, RadioGroup, useRadioGroup,HStack } from '@chakra-ui/react'
import RadioCard from '../components/radioCard';

import '../App.css'
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

export default function Home()
{
    
   const navigate= useNavigate();

  
    return (
    <>
    <Navbar />
    <div className="mt-10 text-center">
  <h2 className="text-4xl font-bold mb-6">Choose Your Role</h2>
</div>

<div className="flex items-center justify-center mt-6">
  <div className="flex gap-8">
    <button
      className="w-48 h-24 bg-red-500 text-white text-2xl rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300"
      onClick={() => navigate("/patientdashboard")}
    >
      Patient
    </button>

    <button
      className="w-48 h-24 bg-red-500 text-white text-2xl rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300"
      onClick={() => navigate("/login")}
    >
      Hospital
    </button>
  </div>
</div>

    
    </>
    )
    

}