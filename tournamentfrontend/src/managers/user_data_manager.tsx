import { APIEndpoints, frontURLs } from "../components/enums.tsx";


export class UserDataManager {
    constructor () {

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
