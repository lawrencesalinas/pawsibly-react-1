
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import { useState, useEffect } from 'react'

// const [newPet, setNewPet] = useState([])

export default function petForm(props) {
  console.log("CRESTE", props.user);
  const createPetForm = (e) => {
    e.preventDefault()
    console.log('pet name', e.target.name.value);
    let searchBar = e.target.name.value
    console.log(searchBar);


    //    axios({
    // 	url:  `http://localhost:8000/users`,
    // 	method: 'POST',
    //     headers: {
    // 		Authorization: `Token ${props.user.token}`,
    // 	},
    // 	 pets: {
    // 			name: e.target.name.value,         
    //             pet_owner:props.user.id
    // 		},

    // })
    // .then(res => {
    //     console.log('server response:', res)
    //     // addCreated(res.data.item._id)
    // })
    let axios = require('axios');
    let data = JSON.stringify({
      "pet": {
        name: e.target.name.value,
        pet_owner: props.user
      }
    });

    let config = {
      method: 'POST',
      url: `http://localhost:8000/pets`,
      headers: {
        'Authorization': `Token ${props.user.token}`,
        'Content-Type': 'application/json',
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
  }
  return (
    <div>
      <form onSubmit={createPetForm} >
        <label for="name" />
        <input type='text' name='name' id="name"   ></input>
        <input type="submit"></input>

      </form>
    </div>
  )


}


