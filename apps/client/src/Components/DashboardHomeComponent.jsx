export default function DashboardHomeComponent(props){
    return(
        <div className="DashboardHomeComponent">
            <h3>{props.dashboardTitle}</h3>
            <h4>Owner: {props.dashboardOwner}</h4>
            <p>Id: {props.dashboardId}</p>
        </div>
    )
}