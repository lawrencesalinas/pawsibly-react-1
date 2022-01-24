import React from "react";
import List from "./List";

export default function ReviewListing (props) {
    const reviewListings = props.review.map((r) =>{
        console.log('all listing r',r)
        return <div>
        <p>Review Id: {r.id}</p>  
        <p>sitter: {r.sitter}</p>
        <p>Rating: {r.rating}</p>
        <p>Review : {r.review}</p>
        <hr></hr>
        </div>
    })

    return (
        <div>
            <h2>These are the reviews I posted:</h2>
        <li>
            {reviewListings}
        </li>
        </div>
    )
}
    