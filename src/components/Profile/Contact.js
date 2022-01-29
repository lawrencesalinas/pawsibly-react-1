import React from "react";
import SitterForm from "./SitterForm";


export default function Contact (props) {
    console.log('contact props', props)

    return(
        <div>
            Contact sitter:
            <SitterForm setTrigger={props.setTrigger} user={props.user}/>
        </div>
    )
}