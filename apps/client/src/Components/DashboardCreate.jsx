export default function DashboardCreateComponent(){
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
    }

    const handleFormInformation = async(submittedForm) =>{
        submittedForm.preventDefault();
        const form = submittedForm.target;
        const dashboardName = form.dashboardName.value;
        createDashboard(dashboardName);
    }
    return(
        <div className="DashboardCreateComponent" onSubmit={handleFormInformation}>
            <form id="createDashboardForm">
                <input type="text" id="dashboardNameInput" placeholder="Create new dashboard" name="dashboardName"></input>
            </form>
        </div>
    )
}