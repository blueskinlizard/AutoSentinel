import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom";
export default function IncidentPage(){
    const [incident, setIncident] = useState();
    const { incidentURL } = useParams();
    const [loading, setLoading] = useState(true);
    const canvasRef = useRef();
    useEffect(() => {
    const fetchIncidentData = async () => {
        try {
            const fetchedIncidentData = await fetch("http://localhost:8080/api/find_incident", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ incident_id: incidentURL }),
                credentials: "include"
            });
            
            if (fetchedIncidentData.ok) {
                const data = await fetchedIncidentData.json();
                console.log("Returned incident data: " + JSON.stringify(data));
                setIncident(data.found_incident);
            } else {
                setIncident(null);
            }
        } catch (error) {
            console.error("Error fetching incident:", error);
            setIncident(null);
        } finally {
            setLoading(false);
        }
    };
    
    fetchIncidentData();
}, [incidentURL]);

    useEffect(() =>{
        if (!incident || !canvasRef.current){ return; } 
        const canvas = canvasRef.current;
        if (!canvas){ return; } 
        const context = canvas.getContext('2d');
        if (!context){ return; } 

        const imageDataArray = Object.values(incident.imageData);

        const uint8Array = new Uint8Array(imageDataArray);
        let binaryString = '';
        const chunkSize = 8192;
        for (let i = 0; i < uint8Array.length; i += chunkSize) {
            const chunk = uint8Array.slice(i, i + chunkSize);
            binaryString += String.fromCharCode.apply(null, chunk);
        }
        const base64String = btoa(binaryString);

        const dataURL = `data:image/jpeg;base64,${base64String}`;

        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            if(coords && coords.length === 4){
                context.beginPath();
                context.moveTo(coords[0], coords[1]);
                context.lineTo(coords[2], coords[3]);
                context.strokeStyle = "#FFFFFF";
                context.lineWidth = 2;
                context.lineJoin = "round";
                context.lineCap = "round";
                context.stroke();
            }
        };
        img.src = dataURL;

        
        //incidentCoords is basically an array of integers(coordinates) where we detected our object.
        context.beginPath();
        const coords = incident.incidentCoords;
        
        
        context.stroke();
    }, [incident])

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