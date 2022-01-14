import {useState} from "react";
import { useParams } from "react-router-dom";
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'

export default function CreateBooking (props) {
    console.log('this is props for sitter booking', props)

    const[user, setUser] = useState(props.user.id)
    const[sitterName, setSitterName] = useState(props.singleSitter.id)
    const[date, setDate] = useState([])
    const now = new Date();
    const newParam = useParams()

    const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)

    const [value, onChange] = useState([yesterdayBegin, todayEnd]);

    const createBooking = (e) => {
        e.preventDefault()
    const booking = { user, start_date:value[0],end_date:value[1], sitterName }

    console.log('booking date', date, user, sitterName)
   
    fetch(`http://localhost:8000/bookings`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.user.token}`},
      body: JSON.stringify(booking)
    }).then(createdBooking => {
      console.log('new booking added', createdBooking);
    }).catch(error =>{
      console.log(error);
    })
  
  }

    const handleDate = (data) => {
        console.log('date data', data)
        setDate(data)
    }

    return(
        <div>
             <h1>Create a Booking</h1>
                <label htmlFor ='name'>Sitter Name:</label>
                <input type='text' name='name' id='name' 
                  value={sitterName}
                  onChange={e=>setSitterName(e.target.value)}/>
                <label htmlFor ='name'>User Name:</label>
                <input type='text' name='id' id='id' 
                  value={user.id}
                  onChange={e=>setUser(e.target.value)}/>
                  <h3>Select Dates:</h3>
            <DateRangePicker
                name='date'
                id='date'
                onChange={handleDate}
                value={value}
            />
            <button onClick={createBooking}>created booking</button>
            
        </div>
        
    )
}