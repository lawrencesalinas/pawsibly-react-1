import React from "react";
import { Link } from "react-router-dom";
import PetDetail from "./PetDetail";

export default function ProfilePets(props) {

    const myPets = props.myPets.map((pet) => {
        return (
            <div>
                <Link key={pet.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
            </div>
        )
    })

    return (
        <div>
            <h1>{myPets}</h1>
        </div>
    )
}
