import React from 'react'
import { getSinglePet } from '../../api/pets'
import { useState, useEffect, useParams } from 'react'
import axios from 'axios'


export default function PetDetail(props) {
    const[singlePet,setSinglePet] = useState([])
    
    useEffect(() =>{
	
	}, [])

    let params = useParams()
    getSinglePet(props.user,`${params.id}`)
    .then(foundUser => {
        console.log('housfkjdsahf', foundUser);
    })
    
	// const getUsers = () =>{
	// 	axios({
	// 		url: `http://localhost:8000/pets/${params.id}/`,
	// 		method: 'GET',

	// 	})
	// 	.then(foundUsers=>{
	// 		console.log('finding pet', foundUsers)
	// 		// setAllUsers(foundUsers)
	// 		// console.log('all users:', foundUsers)
	// 	})
	// 	.catch(err =>{
	// 		console.log(err)
	// 	})
	// }


    return (
        <div>
            <h1></h1>
        </div>
    )
}

// export default PetDetail
