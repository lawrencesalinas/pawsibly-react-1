import React from "react";

export default function BookingList (props) {
    console.log('these are all booking listing props', props)
    const bookingList = props.userBooking.map((b) =>{
        console.log('all listing b',b)
        return <div>
        <p>Booking Id: {b.id}</p>  
        <p>Sitter: {b.sitter}</p>
        <p>Start Date: {b.start_date}</p>
        <p>End Date: {b.end_date}</p>
        <hr></hr>
       
            </div>
    })
    return(
        <div>
        <h2>These are all my bookings with sitter:</h2>
        {bookingList}
        </div>
    )
}
