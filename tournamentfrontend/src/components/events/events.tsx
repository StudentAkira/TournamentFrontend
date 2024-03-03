import React, { useEffect } from "react"
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { useFetcher } from "react-router-dom";
import { AuthManager } from "../../managers/auth_manager.tsx";
import NavBar from "../navbar/navbar.tsx";


export default function Events() {

    return (
    <>
        {<NavBar />}
        <div className="events_wrapper">
            <div>EVENTS</div>
        </div>
    </>
    )
}