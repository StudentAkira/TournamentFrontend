import React, { useEffect, useState } from "react"
import { APIEndpoints, frontURLs } from "../../enums.tsx";
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";


export default function CreateTeamForm() {

    if(localStorage.getItem("user_data") == null){
        window.location.href = "/login"
    }

    const [requestResult, setRequestResult] = useState(null);

    const create_team_request = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "name": document.getElementById("team_name").value
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.teams, requestOptions);
        const response_json = await response.json();

        if("detail" in response_json){
            alert(response_json.detail.error);
            console.log(response_json.detail.error);
            return;
        }

        setRequestResult("CREATED");
    }

    return (
    <>
        {<NavBar />}
        <hr />
        <h1>CREATE TEAM</h1>
        <hr />
        <div className="teams_wrapper">
            Team name :: <input type="text" id="team_name"/><br />
            <input type="button" value="create" onClick={create_team_request}/>
            <h1>{requestResult}</h1>
        </div>
    </>
    )
}