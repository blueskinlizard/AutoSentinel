import CameraCapture from "../Components/CameraCapture"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
export default function CameraPage(){
    const redirect = useNavigate();
    const { dashboardURL } = useParams();
    useEffect(() =>{
        const findCurrentUser = async() =>{
          const fetchedCurrentUser = await fetch(`http://localhost:8080/api/current_user`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            },
              credentials: "include"
            })
            const currentUser = await fetchedCurrentUser.json();
            if (!currentUser.currentUser) {
                redirect("/home");
            }
            else{ console.log("Current user: "+currentUser.currentUser.name)
                console.log("User object: "+JSON.stringify(currentUser.currentUser))
            }
        }
        findCurrentUser();
        console.log("Dashboard ID from URL params:", dashboardURL);
      }, [])

    return(
        <>
            <h1>Current camera data</h1>
            <CameraCapture dashboardID={dashboardURL}></CameraCapture>
        </>
    )
}