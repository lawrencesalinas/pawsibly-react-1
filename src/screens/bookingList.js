// import React, { useState } from "react"
// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'
// import { DateRangePicker } from 'react-date-range'

// function BookingList() {
//     const [startDate, setStartDate] = useState(new Date())
//     const [endDate, setEndDate] = useState(new Date())
//     const selectionRange = {
//         startDate: startDate,
//         endDate: endDate,
//         key: "selection",
//     }
//     function handleSelect(ranges) {
//         setStartDate(ranges.selection.startDate)
//         setEndDate(ranges.selection.endDate)
//     }
//     return (

  
//         <div>
//             <DateRangePicker ranges ={[selectionRange]} onChange={{handleSelect}} 
//               />
//         </div>
//     )
// }


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
