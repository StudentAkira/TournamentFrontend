import React, { useEffect, useState } from "react"
import { APIEndpoints, frontURLs } from "../../enums.tsx";
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";
import "./append_participant_to_team_form.css" 


export default function AppendParticipantToTeam() {

    if(localStorage.getItem("user_data") == null){
      window.location.href = "/login"
    }

    const [requestResult, setRequestResult] = useState(null);
    const [participants, setParticipants] = useState([]);
    const [teams, setTeams] = useState([]);

    const append_participant_to_team = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
          credentials: 'include'
        };
        
        console.log(document.getElementById("participant_email").value);
        console.log(document.getElementById("team_name").value);

        console.log(`${APIEndpoints.participant_to_team}?participant_email=${document.getElementById("participant_email").value}&team_name=${document.getElementById("team_name").value}`);

        const response = await fetch(
            `${APIEndpoints.participant_to_team}?participant_email=${document.getElementById("participant_email").value}&team_name=${document.getElementById("team_name").value}`, requestOptions)
        const response_json = await response.json();


        if("detail" in response_json){
            console.log(response_json.detail);
            return;
        }

        setRequestResult("PARTICIPANT TO APPENDED TO TEAM");
    }

    const get_participants = async ()=> {

        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.participants + "?offset=0&limit=49", requestOptions);
        const response_json = await response.json();

        // console.log(response_json);
        
        if("detail" in response_json) {
            alert(response_json.detail);
            return;
        }
        setParticipants(response_json);
    }

    const get_teams = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.teams + "?offset=0&limit=49", requestOptions);
        const response_json = await response.json();

        // console.log(response_json);
        
        if("detail" in response_json) {
            alert(response_json.detail.message);
            return;
        }
        setTeams(response_json);
    }


    useEffect(
        ()=>{
            get_participants()
            get_teams()
        }
        , []);


    return (
    <>
        {<NavBar />}
        <hr />
        <h1>APPEND PARTICIPANT TO TEAM</h1>
        <hr />
        <div className="append_participant_to_team_wrapper">
        <div className="forms_participants_teams">
            Participant email :: <input type="text" id="participant_email"/><br />
            Team name :: <input type="text"  id="team_name" /><br />
            <input type="button" value="append" onClick={append_participant_to_team}/> 
            <h1>{requestResult}</h1>
        </div>
        <div className="participants">
            <h1>:: Participants ::</h1>
            {
                participants.map(
                    (item) => (
                        <h1 key={item.name}>{item.email}</h1>
                    )
                )
            }
        </div>
        <div className="teams">
            <h1>:: Teams ::</h1>
            {
                teams.map(
                    (item) => (
                        <h1 key={item.name}>{item.name}</h1>
                    )
                )
            }
        </div>
        </div>
    </>
    )
}