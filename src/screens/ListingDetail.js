import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ListingDetail(props) {
    console.log('user token', props.user)

    const[singleSitter, setSingleSitter] = useState([])
    const[booking, setBooking] = useState([])

    let newParam = useParams()

    useEffect(() =>{
        // console.log('getting single sitter')
        getSingleSitter()
        createBooking()
    }, [])

    const getSingleSitter = () => {
        axios({
			url: `http://localhost:8000/users/${newParam.id}`,
			method: 'GET',
		})
        .then(foundSingleSitter =>{
            console.log('this is single sitter', foundSingleSitter.data)
            setSingleSitter(foundSingleSitter.data.user)
        })
    }


    const createBooking = () => {
        axios({
            url: 'http://localhost:8000/bookings',
            method: 'POST',
            headers: {
                'Authorization': `Token ${props.user.token}`
            },
        })
        .then(createdBooking =>{
            console.log('this create booking AXIOS', createdBooking)
            setBooking(createdBooking)
        
        })
    }
    
    
    
    

    return (
        <div>
            <h1>{singleSitter.name}</h1>
            <p>{singleSitter.rating}</p>
            <li>
                    <Link to={`/createbooking/${booking}`}>Book this Sitter</Link>
                    </li>
        </div>
    )
}