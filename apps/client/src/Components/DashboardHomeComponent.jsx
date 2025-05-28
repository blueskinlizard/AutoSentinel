import { Link } from "react-router-dom"

export default function DashboardHomeComponent(props){
    return(
        <div className="DashboardHomeComponent">
            <Link to={`/dashboard/${props.dashboardId}`}>
                <h3>{props.dashboardTitle}</h3>
                <h4>Owner: {props.dashboardOwner}</h4>
                <p>Id: {props.dashboardId}</p>
            </Link>
        </div>
    )
}