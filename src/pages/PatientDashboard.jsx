// PatientDashboard.js
import React, { useState,useEffect } from "react";
import Navbar from "../components/navbar";
import Search from "../components/search";
import { supabase } from "../App";

export default function PatientDashboard() {
  const [isNameSearchVisible, setIsNameSearchVisible] = useState(false);
  const [isLocalitySearchVisible, setLocalityIsSearchVisible] = useState(false);
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState('hi');

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState(0);
  const [availableHospitals,setAvailableHospitals] = useState([]);
  const [bedIndex,setBedIndex]=useState([]);

  const handleNameSearch = async (input) => {
    setSearchInput(input);
    await searchInDatabase(input,'Name');
  };
  const handleLocalitySearch = async(input) =>{
    setSearchInput(input);
    await searchInDatabase(input,'Address');
  }

  const searchInDatabase = async (input,type) => {
    try {
      const { data, error } = await supabase
        .from('Hospital')
        .select()
        .eq(type, input);

      console.log("hi i am here");
      console.log(data);

      if (error) {
        console.error('Error fetching data from the database:', error);
      } else {
        // Update the search results in the state
        const totalBeds = data.reduce((sum, item) => sum + (item.Beds || 0), 0);
        setSearchResults(totalBeds);
        const temp = data.map(item=>item.Beds);
        setBedIndex(temp);
        const hospitalNames = data.map(item => item.Name);
        setAvailableHospitals(hospitalNames); 
      }
    } catch (error) {
      console.error('Error searching in the database:', error);
    }
    
  };

  

  return (
    <>
      <div>
        <Navbar />
        <p className="text-4xl text-red-500 text-center">Search by</p>
        <div className="flex gap-10 items-center justify-center m-14">
          <button
            className="bg-red-500 text-black w-40 h-12 rounded-md"
            onClick={() => { setIsNameSearchVisible(true); setLocalityIsSearchVisible(false) }}
          >
            Hospital Name
          </button>
          <button
            className="bg-red-500 text-black w-40 h-12 rounded-md"
            onClick={() => { setLocalityIsSearchVisible(true); setIsNameSearchVisible(false) }}
          >
            Locality
          </button>
        </div>

        {isNameSearchVisible ? <Search type='Search by name' onSearch={handleNameSearch}/> : null}
        {isLocalitySearchVisible ? <Search type='Search by address' onSearch={handleLocalitySearch} /> : null}

        {/* You can access the search input value here */}
        <p>Available Beds: {searchResults}</p>
        {isLocalitySearchVisible ? <div>
        <p>Individual Hospital Names:</p>
        <div className="flex items-center justify-center m-4 gap-5">
        <div className="flex flex-col">
        {availableHospitals.map((name, index) => (
          <div key={index} >
            <p>Name: {name}:</p>
            <hr />
          </div>
        ))}
        </div>
        <div className="flex flex-col">
        {bedIndex.map((name, index) => (
          <div key={index} >
            <p>{name} Beds available</p>
            <hr />
          </div>
        ))}
        </div>
        </div>
      </div>:null};
        
        </div>
         
    </>
  );
}
