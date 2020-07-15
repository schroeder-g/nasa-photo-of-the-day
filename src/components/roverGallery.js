import React, { useState, useEffect} from "react";
import "../App.css";

export default function RoverGallery (props){
   const {chosenPhotos} = props


   return (
    <section>
       {chosenPhotos &&
        chosenPhotos.map( photo => {
          return <img src={photo.url} alt="Picutre" />
       })}
       </section>
   )
}