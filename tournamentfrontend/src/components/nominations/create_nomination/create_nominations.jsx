import React, { useEffect, useState } from "react"
import { APIEndpoints, frontURLs } from "../../enums.tsx";
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.jsx";


export default function CreateNominationsForm() {

    if(localStorage.getItem("user_data") == null){
        window.location.href = "/login"
    }

    const [requestResult, setRequestResult] = useState(null);
    const [nominationInputs, setNominationInputs] = useState([<input type="text" id={`nomination_name_1`}/>]);

    const create_event_request = async () => {
        console.log(nominationInputs.length);
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        
        let nominations = [];

        for(let i = 0; i < nominationInputs.length; i++){
          nominations = [...nominations, {"name": document.getElementById(`nomination_name_${i + 1}`).value}]
        }

        console.log(nominations);

        const raw = JSON.stringify(nominations);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
          credentials: 'include'
        };
        
        const response = await fetch(APIEndpoints.nominations, requestOptions);
        const response_json = await response.json();

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
        <h1>CREATE NOMINATIONS</h1>
        <hr />
        <div className="event_create_wrapper">
            {
                nominationInputs.map(
                    (item, index) => (
                      <div className="input_block" key={`input_block_${index}`}>
                        <span>Nomination name :: {item}</span>
                      </div> 
                    )
                )
            }
            <input type="button" value="create" onClick={create_event_request}/>
            <input type="button" value="+" onClick={()=>{
              setNominationInputs(
                  nominationInputs =>
                    [...nominationInputs,
                        <input 
                        type="text" 
                        id={
                          `nomination_name_${nominationInputs.length + 1}`
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