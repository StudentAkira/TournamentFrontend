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

    const create_team_redirect = () => {
        window.location.href = frontURLs.create_team_suffix
    }

    const create_nominations_redirect = () => {
        window.location.href = frontURLs.create_nominations_suffix
    }

    const create_participant_redirect = () => {
        window.location.href = frontURLs.create_participant_suffix
    }

    const participant_redirect = () => {
        window.location.href = frontURLs.particiapant_suffix
    }

    const append_participant_to_team_redirect = () => {
        window.location.href = frontURLs.append_participant_to_team_suffix
    }

    const get_nomination_events_full_info_redirect = () => {
        window.location.href = frontURLs.get_nomination_events_full_info_suffix
    }

    const append_team_to_nomination_event_redirect = () => {
        window.location.href = frontURLs.append_team_to_nomination_event_suffix
    }



    return (
    <>
        <div className="nav_bar">
            <div className="profile" onClick={profile_redirect}><h1>profile</h1></div>
            <div className="events" onClick={event_redirect}><h1>events</h1></div>
            <div className="nominations" onClick={nomination_redirect}><h1>nominations</h1></div>
            <div className="teams" onClick={teams_redirect}><h1>teams</h1></div>
            <div className="create_event" onClick={create_event_redirect}><h1>create new event</h1></div>
            <div className="create_team" onClick={create_team_redirect}><h1>create new team</h1></div>
            <div className="create_nominations" onClick={create_nominations_redirect}><h1>create new nomination</h1></div>
            <div className="create_participant" onClick={create_participant_redirect}><h1>create new participant</h1></div>
            <div className="create_participant" onClick={participant_redirect}><h1>get participants</h1></div>
            <div className="append_participant_to_team" onClick={append_participant_to_team_redirect}><h1>append aprticipant to team</h1></div>
            <div className="get_nomination_events_full_info" onClick={get_nomination_events_full_info_redirect}><h1>get nomination events</h1></div>
            <div className="append_team_to_nomination_event" onClick={append_team_to_nomination_event_redirect}><h1>append_team_to_nomination_event</h1></div>
        </div>
    </>
    )
}