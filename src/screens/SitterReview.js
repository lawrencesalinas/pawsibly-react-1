import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function SitterReview(props) {
    const[review,setReview] = useState('')
    const[rating, setRating] = useState(0)
    const[viewComment, setViewComment] = useState([])
    let {id} = useParams()
    const createReview = (e) => {
        e.preventDefault()
        const rev = {pet_owner:props.user.id, rating:3, review:'hello',sitter:`${id}`}
        fetch(`http://localhost:8000/createreviews/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${props.user.token}`
            },
            body: JSON.stringify(rev)
          }).then(() => {
            console.log('new pet added');
        
        
            // useNavigate(-1)
          })
    }
    useEffect =(()=> {
        async function fetchData(){
            const {data} = await axios.get(`http://localhost:8000/reviews/${id}`)
            console.log(data);
        }
        fetchData()
    },[])





    return (
        <div>
            <form onSubmit={createReview}>
         <label>Write a Review</label>
          <input type = 'text'
          required
          value = {review} review='review'
          onChange={(e) => setReview(e.target.value)}
          />
          <button>submit Review</button>
          </form>




        </div>
    )
}

export default SitterReview
