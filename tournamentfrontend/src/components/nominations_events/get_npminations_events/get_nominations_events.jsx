import React, { useEffect, useState } from "react"
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";
import { APIEndpoints } from "../../enums.tsx";


export default function NominationEvents() {

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
        <h1>GET EVENTS</h1>
        <hr />
        <div className="event_wrapper">
            {
                items.map(
                    (item) => (
                        <div className="nomination_event_wrapper">
                            <h1 key={item.event_name+item.nomination_name}>{item.event_name} :: {item.nomination_name}</h1>
                                <div className="teams">
                                    {
                                        item.teams.map(
                                            (team) => (
                                                <div className="team">
                                                    <h3>:: Team ::</h3>
                                                    {team.name}
                                                    <h3>:: Participants ::</h3>
                                                    {
                                                        <div className="participants">
                                                            {
                                                                team.participants.map(
                                                                    (participant) => (
                                                                        <div className="participant">
                                                                            {participant.email}
                                                                        </div>
                                                                    )
                                                                )
                                                            }
                                                        </div>
                                                    }
                                                    <br />
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            <hr />
                        </div>
                    )
                )
            }
            <br />
            
            <hr />
        </div>
    </>
    )
}