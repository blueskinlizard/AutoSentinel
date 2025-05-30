//This file will serve as an "admin panel, or how many new detections over a certain timeframe there was, a nice landing page"
import { useState, useEffect } from "react";
import CameraCapture from "../Components/CameraCapture";
import DashboardHomeComponent from "../Components/DashboardHomeComponent";
import DashboardCreateComponent from "../Components/DashboardCreate";
import { Link } from "react-router-dom";

export default function Homepage(){
  const [signedIn, setSignedIn] = useState(false);
  const [dashboards, setDashboards] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() =>{
        const fetchUserInformation = async() =>{
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
            }
            else{ 
              console.log("Current user: "+currentUser.currentUser.name)
              setSignedIn(true);
              try{
                const fetchedUserDashboards = await fetch(`http://localhost:8080/api/all_dashboards`, {
                  method: 'GET',
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: "include"
                })
                if(fetchedUserDashboards.ok){
                  const parsedUserDashboards = await fetchedUserDashboards.json(); 
                  console.log("Fetched dashboards JSON:", parsedUserDashboards.ownedBoards);
                  setDashboards(parsedUserDashboards.ownedBoards); 
                  setLoading(false);
                }
                
                else{ console.log("Error in fetching owned dashboards, returned with status 500") }
              }catch(error){
                console.log("Error in fetching owned dashboards, returned with error: "+error)
              }
            }
    }
        fetchUserInformation();

    }, [])
    if(loading && !signedIn){
      return(
        <>
          <h1>Welcome to the homepage!</h1>
          <h2>Sign in to acquire knowledge about your dashboards</h2>
          
          <Link to={`/signup`}><button>Sign in/up here.</button></Link>
        </>
      )
    }
    return(
        <div>
            <h1>Great Debug session king, this is the homepage</h1>
            
            {dashboards.length === 0 ? 
            <><h2>No dashboards yet!</h2> <DashboardCreateComponent  /></>
              : 
              <h2>Owned dashboards</h2>
            }
            {dashboards.map((dashboard) =>{
              return (<DashboardHomeComponent dashboardTitle={dashboard.name} 
              key={dashboard.id}
              dashboardId={dashboard.id} 
              dashboardOwner={dashboard.dashboardOwner} /> )
            })}
        </div>
    )
}