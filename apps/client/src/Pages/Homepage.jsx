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
  const [sharedDashboards, setSharedDashboards] = useState([]);
  //sharedDashboards is an array of dashboard Ids, not objects.
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
                }
                
                else{ console.log("Error in fetching owned dashboards, returned with status 500") }
              }catch(error){
                console.log("Error in fetching owned dashboards, returned with error: "+error)
                return;
              }
              try{
                const fetchedSharedDashboardIds = await fetch(`http://localhost:8080/api/shared_dashboards`, {
                  method: 'GET',
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: "include"
                })
                if(fetchedSharedDashboardIds.ok){
                  const parsedSharedDashboards = await fetchedSharedDashboardIds.json(); 
                  console.log("Fetched Shared dashboard IDS JSON: ", parsedSharedDashboards)
                  parsedSharedDashboards.forEach(async sharedDashboardId => {
                    const fetchedSharedDashboard = await fetch(`http://localhost:8080/api/fetch_dashboard`, {
                      method: 'POST',
                      headers: {
                        "Content-Type": "application/json",
                      },
                      credentials: "include",
                      body: JSON.stringify({ dashboard_name: sharedDashboardId }),
                    })
                    const sharedDashboard = await fetchUserInformation.json();
                    setSharedDashboards(prevDashboards => [...prevDashboards, sharedDashboard])
                  });
                }
                else{
                  setSharedDashboards([])
                  setLoading(false);
                }
              }catch(error){
                console.log("Error in fetching shared dashboards, returned with: "+error);
                setSharedDashboards([])
                setLoading(false);
                //While it may seem weird to setLoading(false) so much near the shared dashboards part, given that our useEffect
                //Ends around this certain area, we must handle all possible contingencies
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
            <><h2>No owned dashboards yet!</h2> <DashboardCreateComponent  /></>
              : 
              <h2>Owned dashboards</h2>
            }
            {dashboards.map((dashboard) =>{
              return (<DashboardHomeComponent dashboardTitle={dashboard.name} 
              key={dashboard.id}
              dashboardId={dashboard.id} 
              dashboardOwner={dashboard.dashboardOwner} /> )
            })}
            {sharedDashboards.length === 0 ? 
            <><h2>No dashboards have been shared with you yet!</h2></>
              : 
              <h2>Shared dashboards:</h2>
            }
            {sharedDashboards.map((sharedDashboardId) =>{
              return (<DashboardHomeComponent dashboardTitle={dashboard.name} 
              key={dashboard.id}
              dashboardId={dashboard.id} 
              dashboardOwner={dashboard.dashboardOwner} /> )
            })}
        </div>
    )
}