import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


export default function ListingDetail(props) {

    const[singleSitter, setSingleSitter] = useState([])

    let newParam = useParams()

    useEffect(() =>{
        console.log('getting single sitter')
        getSingleSitter()
    }, [])

    const getSingleSitter =()=>{
        axios({
			url: `http://localhost:8000/users/${newParam.id}`,
			method: 'GET',
		})
        .then(foundSingleSitter =>{
            setSingleSitter(foundSingleSitter)
        })
    }
    return (
        <div>
            <h1>{singleSitter.name}</h1>
        </div>
    )
}