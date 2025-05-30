import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import IncidentComponent from "../Components/incidentComponent";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Dashboard(){
    const [dashboardData, setDashboardData] = useState([null]);
    const [loading, setLoading] = useState(true);
    //Simply stores incident ID for comparison, whole object storage is unecessary
    const [incidents, setIncidents] = useState(null);
    //Quality of life access for incident management, technically unecessary, but makes my life easier
    const { dashboardURL } = useParams();
    useEffect(() =>{
        const fetchDashboardInformation = (async() =>{
            console.log("Fetching dashboard information")
            const fetchedDashboardInformation = await fetch(`http://localhost:8080/api/fetch_dashboard`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ dashboard_identification: dashboardURL }),
            })
            const dashboardInformation = await fetchedDashboardInformation.json();
            setDashboardData(dashboardInformation.fetched_dashboard);
            setIncidents(dashboardInformation.fetched_dashboard.IncidentCollection)
        })
        fetchDashboardInformation();
        setLoading(false);
    }, [dashboardURL])

    const latestIncidentQuery = useQuery({
        queryKey: ["incidents", dashboardURL], 
        staleTime: 1000 * 20,
        queryFn: async () =>{
            const fetchedLastIncident = await fetch(`http://localhost:8080/api/latest_incident`, {
                method: 'GET',
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
            })
            const lastIncident = await response.json();
            if(lastIncident.id != incidents[incidents.length - 1].id){
                //Incidents.length - 1 refers to our last incident
                setIncidents(prevIncidents => [...prevIncidents, lastIncident]) //Append new incident
            }
            return lastIncident;
        },
        refetchInterval: 1000 * 2,
        refetchIntervalInBackground: false
    })
    if(loading){
        return <><h2>Loading...</h2></>
    }
    if(!incidents){
        return <><h2>No incidents yet!</h2></>
    }
    return(
        <div className="incidentListWrapper">
            {Array.isArray(incidents) && incidents.map((incident) =>{
                return <IncidentComponent incidentId={incident.id} incidentConfidence={incident.incidentConfidence} incidentTime={incident.dateCreated} key={incident.id}></IncidentComponent>
                //Might have to convert our incidentTime to actually be readable
            })}
        </div>
    )
}