import React, { useEffect, useState } from "react"
import "./profile.css" 
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { useFetcher } from "react-router-dom";
import { AuthManager } from "../../managers/auth_manager.tsx";
import { UserDataManager } from "../../managers/user_data_manager.tsx";


export default function MyProfile() {

    let auth_manager = new AuthManager();
    let user_data_manager = new UserDataManager();

    // useEffect(() => {
    //     // const fill_user_data = async () => {
    //     //     user_data = await user_data_manager.get_user_data();
    //     // }

    //     // fill_user_data();
    //   }, []);

    return (
    <>
        <div className="my_profile_wrapper">
            <div className="data_wrapper">
                <h4 id="email"></h4>
                <h4 id="first_name"></h4>
                <h4 id="second_name"></h4>
                <h4 id="third_name"></h4>
                <h4 id="phone"></h4>
                <h4 id="role"></h4>
                <input type="button" value="logout" onClick={auth_manager.logout}/>
            </div>
        </div>
    </>
    )
}