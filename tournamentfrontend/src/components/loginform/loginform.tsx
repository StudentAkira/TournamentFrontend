import React from "react"
import "./loginform.css" 


export default function LoginForm() {

    const login_request = () => {
    //    alert("hellow");
    } 

    return (
    <>
    <div className="forms_wrapper">
        <h2 className="login_title">Login</h2>
        <div className="forms">
            <input type="text" />
            <input type="text" />
            <input 
                type="button" 
                value="submit" 
                onClick={login_request}
            />
        </div>
    </div>
    </>
    )
}