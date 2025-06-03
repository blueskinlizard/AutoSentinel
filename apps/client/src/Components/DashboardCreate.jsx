export default function DashboardCreateComponent(props){
    const createDashboard = async(dashboardName) =>{
        console.log("Dashboard name sent: "+dashboardName)
        await fetch(`http://localhost:8080/api/create_dashboard`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ dashboard_name: dashboardName }),
        })
        window.location.reload();
    }
    const createSharedDashboard = async(dashboardName, dashboardRecipient) =>{
        const fetchedBoard = await fetch(`http://localhost:8080/api/fetch_dashboard_name`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ dashboard_identification: dashboardName }),
        })
        //We fetch for any whiteboards owned by our user with the name they've inputted
        if(fetchedBoard.ok){
            await fetch(`http://localhost:8080/api/create_sharedDashboard`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ share_dashboard: dashboardName, dashboard_recipient: dashboardRecipient }),
        })
        }else{
            console.log(`Dashboard of ${dashboardName} not owned by user or doesn't exist`)
        }
    }

    const handleFormInformation = async(submittedForm) =>{
        console.log("Form submitted");
        submittedForm.preventDefault();
        const form = submittedForm.target;
        const dashboardName = form.dashboardName.value;
        if(!dashboardName){console.log("No dashboard name entered for creation/sharing."); return;}
        //We reuse this component for creating shared dashboards, with a prop conditional between the two different routes
        if(props.shareDashboard){
            const dashboardRecipient = form.dashboardRecipient.value;
            if(!dashboardRecipient){console.log("No dashboard recipient entered for sharing."); return;}
            createSharedDashboard(dashboardName, dashboardRecipient)
        }else{
            createDashboard(dashboardName);
        }
    }
    if(props.shareDashboard){
        return(
            <div className="SharedDashboardCreateComponent">
                <h3>Share new dashboard:</h3>
                <form id="shareDashboardForm" onSubmit={handleFormInformation}>
                    <input type="text" id="sharedDashboardNameInput" placeholder="Share dashboard with name:" name="dashboardName"></input>
                    <input type="text" id="sharedDashboardRecipientInput" placeholder="Share dashboard to:" name="dashboardRecipient"></input>
                    <button type="submit">Share your board!</button>
                </form>
            </div>
        )
    }
    return(
        <div className="DashboardCreateComponent">
            <form id="createDashboardForm" onSubmit={handleFormInformation}>
                <input type="text" id="dashboardNameInput" placeholder="Create new dashboard" name="dashboardName"></input>
            </form>
        </div>
    )
    

}