import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import PetDetail from "./PetDetail";

export default function ProfilePets(props) {
//   console.log("hello", props.myPets);
  const listOfPets = props.myPets.map((pet) => {
    return (
      
        <Link key ={pet.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
      
    )
  })

  const deletePetById = id => {
    axios({
			url: `http://localhost:8000/pets/${id}`,
			method: 'DELETE',
            headers:{
                'Authorization': `Token ${props.user.token}`
            },
           // body:{        
           //   name: newName
           // }
		})
		.then(foundPet=>{
			console.log('pet deleted')
      props.setTrigger(x=>!x)
		})
		.catch(err =>{
			console.log(err)
		})
  }

  return (
    <div>
      {/*<h1>{listOfPets}</h1>*/}
      <h1>{props.myPets && props.myPets.filter(x => x.name !== null && x.name !== '').map(pet =><div> 
        <Link key ={pet.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
        <button onClick={() => deletePetById(pet.id)}>X</button>
        </div>)}</h1>
    </div>
  )
}
