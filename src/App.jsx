import { useState } from 'react'

import './App.css'
import Login from './components/login'
import Navbar from './components/navbar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PatientDashboard from './pages/PatientDashboard'
import BedAvail from './pages/BedAvail'

import { createClient } from '@supabase/supabase-js'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicePage'


// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseApiKey = process.env.REACT_APP_SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseApiKey);

console.log(supabase)


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Signin/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/patientdashboard" element={ <PatientDashboard/> } />
        <Route path="/bedupdate" element={<BedAvail/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
      </Routes>
      
    </>
  )
}

export default App
