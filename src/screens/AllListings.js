import React from "react";
import List from "./List";


export default function AllListings (props) {
    console.log('these are all sitter listing props', props)
    const listings = props.allSitters.map((l) =>{
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