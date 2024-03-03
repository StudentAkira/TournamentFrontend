import React, { useEffect } from "react"
import "./myprofile.css" 
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { useFetcher } from "react-router-dom";


export default function MyProfile() {

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
        }

        console.log(Object.keys(response_json));
        
        let response_keys = Object.keys(response_json);
        let element;

        for(let i = 0; i < response_keys.length; i++){
            element = document.getElementById(response_keys[i]);
            if(element){
                element.innerHTML = `${response_keys[i]} :: ${response_json[response_keys[i]]}`
                localStorage.setItem(response_keys[i], response_json[response_keys[i]]);
            }
        }
        


    } 

    const logout_func = async () => {
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
                <input type="button" value="logout" onClick={logout_func}/>
            </div>
        </div>
    </>
    )
}