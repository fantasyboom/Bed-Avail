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
export  const supabase = createClient('https://bsjnweymdhhztedvtcez.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzam53ZXltZGhoenRlZHZ0Y2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NTg3NzAsImV4cCI6MjAxOTUzNDc3MH0.fQsaTn0-A9Mp-h-KojgtqqFzgGwS2AQrbDb2dbt540I')

console.log(supabase)


function App() {
  const [count, setCount] = useState(0)

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
