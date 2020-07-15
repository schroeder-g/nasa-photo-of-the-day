import React, { useState, useEffect} from "react";
import axios from "axios"
import "../App.css";
import POD_BASE_URL from "../constants/constants"

export default function photoOfDay(props) {
    const {picture} = props
    return (

        <div className="photoOfDay-Section">
           {picture &&
            <img src={picture.hdurl} alt={picture.title}/>
           }
        </div>
    )
}
