import React, { useEffect, useState } from "react"
import "./profile.css" 
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { useFetcher } from "react-router-dom";
import { AuthManager } from "../../managers/auth_manager.tsx";
import { UserDataManager } from "../../managers/user_data_manager.tsx";
import NavBar from "../navbar/navbar.tsx";


export default function Profile() {


    useEffect(() => {
        get_my_profile_request()
      }, []);

    const logout = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.logout, requestOptions);
        const response_json = await response.json();

        if("message" in response_json){
            window.location.href = frontURLs.login;
        }
        localStorage.removeItem("user_data");
    }

    const get_my_profile_request = async () => {
        
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };

        const respose = await fetch(APIEndpoints.profile, requestOptions)
        const response_json = await respose.json();
        if("detail" in response_json){
            window.location.href = frontURLs.login;
            return;
        }

        let response_keys = Object.keys(response_json);
        let data = {}

        for(let i = 0; i < response_keys.length; i++){
            let element = document.getElementById(response_keys[i]);
            if(element != null){
                element.innerHTML = `${response_keys[i]} :: ${response_json[response_keys[i]]}`
                element.innerHTML = `${response_keys[i]} :: ${response_json[response_keys[i]]}`;
                data[response_keys[i]] = response_json[response_keys[i]];
            }
        }
        localStorage.setItem("user_data", JSON.stringify(data))
    } 

    return (
    <>
        {<NavBar />}
        <div className="my_profile_wrapper">
            <div className="data_wrapper">
                <h4 id="email"></h4>
                <h4 id="first_name"></h4>
                <h4 id="second_name"></h4>
                <h4 id="third_name"></h4>
                <h4 id="phone"></h4>
                <h4 id="role"></h4>
                <input type="button" value="logout" onClick={logout}/>
            </div>
        </div>
    </>
    )
}