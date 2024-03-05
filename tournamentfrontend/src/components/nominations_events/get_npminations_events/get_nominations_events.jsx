import React, { useEffect, useState } from "react"
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";
import { APIEndpoints } from "../../enums.tsx";
import './get_nominations_events.css';

export default function NominationEvents() {

    if(localStorage.getItem("user_data") == null){
        window.location.href = "/login"
    }

    const [items, setItems] = useState([]);

    const [showteams, setShowteams] = useState(false);
    const [showparticipants, setShowParticipants] = useState(false);

    if(localStorage.getItem("user_data") == null){
        window.location.href = "/login"
    }

    const get_items_request = async () => {
        
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.get_nomination_events_full_info  + "?offset=0&limit=49", requestOptions);
        const response_json = await response.json();
        

        console.log(response_json)

        if("detail" in response_json){
            console.log(response_json.detail);
            return;
        }
        setItems(response_json);
    } 

    useEffect(() => {
        get_items_request()
    }, []);

    return (
    <>
        {<NavBar />}
        <hr />
        <h1>GET NOMINATION EVENTS</h1>
        <hr />
        <div className="event_wrapper">

        {
            items.map((nomination_event)=>(
                <ul>
                    <li>
                        {nomination_event.event_name} :: {nomination_event.nomination_name}
                        {nomination_event.teams.map((team)=>(
                            <ul>
                                <li>
                                    {team.name}
                                    {team.participants.map((participant)=>(
                                        <ul>
                                            <li>{participant.email}</li>
                                        </ul>
                                    ))}
                                </li>
                            </ul>
                        ))}
                    </li>
                </ul>
            ))
        }
        </div>
    </>
    )
}