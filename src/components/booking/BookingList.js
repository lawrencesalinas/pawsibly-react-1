import React from "react";
import AllBookingList from './AllBookingList'


export default function BookingList(props) {
    console.log('these are all booking listing props', props)
    const bookingList = props.userBooking.map((b) => {
        console.log('all listing b', b)
        return <div>
        
        <AllBookingList bookingListings={b} />
        

        </div>
    })
    return (
        <div>
            <h2 class='center-align'>All Bookings:</h2>
                {bookingList}
        </div>
    )
}
