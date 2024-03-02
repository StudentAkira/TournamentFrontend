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

        const email = document.getElementById("email");
        email.innerText = `Email :: ${response_json["email"]}`;

        const first_name = document.getElementById("first_name");
        first_name.innerText = `First name :: ${response_json["first_name"]}`

        const second_name = document.getElementById("second_name");
        second_name.innerText = `Second name :: ${response_json["second_name"]}`

        const third_name = document.getElementById("third_name");
        third_name.innerText = `Third name :: ${response_json["third_name"]}`

        const phone = document.getElementById("phone");
        phone.innerText = `Phone name :: ${response_json["phone_name"]}`

        const role = document.getElementById("role");
        role.innerText = `First name :: ${response_json["role"]}`

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