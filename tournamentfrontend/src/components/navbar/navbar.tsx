import React, { useEffect } from "react"
import { frontURLs } from "../enums.tsx"


export default function NavBar() {

    const profile_redirect = () => {
        window.location.href = frontURLs.profile_suffix
    }

    const event_redirect = () => {
        window.location.href = frontURLs.events_suffix
    }

    return (
    <>
        <div className="nav_bar">
            <div className="my_profile" onClick={profile_redirect}>My profile</div>
            <div className="my_events" onClick={event_redirect}>My events</div>
        </div>
    </>
    )
}