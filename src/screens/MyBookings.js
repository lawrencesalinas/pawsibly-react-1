import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import List from "./List";

export default function MyBookings (props) {

    const [userBooking, setUserBooking] = useState([])

    useEffect(() => {
        getMyBookings()
    }, [])

    const id = useParams()
    
    const getMyBookings = () => {
		axios({
			url: `http://localhost:8000/bookings/${id.id}`,
			method: 'GET',
            headers: {
                'Authorization': `Token ${props.user.token}`
            },
		})
        .then(foundBookings => {
            console.log('this is user bookings', foundBookings.data.booking)
            setUserBooking(foundBookings.data.booking)
        })

    }

    const mybookings = userBooking.map((b) =>{
        console.log('all listing b',b)
        return <div>
            <List userbookings={b} />
        </div>
    })


    return (
        <div>
            My bookings:
            {mybookings}
        </div>
    )
}