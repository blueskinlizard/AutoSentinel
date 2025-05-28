import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function SignUp(){
    const navigate = useNavigate(); 
    const[formType, setFormType] = useState(true) //true indicates its for sign up
    const[signUpStatus, setSignUpStatus] = useState(null) //Will display if succesfully signed in or error occurs
    const handleFormInformation = async(submittedForm) =>{
        submittedForm.preventDefault();
        const form = submittedForm.target;
        const username = form.username.value;
        const password = form.password.value;
        UserLogic(username, password);
    }
    const UserLogic = async(username, password) =>{
        try{
            const fetchType = formType ? "user_signup" : "user_login"; //Does this based off conditional, pretty straightforward
            console.log("Sending request:", { username, password, fetchType });
            const fetchedDataJson = await fetch(`http://localhost:8080/api/${fetchType}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: username, password: password}),
                credentials: "include"
            })
            const responseData = await fetchedDataJson.json().catch(error => ({ message: "Could not parse JSON response" }));
            console.log("Response status:", fetchedDataJson.status, "Response data:", responseData);
            if(fetchedDataJson.ok){
                setSignUpStatus("Succesfully logged in, redirecting now")
                navigate("/home");
            }
            else{
                setSignUpStatus("Error encountered during authentication")
            }
                    }catch(err){
            console.log("Error returned in signup/signin logic: "+err)
        }
    }
    return(
        <div className="userAccountInteraction">
            <form id="userAccountForm" onSubmit={handleFormInformation}>
                <h1>{formType === true ? "Sign up" : "Sign in"}</h1>
                <input type="text" id="usernameInput" placeholder="Username" name="username"></input>
                <input type="password" id="passwordInput" placeholder="Password" name="password"></input>
                   <button type="submit">{formType === true ? "Sign Up" : "Sign In"}</button>
            </form>
        <p onClick={() =>{setFormType(!formType)}}>{formType === true ? "Or, sign in instead" : "Or, sign up instead"}</p>
        <p className="statusMessage">{signUpStatus}</p>
        </div>
    )
}