import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import IncidentComponent from "../Components/incidentComponent";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const [dashboardData, setDashboardData] = useState([null]);
    const [loading, setLoading] = useState(true);
    //Simply stores incident ID for comparison, whole object storage is unecessary
    const [incidents, setIncidents] = useState(null);
    //Quality of life access for incident management, technically unecessary, but makes my life easier
    const { dashboardURL } = useParams();
    useEffect(() =>{
        const fetchDashboardInformation = (async() =>{
            const fetchedDashboardInformation = await fetch(`http://localhost:8080/api/fetch_dashboard`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ dashboardURL }),
            })
            setDashboardData(fetchedDashboardInformation);
            setIncidents(fetchedDashboardInformation.IncidentCollection)
        })
        fetchDashboardInformation();
        setLoading(false);
    })

    const latestIncidentQuery = useQuery({
        queryKey: ["messages", conversationId], 
        staleTime: 1000 * 20,
        queryFn: async () =>{
            const fetchedLastIncident = await fetch(`http://localhost:8080/api/latest_incident`, {
                method: 'GET',
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
            })
            if(fetchedLastIncident.id != incidents[incidents.length - 1].id){
                //Incidents.length - 1 refers to our last incident
                setIncidents(prevIncidents => [...prevIncidents, fetchedLastIncident]) //Append new incident
            }
        },
        refetchInterval: 1000 * 2,
        refetchIntervalInBackground: false
    })
    if(loading){
        return <><h2>Loading...</h2></>
    }
    return(
        <div className="incidentListWrapper">
            {incidents.map((incident) =>{
                <IncidentComponent incidentId={incident.id} incidentConfidence={incident.incidentConfidence} incidentTime={incident.dateCreated}></IncidentComponent>
                //Might have to convert our incidentTime to actually be readable
            })}
        </div>
    )
}