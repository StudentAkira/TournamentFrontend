import React, { useEffect, useState } from "react"
import { APIEndpoints, frontURLs } from "../../enums.tsx";
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";


export default function CreateEventForm() {

    if(localStorage.getItem("user_data") == null){
      window.location.href = "/login"
    }

    const [requestResult, setRequestResult] = useState(null);
    const [participantsEmailsInputs, setParticipantsEmailsInputs] = useState([]);

    const create_team_request = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        
        let partcicipants_emails = [];

        for(let i = 0; i < participantsEmailsInputs.length; i++){
            partcicipants_emails = [...partcicipants_emails, document.getElementById(`participant_email_${i + 1}`).value]
        }

        const raw = JSON.stringify({
        "team": {
            "name": document.getElementById("team_name").value
        },
        "participants_emails": partcicipants_emails
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        credentials: 'include'
        };

        const response = await fetch(APIEndpoints.teams, requestOptions);
        const response_json = await response.json();

        console.log(response_json)

        if("detail" in response_json){
          console.log(response_json.detail);
          return;
        }
        setRequestResult("CREATED");
    }

    return (
    <>
        {<NavBar />}
        <hr />
        <h1>CREATE TEAM</h1>
        <hr />
        <div className="team_create_wrapper">
            Team name :: <input type="text" id="team_name"/><br />
            {
                participantsEmailsInputs.map(
                    (item, index) => (
                      <div className="input_block" key={`input_block_${index}`}>
                        <span>Participant email :: {item}</span>
                      </div> 
                    )
                )
            }
            <input type="button" value="create" onClick={create_team_request}/>
            <input type="button" value="+" onClick={()=>{
              setParticipantsEmailsInputs(
                  participantsEmailsInputs =>
                    [...participantsEmailsInputs,
                        <input 
                        type="text" 
                        id={
                          `participant_email_${participantsEmailsInputs.length + 1}`
                        }
                        />
                    ]
                );
            }}/>
            <h1>{requestResult}</h1>
        </div>
    </>
    )
}