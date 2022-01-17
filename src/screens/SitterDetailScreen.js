import axios from 'axios'
import React from 'react'
import { useState, useEffect,  } from 'react'
import { useParams,Link } from 'react-router-dom'
import SitterReview from './SitterReview'

function SitterDetailScreen() {
    const[sitter, setSitter] = useState([])
    const { id } = useParams()
    useEffect(()=> {
    async function fetchData(){
        const { data } = await axios.get(`http://localhost:8000/sitters/${id}`)
        setSitter(data)
        // console.log('sitter', sitter);
        // console.log('data',data);
    }
    fetchData()
},[])



    return (
        <div>
            <Link to={`/sitterReview/${id}`}>Leave a review</Link>
       
        </div>
    )
}

export default SitterDetailScreen
