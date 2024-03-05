import React, { useEffect, useState } from "react"
import NavBar from "../navbar/navbar"
import { APIEndpoints } from "../enums.tsx";


export default function AppendSoftwareEquipment() {

    if(localStorage.getItem("user_data") == null){
        window.location.href = "/login"
    }

    const [requestresult, setRequestresult] = useState(null);

    const set_software_and_equipment = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "team_name": document.getElementById("team_name").value,
            "event_name": document.getElementById("event_name").value,
            "nomination_name": document.getElementById("nomination_name").value,
            "software":  document.getElementById("software_name").value,
            "equipment": document.getElementById("equipment_name").value,
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.set_team_software_equipment, requestOptions);
        const response_json = await response.json()

        if("detail" in response_json){
            alert(response_json.detail)
            setRequestresult(JSON.parse(response_json.detail));
            return;
        }
        setRequestresult("SOFTWARE & EQUIPMENT WAS SET");
    }

    return (
    <>
        {<NavBar />}
        Event :: <input type="text" id="event_name"/><br />
        Nomination :: <input type="text" id="nomination_name"/><br />
        Team :: <input type="text" id="team_name"/><br />
        Software:: <input type="text" id="software_name"/><br />
        Equipment:: <input type="text" id="equipment_name"/><br />
        <input type="button" value="append" onClick={set_software_and_equipment}/>
        {requestresult}
    </>
    )
}