import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import EmailIcon from "@mui/icons-material/Email";
// import LockIcon from "@mui/icons-material/Lock";

// import axios from "axios";
// import { createUser, auth } from "../firebaseConfig.js";
// import HomeNavbar from "./HomeNavbar.js";
import Navbar from "../components/navbar.jsx";
import { supabase } from "../../supabase.config.js";
import { Link } from "react-router-dom";

//const api_key= `${process.env.API_KEY}`;


const redirectState = {
    redirect: false,
  }



const Signup = () => {
  const [authSuccess,setAuthSuccess]=useState(false);
  const [formData, setFormData] = useState({
    hospitalname: '',
    hospitaladdress: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [fetchedId, setFetchedId] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    authorization();
  };

  async function authorization() {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    console.log(data);
    console.log(error);

    const { error1 } = await supabase
      .from('Hospital')
      .insert({ Name: formData.hospitalname, Address: formData.hospitaladdress });

    console.log(error1);

    if (error === null) {
      // Fetch the ID after authorization
      fetchId();
      // Redirect to login after successful signup
      setAuthSuccess(true);
      
    }
  }

  const fetchId = async () => {
    const { data, error } = await supabase
      .from('Hospital')
      .select()
      .eq('Name', formData.hospitalname);

    if (!error) {
      const id = data[0]?.id;
      setFetchedId(id);
      console.log(id);
    }
  };

    return (
        <div>
            <Navbar/>
            
            <form className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign up</h2>

  <label className="mb-4">
    <span className="block text-sm font-semibold text-gray-600">Hospital Name</span>
    <input
      type="text"
      name="hospitalname"
      value={formData.hospitalname}
      onChange={handleInputChange}
      className="w-full border border-gray-300 p-2 rounded-md"
    />
  </label>

  <label className="mb-4">
    <span className="block text-sm font-semibold text-gray-600">Hospital Address</span>
    <input
      type="text"
      name="hospitaladdress"
      value={formData.hospitaladdress}
      onChange={handleInputChange}
      className="w-full border border-gray-300 p-2 rounded-md"
    />
  </label>

  <label className="mb-4">
    <span className="block text-sm font-semibold text-gray-600">Hospital Email</span>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      className="w-full border border-gray-300 p-2 rounded-md"
    />
  </label>

  <label className="mb-4">
    <span className="block text-sm font-semibold text-gray-600">Password</span>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      className="w-full border border-gray-300 p-2 rounded-md"
    />
  </label>

  <div className="flex justify-center space-x-4 m-4">
    <button className="bg-red-500 text-white w-1/2 py-2 rounded-md" type="submit" onClick={handleSubmit}>
      Register
    </button>
    <button className="bg-gray-300 text-black w-1/2 py-2 rounded-md" type="reset">
      Reset
    </button>
  </div>
</form>


          {authSuccess? <><p>Your unique id is {fetchedId}</p><Link to="/bedupdate" className="text-blue-500 hover:text-blue-700 underline"> Move to Bed updation</Link></>:null}
          
          

          
            
        </div>
    );
};

export default Signup;
