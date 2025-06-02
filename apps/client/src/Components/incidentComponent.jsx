import { Link } from "react-router-dom";
import '../Autosentinel_Style.css'

export default function IncidentComponent(props){
    const incidentDate = new Date(props.incidentTime);
    let incidentConfidence = "";
    if(props.incidentConfidence < 0.55){
        incidentConfidence = "Low";
    }
    if(props.incidentConfidence > 0.55 && props.incidentConfidence < 0.75){
        incidentConfidence = "Medium";
    }
    if(props.incidentConfidence > 0.75){
        incidentConfidence = "High";
    }
    return(
        <div className="Incident_Component">
            <Link to={`/incident/${props.incidentId}`} id="Incident_Component_Link">
                <p id="Incident_Title">Incident {props.incidentId}</p>
                <p id={`Incident_Confidence_${incidentConfidence}`}>{incidentConfidence} ({props.incidentConfidence.toFixed(2)})</p>
                <p id="Incident_DateTime">{incidentDate.toLocaleString()}</p>
            </Link>
        </div>
    )
}