// import {useState, useEffect} from "react";
// import axios from "axios";
// import ListingDetail from "./ListingDetail";

// export default function CreateBooking (props) {
//     console.log('this is props for sitter booking', props.user)

//     const[booking, setBooking] = useState([])

//     const createBooking = (e) => {
//         e.preventDefault()
//         console.log('form', e.target.name.value)
//         axios({
//             url: 'http://localhost:8000/bookings',
//             method: 'POST',
//             headers: {
//                 'Authorization': `Token ${props.user.token}`
//             },
//         })
      
//     }

//     // useEffect(() =>{
//     //     console.log('create booking')
//     //     createBooking()
//     // }, [])

//     return(
//         <div>
//              <h1>Create a Booking</h1>
//             <form onSubmit={createBooking}>
//                 <label htmlFor ='date'>Dates:</label>
//                 <input type='text' name='name' id='name' 
//                   value={props.user.name}/>
//                   </form>
//             </div>
        
//     )
// }