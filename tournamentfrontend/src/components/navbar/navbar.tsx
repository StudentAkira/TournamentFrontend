import React, { useEffect } from "react"
import { frontURLs } from "../enums.tsx"
import "./navbar.css" 


export default function NavBar() {

    const profile_redirect = () => {
        window.location.href = frontURLs.profile_suffix
    }

    const event_redirect = () => {
        window.location.href = frontURLs.events_suffix
    }

    const nomination_redirect = () => {
        window.location.href = frontURLs.nominations_suffix
    }

    const teams_redirect = () => {
        window.location.href = frontURLs.teams_suffix
    }

    const create_event_redirect = () => {
        window.location.href = frontURLs.create_event_suffix
    }

    return (
    <>
        <div className="nav_bar">
            <div className="profile" onClick={profile_redirect}><h1>profile</h1></div>
            <div className="events" onClick={event_redirect}><h1>events</h1></div>
            <div className="nominations" onClick={nomination_redirect}><h1>nominations</h1></div>
            <div className="teams" onClick={teams_redirect}><h1>teams</h1></div>
            <div className="create_event" onClick={create_event_redirect}><h1>create new event</h1></div>
        </div>
    </>
    )
}