//This file will serve as an "admin panel, or how many new detections over a certain timeframe there was, a nice landing page"
import { useState, useEffect } from "react";
import CameraCapture from "../Components/CameraCapture";

export default function Homepage(){

    useEffect(() =>{
        const findCurrentUser = async() =>{
          const fetchedCurrentUser = await fetch(`http://localhost:8080/api/current_user`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            },
              credentials: "include"
            })
            const currentUser = await fetchedCurrentUser.json();
            console.log("Running");
            if(!currentUser.currentUser){
                console.log("No current user");
            }else{ console.log("Current user: "+currentUser.currentUser.name) }
    }
        findCurrentUser();

    })
    return(
        <div>
            <h1>Great Debug session king, this is the homepage</h1>
            <h2>Hello?</h2>
        </div>
    )
}