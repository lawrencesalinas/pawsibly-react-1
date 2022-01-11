import React from 'react'
// import { Link } from 'react-router-dom'


export default function List(props) {
    console.log('props in list', props)
    return (
        <div>
            <h1>These are all the sitters in zipcode {props.listSitter.zipcode}</h1>
            <div>
            <ul>
                <li>
                    {props.listSitter.name}
                    </li>
                    <li>
                    {props.listSitter.rating}
                    </li>
            </ul>
            </div>
        </div>
    )
}
