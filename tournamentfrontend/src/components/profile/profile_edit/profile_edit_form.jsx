import React, { useEffect, useState } from "react"
import { APIEndpoints, frontURLs } from "../../enums.tsx";
import { useFetcher } from "react-router-dom";
import { AuthManager } from "../../../managers/auth_manager.tsx";
import { UserDataManager } from "../../../managers/user_data_manager.tsx";
import NavBar from "../../navbar/navbar.jsx";


export default function ProfileEdit() {
    

    if(localStorage.getItem("user_data") == null){
        window.location.href = "/login"
    }

    const get_my_profile_request = async () => {
        
        if(localStorage.getItem("user_data") != null){
            return
        }

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

    useEffect(() => {
        get_my_profile_request()
      }, []);

    const edit_profile = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "first_name": document.getElementById("first_name").value,
        "second_name": document.getElementById("second_name").value,
        "third_name": document.getElementById("third_name").value,
        "phone": document.getElementById("phone").value
        });

        const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.profile, requestOptions);
        const response_json = await response.json();

        if("detail" in response_json){
            console.log(response.detail);
        }

        window.location.href = frontURLs.profile;
    }

    return (
        <>
            {<NavBar />}
            <hr />
            <div className="my_profile_wrapper">
                <div className="data_wrapper">
                    <input id="first_name" defaultValue={JSON.parse(localStorage.getItem("user_data")).first_name}/>
                    <input id="second_name" defaultValue={JSON.parse(localStorage.getItem("user_data")).second_name}/>
                    <input id="third_name" defaultValue={JSON.parse(localStorage.getItem("user_data")).third_name}/>
                    <input id="phone" defaultValue={JSON.parse(localStorage.getItem("user_data")).phone}/>
                    <input type="button" value="edit" onClick={edit_profile}/>
                </div>
            </div>
        </>
        )
}