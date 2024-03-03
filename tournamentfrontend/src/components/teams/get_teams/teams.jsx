import React, { useEffect, useState } from "react"
import { APIEndpoints, frontURLs } from "../../enums.tsx";
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";


export default function Teams() {

    if(localStorage.getItem("user_data") == null){
        window.location.href = "/login"
    }

    const [items, setItems] = useState([]);

    const get_items_request = async () => {
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

        console.log(response_json);
        
        if("detail" in response_json) {
            alert(response_json.detail.message);
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
        <h1>GET TEAMS</h1>
        <hr />
        <div className="teams_wrapper">
            {
                items.map(
                    (item) => (
                        <h1 key={item.name}>{item.name}</h1>
                    )
                )
            }
        </div>
    </>
    )
}