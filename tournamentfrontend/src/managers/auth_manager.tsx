import { APIEndpoints, frontURLs } from "../components/enums.tsx";

export class AuthManager{
    constructor() {

    }
    
    async login() {

    const email_input = document.getElementById("email");
    const password_input = document.getElementById("password");

    const email = email_input.value;
    const password = password_input.value;

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": email,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        credentials: 'include'
    };

    const response = await fetch(APIEndpoints.login, requestOptions)
    const response_json = await response.json()

    console.log(response_json);
    if("message" in response_json){
        window.location.href = frontURLs.my_profile;
    }
    if("detail" in response_json){
        alert(response_json["detail"]["error"]);
    };

    } 
    async logout() {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.logout, requestOptions);
        const response_json = await response.json();

        if("message" in response_json){
            window.location.href = frontURLs.login;
        }
        localStorage.removeItem("user_data");

    }
    logged_out_only() {
        if(localStorage.getItem("user_data") != null)window.location.href = frontURLs.my_profile_suffix;
    }
    logged_in_only() {
        if(localStorage.getItem("user_data") == null)window.location.href = frontURLs.login_suffix;
    }
}