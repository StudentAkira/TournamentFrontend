import React, { useEffect, useState } from "react"
import { useFetcher } from "react-router-dom";
import { APIEndpoints } from "../../enums.tsx";
import NavBar from "../../navbar/navbar.jsx";


export default function Nominations() {

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

        const response = await fetch(APIEndpoints.nominations + "?offset=0&limit=10", requestOptions);
        const response_json = await response.json();

        console.log(response_json);
        
        if("detail" in response_json) {
            alert(response_json.detail);
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
        <h1>GET NOMINATIONS</h1>
        <hr />
        <div className="nominations_wrapper">
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