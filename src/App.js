import React, { useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import { POD_BASE_URL, ROVER_BASE_URL, KEY } from "./constants/constants"
import PhotoSection from "./components/photoOfDay"
import RoverGallery from "./components/roverGallery"
import shuffler from "./shuffler" 

function App() {
  //create state slices for Photo of Day && Mars Rover Gallery
  const [picOfDay, setPicOfDay] = useState([])
  const [selectGallery, setSelectGallery] = useState([])

  //create effect using axios to grab picture of the day object from NASA API upon first render
  useEffect(() => {
    axios.get(`${POD_BASE_URL}${KEY}`)
    .then( res => {
      setPicOfDay(res.data)
    }).catch( err =>{
      console.log(err)
    })
  }, [])

  useEffect(() => {
    axios.get(`${ROVER_BASE_URL}${KEY}`)
    .then( res => {
 //Shuffle Array of Mars Rover Pictures, take a slice of the first five, and set Gallery to those images
      setSelectGallery(shuffler(res.data.photos)) 
      console.log(selectGallery)
    }).catch ( err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1><span role="img" aria-label="blasting off again">🚀</span> NASA Image Explorer <span role="img" aria-label="blasting off again">🚀</span></h1>
      <PhotoSection picture={picOfDay}/>
      <RoverGallery gallery={selectGallery}/>

    </div>
  );
}

export default App;
