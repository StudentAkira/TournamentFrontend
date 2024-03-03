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

    if("message" in response_json){
        window.location.href = frontURLs.profile;
    }
    if("detail" in response_json){
        alert(response_json["detail"]["error"]);
    };

    let user_data = await this.get_user_data();

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

    async get_user_data() {

        if(localStorage.getItem("user_data") != null)return JSON.parse(localStorage.getItem("user_data"))

        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
    
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        credentials: 'include'
        };
    
        const respose = await fetch(APIEndpoints.profile, requestOptions)
        const response_json = await respose.json();
    
        if("detail" in response_json){
            window.location.href = frontURLs.login;
            localStorage.removeItem("user_data");
            return;
        }
        
        let response_keys = Object.keys(response_json);
        let data = {};

        for(let i = 0; i < response_keys.length; i++){
            data[response_keys[i]] = response_json[response_keys[i]];
        }
        
        return localStorage.setItem("user_data", JSON.stringify(data))
    } 
}