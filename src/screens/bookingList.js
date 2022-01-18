import React from "react";

export default function BookingList (props) {
    console.log('these are all booking listing props', props)
    const bookingList = props.userBooking.map((b) =>{
        console.log('all listing b',b)
        return <div>
            <li>userBooking={b}</li>
            </div>
    })
    return(
        <div>
        {bookingList}
        </div>
    )
}
