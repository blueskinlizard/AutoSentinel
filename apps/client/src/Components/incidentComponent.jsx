import { Link } from "react-router-dom";


export default function IncidentComponent(props){
    return(
        <div>
            <Link to={`/incident/${props.incidentId}`}>
                <p>Incident {props.incidentId}</p>
                <p>{props.incidentConfidence}</p>
                <p>{props.incidentTime}</p>
            </Link>
        </div>
    )
}