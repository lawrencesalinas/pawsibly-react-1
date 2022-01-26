import React from "react";
import AllUserReview from "./AllUserReview";


export default function ReviewListing(props) {
    const reviewListings = props.review.map((r) => {
        console.log('all listing r', r)
        return <div>
            <AllUserReview reviewListing={r} />
            <hr></hr>
        </div>
    })

    return (
        <div>
            <h2 class='center'>These are the reviews I posted:</h2>
            <li>
                {reviewListings}
            </li>
        </div>
    )
}
