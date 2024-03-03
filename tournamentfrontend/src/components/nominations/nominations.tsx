import React, { useEffect } from "react"
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { useFetcher } from "react-router-dom";
import NavBar from "../navbar/navbar.tsx";


export default function Nominations() {

    return (
    <>
        {<NavBar />}
        <div className="nominations_wrapper">
            <div>Nominations</div>
        </div>
    </>
    )
}