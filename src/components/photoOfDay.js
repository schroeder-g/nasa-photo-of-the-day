import React, { useState, useEffect} from "react";
import axios from "axios"
import "../App.css";
import POD_BASE_URL from "../constants/constants"

export default function photoOfDay(props) {
    const {picture} = props

    //Create Event Listener to update picture 
    return (

        <div className="photoOfDay-Section">
           <img src={picture.hdurl} alt={picture.title}/>
           <h2>{picture.title}</h2>
        </div>
    )
}
