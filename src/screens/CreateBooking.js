import { useState, useEffect } from "react";
import axios from "axios";
import ListingDetail from "./ListingDetail";
import { useParams } from "react-router-dom";
// import DatePicker from "../components/DatePicker";
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { Button } from "react-materialize";

export default function CreateBooking(props) {
    console.log('this is props for sitter booking', props)

    const [booking, setBooking] = useState([])
    const [createdBooking, setCreatedBooking] = useState([])
    const [user, setUser] = useState(props.user)
    const [sitterName, setSitterName] = useState(props.singleSitter.first_name)
    const [date, setDate] = useState([])
    const newParams = useParams()
    const now = new Date();

    const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)

    const [value, onChange] = useState([yesterdayBegin, todayEnd]);
    // console.log('this is the', yesterdayBegin)
    // console.log('this is the', todayEnd)

    const createBooking = (e) => {
        e.preventDefault()
        // console.log('form', e.target.name.value)
        // console.log('form date', e.target.date.value)
        axios({
            url: `http://localhost:8000/bookings`,
            method: 'POST',
            headers: {
                'Authorization': `Token ${props.user.token}`
            },
            body: {
                sitter: props.singleSitter.id,
                start_date: date[0], end_date: date[1]
            }

        })

    }

    const handleDate = (data) => {
        console.log('date data', data)
        setDate(data)
    }

    // useEffect(() =>{
    //     console.log('create booking')
    //     createBooking()
    // }, [])

    return (
        <div class="card small">
            <div class="row center">
                <div class="col s12 m6">
                    <div class="card #e57373 red lighten-2">
                        <div class="card-content white-text">
                            <span class="card-title">create a booking</span>
                            {/* <form onSubmit={createdBooking}> */}
                            <label class="black-text" htmlFor='name'>Sitter Name:</label>
                            <input type='text' name='name' id='name'
                                value={sitterName}
                                onChange={e => setSitterName(e.target.value)} />
                            <label class="black-text" htmlFor='name'>User Name:</label>
                            <input type='text' name='id' id='id'
                                value={user.email}
                                onChange={e => setUser(e.target.value)} />
                            <span class="card-title">select dates</span>
                
                            <DateRangePicker
                                name='date'
                                id='date'
                                onChange={handleDate}
                                value={value}
                            />
                            <br></br>
                            <Button onClick={createBooking}>schedule</Button>
                            {/* </form> */}
                            <a class="btn-floating btn-large waves-effect waves-light yellow" onClick={createBooking}><i class="material-icons">add</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}