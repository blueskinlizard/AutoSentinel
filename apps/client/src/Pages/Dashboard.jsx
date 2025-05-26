import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard(){
    const [dashboardData, setDashboardData] = useState([null]);
    useEffect(() =>{
        const fetchDashboardInformation = (async() =>{
            const fetchedDashboardInformation = await fetch(`http://localhost:8080/api/fetch_dashboard`, {
                method: 'GET',
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
            })
            setDashboardData(fetchedDashboardInformation);
        })
    })

    const latestIncidentQuery = useQuery({
        queryKey: ["messages", conversationId], 
        staleTime: 1000 * 20,
        queryFn: async () =>{
            const fetchedLastIncident = await fetch(`http://localhost:8080/api/latest_incident`, {

            })
        },
        refetchInterval: 1000 * 2,
        refetchIntervalInBackground: false
    })
    return(
        <>
        
        </>
    )
}