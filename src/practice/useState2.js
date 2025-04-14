import {useState} from "react";

export const Usestate2=()=>{
    const [heading,setHeading]=useState("this is react");
    const [description,setDescription]=useState("this is js");
    const changeHeading=()=>{
        setHeading("this is first name");
        setDescription("this is second name");
    }
    return(
        <div>
            <h2>{heading}</h2>
            <p>{description}</p>
            <button onClick={changeHeading}>Change Name</button>
        <p></p>
        </div>
    )
}