import React, { useEffect, useState } from "react"
import { APIEndpoints, frontURLs } from "../../enums.tsx";
import { useFetcher } from "react-router-dom";
import NavBar from "../../navbar/navbar.tsx";


export default function CreateEventForm() {

    const [requestResult, setRequestResult] = useState(null);
    const [nominationInputs, setNominationInputs] = useState([]);

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

        const raw = JSON.stringify({
          "name": document.getElementById("event_name").value,
          "nominations": nominations
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
          credentials: 'include'
        };
        
        const response = await fetch(APIEndpoints.events, requestOptions);
        const response_json = await response.json();

        if("detail" in response_json){
          console.log(response_json.detail);
          return;
        }
        setRequestResult("created");
    }

    return (
    <>
        {<NavBar />}
        <hr />
        <div className="nominations_wrapper">
            Event name :: <input type="text" id="event_name"/><br />
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