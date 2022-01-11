import React from "react";
import List from "./List";
// import HomeScreen from "./HomeScreen";

export default function AllListings (props) {
    const listings = props.allUsers.map((l) =>{
        console.log(l)
        return <div>
            <List listSitter={l} />
        </div>
    })
    return (
        <div>
            {listings}
        </div>
    )
}