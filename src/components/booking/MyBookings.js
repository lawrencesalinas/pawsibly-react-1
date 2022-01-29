import {useState, useEffect} from "react";
import axios from "axios";
import BookingList from "./BookingList";
import apiUrl from "../../apiConfig";

export default function MyBookings (props) {
    console.log('what are these props', props)

    const [userBooking, setUserBooking] = useState([])

    useEffect(() => {
        getMyBookings()
    }, [])

    
    const getMyBookings = () => {
		axios({
			url: `${apiUrl}/bookings`,
			method: 'GET',
            headers: {
                'Authorization': `Token ${props.user.token}`
            },
		})
        .then(foundBookings => {
            console.log('this is user bookings', foundBookings.data.bookings)
            setUserBooking(foundBookings.data.bookings)
        })

    }

    return (
        <div>
            <BookingList userBooking={userBooking}/>
        </div>
    )
}