import React, { useEffect, useState } from "react"
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";
import { APIEndpoints } from "../../enums.tsx";
import './append_team_to_nomination_event.css';


export default function AppendTeamToNominationEvents() {

    if(localStorage.getItem("user_data") == null){
        window.location.href = "/login"
    }

    const [teams, setTeams] = useState([]);
    const [nominationEvents, setNominationEvents] = useState([]);
    const [requestResult, setRequestResult] = useState(null);
    const [participantInputs, setParticipantsInputs] = useState([]);

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

    const get_nomination_events = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.get_nomination_events_names + "?offset=0&limit=10", requestOptions);
        const response_json = await response.json();
        setNominationEvents(response_json);
    }

    const append_team_to_event_nomination = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");


        let participant_eamils = [];

        for(let i = 0; i < participantInputs.length; i++){
            participant_eamils = [...participant_eamils, document.getElementById(`participant_email_${i + 1}`).value]
        }


        const raw = JSON.stringify({
        "team_name": document.getElementById("team_name").value,
        "participant_emails": participant_eamils,
        "event_name": document.getElementById("event_name").value,
        "nomination_name": document.getElementById("nomination_name").value,
        "software": document.getElementById("software").value,
        "equipment": document.getElementById("equipment").value
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        credentials: "include"
        };

        const response = await fetch(APIEndpoints.append_team_to_event_nomination, requestOptions)
        const response_json = await response.json();

        if("detail" in response_json){
            console.log(response_json)
            return;
        }
        setRequestResult("APPENDED");        
    }

    useEffect(
        ()=>{
            get_teams()
            get_nomination_events()
        }
        , []);


    return (
    <>
        {<NavBar />}
        <hr />
        <h1>APPEND TEAM TO NOMINATION EVENT</h1>
        <hr />
        <div className="forms_teams_event_nominations">
            <div className="forms_team_event_nomination">
                Team name or participant email :: <input type="text" id="team_name"/><br />
                Event name :: <input type="text" id="event_name"/><br />
                Software :: <input type="text" id="software"/><br />
                Equipment :: <input type="text" id="equipment"/><br />
                Nomination name :: <input type="text" id="nomination_name"/><br /> 
                {
                    participantInputs.map(
                        (item, index) => (
                        <div className="input_block" key={`input_block_${index}`}>
                            <span>Participant email :: {item}</span>
                        </div> 
                        )
                    )
                }
                <input type="button" value="append" onClick={append_team_to_event_nomination}/>
                <input type="button" value="+" onClick={()=>{
                    setParticipantsInputs(
                        nominationInputs =>
                            [...nominationInputs,
                                <input 
                                type="text" 
                                id={
                                `participant_email_${nominationInputs.length + 1}`
                                }
                                />
                            ]
                        );
                    }}/>
                
                {requestResult}
            </div>
            <ul>
                {
                    teams.map(
                        (team) => (
                                <li key={team.name}>{team.name}
                                    <ul>    
                                        {
                                            team.participants.map((participant)=>(
                                                <li>{participant.email}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                        )
                    )
                }
            </ul>

            <ul>
            {
                nominationEvents.map(
                    (item) => (
                        <li>{item.event_name} :: {item.nomination_name}</li>
                    )
                )
            }
            </ul>
        </div>
    </>
    )
}