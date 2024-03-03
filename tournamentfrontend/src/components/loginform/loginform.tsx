import React, { useEffect } from "react"
import "./loginform.css" 
import { APIEndpoints, frontURLs } from "../enums.tsx";
import { AuthManager } from "../../managers/auth_manager.tsx";


export default function LoginForm() {


    let auth_manager = new AuthManager();
    
    useEffect(auth_manager.logged_out_only, []);

    return (
    <>
    <div className="login_wrapper">
        <div className="forms_wrapper">
            <h2 className="login_title">Login</h2>
            <div className="forms">
                <input type="text" id="email"/>
                <input type="text" id="password"/>
                <input 
                    type="button" 
                    value="submit" 
                    onClick={auth_manager.login}
                />
            </div>
        </div>
    </div>
    </>
    )
}