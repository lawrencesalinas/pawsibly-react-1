import { useState } from "react";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

export default function CreateBooking (props) {
    console.log('this is props for sitter booking', props)

    const[newBooking, setBooking] =useState([])
    const [date, setDate] = useState([])
    const now = new Date();
   

    const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)

    const [value, onChange] = useState([yesterdayBegin, todayEnd]);

    const createBooking = (e) => {
        e.preventDefault()
    const booking = { pet_owner:props.user.id, start_date:date[0],end_date:date[1], sitter:props.singleSitter.id}

    console.log('booking date', date)
   
    fetch(`http://localhost:8000/bookings`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.user.token}`},
      body: JSON.stringify(booking)
    }).then(createdBooking => {
      console.log('new booking added', createdBooking)
      setBooking(createdBooking)
     

    }).catch(error =>{
      console.log(error);
    })
  
  }

    const handleDate = (data) => {
        console.log('date data', data)
        setDate(data) 
        
    }



    return (
        <div class="card">
            <div class="row center">
                <div class="col s12 m6">
                        <div class="card-content black-text">
                            <span class="card-title">create a booking</span>
                            <span class="card-title">select dates</span>
                            <DateRangePicker appearance='default'
                                name='date'
                                id='date'
                                onChange={handleDate}
                                value={value}                        />
                            <a class="btn-floating btn-large waves-effect waves-light yellow" onClick={createBooking}><i class="material-icons">add</i></a>
                        </div>
                        <div>
                        </div>
                </div>
            </div>
        </div>
    )
}