import React, { useEffect } from "react"
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { useFetcher } from "react-router-dom";
import { AuthManager } from "../../managers/auth_manager.tsx";


export default function Events() {

    let auth_manager = new AuthManager();

    return (
    <>
        <div className="events_wrapper">
            <div>EVENTS</div>
        </div>
    </>
    )
}