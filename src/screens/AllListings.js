import React from "react";
import List from "./List";


export default function AllListings (props) {
    console.log('these are all listing props', props)
    const listings = props.allUsers.map((l) =>{
        console.log('all listing l',l)
        return <div>
            <List sitterListings={l} />
        </div>
    })
    return (
                <>
                {listings}
                </>


            
            
    )
}