import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingList from "./BookingList";

export default function MyBookings (props) {
    console.log('what are these props', props)

    const [userBooking, setUserBooking] = useState([])

    useEffect(() => {
        getMyBookings(props.user)
    }, [])

    const id = useParams()
    
    const getMyBookings = () => {
		axios({
			url: `http://localhost:8000/bookings`,
			method: 'GET',
            headers: {
                'Authorization': `Token ${props.user.token}`
            },
		})
        .then(foundBookings => {
            console.log('this is user bookings', foundBookings)
            setUserBooking(foundBookings)
        })

    }


    return (
        <div>
            <BookingList  />
        </div>
    )
}