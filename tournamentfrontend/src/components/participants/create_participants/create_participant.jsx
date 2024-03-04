import React, { useEffect, useState } from "react"
import { APIEndpoints, frontURLs } from "../../enums.tsx";
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";


export default function CreateParticipantForm() {

    const [requestResult, setRequestResult] = useState(null);

    const create_participant = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");


        const raw = JSON.stringify({
            "email": document.getElementById("email").value,
            "first_name": document.getElementById("first_name").value,
            "second_name": document.getElementById("second_name").value,
            "third_name": document.getElementById("third_name").value,
            "region": document.getElementById("region").value,
            "birth_date": document.getElementById("birth_date").value,
            "educational_institution": document.getElementById("educational_institution").value,
            "additional_educational_institution": document.getElementById("additional_educational_institution").value,
            "supervisor_first_name": document.getElementById("supervisor_first_name").value,
            "supervisor_second_name": document.getElementById("supervisor_second_name").value,
            "supervisor_third_name": document.getElementById("supervisor_third_name").value,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
            credentials: 'include'
        };

        const response = await fetch(APIEndpoints.participants, requestOptions);
        const response_json = await response.json();

        if("detail" in response_json){
            console.log(response_json.detail);
            return
        }

        setRequestResult("CREATED");
        
    }

    return (
    <>
        {<NavBar />}
        <hr />
        <h1>CREATE PARTICIPANT</h1>
        <hr />
        <div className="participant_create_wrapper">
            email :: <input type="text" id="email"/><br />
            first_name :: <input type="text" id="first_name" defaultValue="default"/><br />
            second_name :: <input type="text" id="second_name" defaultValue="default"/><br />
            third_name :: <input type="text" id="third_name" defaultValue="default"/><br />
            region :: <input type="text" id="region" defaultValue="default"/><br />
            birth_date :: <input type="text" id="birth_date" defaultValue="2003-05-19"/><br />
            educational_institution :: <input type="text" id="educational_institution" defaultValue="default"/><br />
            additional_educational_institution :: <input type="text" id="additional_educational_institution" defaultValue="default"/><br />
            supervisor_first_name :: <input type="text" id="supervisor_first_name" defaultValue="default"/><br />
            supervisor_second_name :: <input type="text" id="supervisor_second_name" defaultValue="default"/><br />
            supervisor_third_name :: <input type="text" id="supervisor_third_name" defaultValue="default"/><br />
            <br />
            <input type="button" value="create" onClick={create_participant}/>
            <br />
            <h1>{requestResult}</h1>
        </div>
    </>
    )
}