import React, { useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import { POD_BASE_URL, DEFAULT_KEY } from "./constants/constants"
import PhotoSection from "./components/photoOfDay"

function App() {
  //create state slices for Photo of Day && Mars Rover Gallery
  const [picOfDay, setPicOfDay] = useState(null)

  //create effect using axios to grab picture of the day object from NASA API upon first render
  useEffect(() => {
    axios.get(`${POD_BASE_URL}${DEFAULT_KEY}`)
    .then( res => {
      setPicOfDay(res.data)
    }).catch( err =>{
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <PhotoSection picture={picOfDay}/>
      {/* <span role="img" aria-label='go!'>🚀</span>! */}
    </div>
  );
}

export default App;
