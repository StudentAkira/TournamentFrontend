import React, { useEffect } from "react"
import { frontURLs } from "../enums.tsx"


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


    return (
    <>
        <div className="nav_bar">
            <div className="profile" onClick={profile_redirect}><h1>profile</h1></div>
            <div className="events" onClick={event_redirect}><h1>events</h1></div>
            <div className="nominations" onClick={nomination_redirect}><h1>nominations</h1></div>
        </div>
    </>
    )
}