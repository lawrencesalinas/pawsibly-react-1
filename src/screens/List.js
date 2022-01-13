import React from 'react'
import { Link } from 'react-router-dom'


export default function List(props) {
    console.log('props in sitter list', props)
    return (
        <div>
            {/* <h1>These are all the sitters in zipcode {props.sitterListing.zipcode}</h1> */}
            <div>
            <ul>
                <li>
                    <Link to={`/sitterlisting/${props.sitterListings.id}`}>{props.sitterListings.first_name}</Link>
                    </li>
                    <li>
                    {props.sitterListings.rating}
                    </li>
            </ul>
            </div>
        </div>
    )
}
