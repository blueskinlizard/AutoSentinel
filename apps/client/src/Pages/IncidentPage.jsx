import { useState, useEffect, useRef } from "react"
export default function IncidentPage(){
    const [incident, setIncident] = useState();
    const { incidentURL } = useParams();
    const [loading, setLoading] = useState(true);
    const canvasRef = useRef(null);
    useEffect(() =>{
        const fetchIncidentData = (async() =>{
            const fetchedIncidentData = await fetch("http://localhost:8080/api/find_incident", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ incident_id: incidentURL}),
                credentials: "include"
            })
            if(fetchedIncidentData.ok){ setIncident(fetchedIncidentData); }
            else{setIncident(null);}

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            canvas.width = 200;
            canvas.height = 200;
            context.putImageData(fetchedIncidentData.imageData, 0, 0);

            context.lineJoin = 'round';
            context.lineCap = 'round';
            context.lineWidth = 2;
            context.strokeStyle = '#FFFFFF';

            //incidentCoords is basically an array of integers(coordinates) where we detected our object.
            context.beginPath();
            fetchedIncidentData.incidentCoords.forEach(incidentCoordinate => {
                context.moveTo(incidentCoordinate[0].x, incidentCoordinate[0].y);
            });

            setLoading(false);
        })
        fetchIncidentData();
    }, [])

    if(loading){
        return(
            <h1>Loading incident data...</h1>
        )
    }
    return(
        <>
            <h3>Incident {incident.id}</h3>
            {
                //More pizzaz here if needed
            }
            <canvas ref={canvasRef}></canvas>
        </>
    )
}