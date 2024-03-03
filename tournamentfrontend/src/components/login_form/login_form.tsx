import React, { useEffect } from "react"
import "./login_form.css" 
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { AuthManager } from "../../managers/auth_manager.tsx";


export default function LoginForm() {

    useEffect(() => {
        if(localStorage.getItem("user_data") != null)window.location.href = frontURLs.profile_suffix;
    }, [])

    const login = async () => {

        const email_input = document.getElementById("email");
        const password_input = document.getElementById("password");
    
        const email = email_input.value;
        const password = password_input.value;
    
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
    
        const raw = JSON.stringify({
            "email": email,
            "password": password
        });
    
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
            credentials: 'include'
        };
    
        const response = await fetch(APIEndpoints.login, requestOptions)
        const response_json = await response.json()
    
        if("message" in response_json){
            window.location.href = frontURLs.profile;
        }
        if("detail" in response_json){
            alert(response_json["detail"]["error"]);
        };
    } 

    return (
    <>
    <div className="login_wrapper">
        <div className="forms_wrapper">
            <h2 className="login_title">Login</h2>
            <div className="forms">
                <input type="text" id="email"/>
                <input type="text" id="password"/>
                <input 
                    type="button" 
                    value="submit" 
                    onClick={login}
                />
            </div>
        </div>
    </div>
    </>
    )
}