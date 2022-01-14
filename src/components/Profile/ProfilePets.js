import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import PetDetail from "./PetDetail";
import { Icon } from "react-materialize";

export default function ProfilePets(props) {
    //   console.log("hello", props.myPets);
    const listOfPets = props.myPets.map((pet) => {
        return (

            <Link key={pet.id} to={`/pets/${pet.id}`}>{pet.name}</Link>

        )
    })

    const deletePetById = id => {
        axios({
            url: `http://localhost:8000/pets/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${props.user.token}`
            },
            // body:{        
            //   name: newName
            // }
        })
            .then(foundPet => {
                console.log('pet deleted')
                props.setTrigger(x => !x)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            {/* <h1>{listOfPets}</h1> */}
            <h6>add a pet</h6>
            <h4>{props.myPets && props.myPets.filter(x => x.name !== null && x.name !== '').map(pet => <div>
                <Link style={{ 'textDecoration': 'none', 'color': 'black' }} key={pet.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
                <button class="btn-floating btn-small waves-effect waves-light red accent-2" style={{ 'margin': '10px' }} onClick={() => deletePetById(pet.id)}><i class="material-icons">delete</i></button>
            </div>)}</h4>
        </div>
    )
}