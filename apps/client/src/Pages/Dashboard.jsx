import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import IncidentComponent from "../Components/incidentComponent";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../Autosentinel_Style.css'


export default function Dashboard(){
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    //Simply stores incident ID for comparison, whole object storage is unecessary
    const [incidents, setIncidents] = useState([]);
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
            console.log("Fetched dashboard information: "+JSON.stringify(dashboardInformation))
            setDashboardData(dashboardInformation.fetched_dashboard);
            setIncidents(dashboardInformation.fetched_dashboard.IncidentCollection)
            setLoading(false);

        })
        fetchDashboardInformation();
    }, [dashboardURL])

    const latestIncidentQuery = useQuery({
        queryKey: ["incidents", dashboardURL], 
        staleTime: 1000 * 20,
        queryFn: async () =>{
            try{
                console.log("Queryfn ran")
                const fetchedLastIncident = await fetch(`http://localhost:8080/api/latest_incident`, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({ dashboard_id: dashboardURL })
                })
                const lastIncident = await fetchedLastIncident.json();
                if (lastIncident.latest_incident && Array.isArray(incidents) && incidents.length > 0 && 
                lastIncident.latest_incident.id !== incidents[incidents.length - 1].id && lastIncident.latest_incident.incidentConfidence !== undefined) {
                    console.log("Updating incident state")
                    setIncidents(prevIncidents => [...prevIncidents, lastIncident.latest_incident])
                }else{
                    console.log("Requirements not satisfied for new incident")
                }
                return lastIncident.latest_incident ?? null;
            }catch(error){
                console.log(`Caught error of ${error} when fetching for latest incident`)
                return null;
            }
        },
        refetchInterval: 1000 * 2,
        refetchIntervalInBackground: false,
        enabled: !loading && incidents !== null
    })
    if(loading){
        return <><h2>Loading...</h2></>
    }
    if(!incidents){
        return <><h2>No incidents yet!</h2></>
    }
    return(
        <>
        <h1 className="Dashboard_Title">{dashboardData.name}</h1>
            <div className="titleWrappers">
                <h2 className="Dashboard_Heading">Incident Id</h2>
                <h2 className="Dashboard_Heading">Confidence</h2>
                <h2 className="Dashboard_Heading">Captured</h2>
            </div>
            <div className="incidentListWrapper">
                {Array.isArray(incidents) && [...incidents].reverse().map((incident) => {
                    return <IncidentComponent incidentId={incident.id} incidentConfidence={incident.incidentConfidence} incidentTime={incident.dateCreated} key={incident.id}></IncidentComponent>
                    //Might have to convert our incidentTime to actually be readable
                })}
            </div>
        </>
    )
}