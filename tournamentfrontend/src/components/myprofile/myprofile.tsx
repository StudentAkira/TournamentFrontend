import React, { useEffect } from "react"
import "./myprofile.css" 
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { useFetcher } from "react-router-dom";
import { AuthManager } from "../../managers/auth_manager.tsx";


export default function MyProfile() {

    let auth_manager = new AuthManager();


    useEffect(() => {
        get_my_profile_request()
      }, []);

    const get_my_profile_request = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };

        const respose = await fetch(APIEndpoints.my_profile, requestOptions)
        const response_json = await respose.json();

        if("detail" in response_json){
            console.log(response_json);
            
            window.location.href = frontURLs.login;
            return;
        }
        
        let response_keys = Object.keys(response_json);
        let data = {}

        for(let i = 0; i < response_keys.length; i++){
            let element = document.getElementById(response_keys[i]);
            if(element){
                element.innerHTML = `${response_keys[i]} :: ${response_json[response_keys[i]]}`;
                data[response_keys[i]] = response_json[response_keys[i]];
            }
        }
        localStorage.setItem("user_data", JSON.stringify(data))
    } 


    return (
    <>
        <div className="my_profile_wrapper">
            <div className="data_wrapper">
                <h4 id="email"></h4>
                <h4 id="first_name"></h4>
                <h4 id="second_name"></h4>
                <h4 id="third_name"></h4>
                <h4 id="phone"></h4>
                <h4 id="role"></h4>
                <input type="button" value="logout" onClick={auth_manager.logout}/>
            </div>
        </div>
    </>
    )
}