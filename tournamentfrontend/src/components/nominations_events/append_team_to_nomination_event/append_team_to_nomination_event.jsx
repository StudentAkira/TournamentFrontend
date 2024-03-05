import React, { useEffect, useState } from "react"
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";
import { APIEndpoints } from "../../enums.tsx";
import './append_team_to_nomination_event.css';


export default function AppendTeamToNominationEvents() {

    const [teams, setTeams] = useState([]);
    const [nominationEvents, setNominationEvents] = useState([]);

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
        console.log(123);
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
                Team name :: <input type="text" /><br />
                Event name :: <input type="text" /><br />
                Nomination name :: <input type="text" /><br /> 
                <input type="button" value="append" onClick={append_team_to_event_nomination}/>
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
            <div className="event_nominations">
                <h1>:: Event nominations ::</h1>
                {
                    nominationEvents.map(
                        (item) => (
                            <h1 key={item.event_name + item.nomination_name}>{item.event_name} :: {item.nomination_name}</h1>
                        )
                    )
                }
            </div>
        </div>
    </>
    )
}