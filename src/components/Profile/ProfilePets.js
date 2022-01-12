import React from "react";
import { Link } from "react-router-dom";
import PetDetail from "./PetDetail";

export default function ProfilePets(props) {
//   console.log("hello", props.myPets);
  const listOfPets = props.myPets.map((pet) => {
    return (
      <div>
        <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
      </div>
    )
  })

  return (
    <div>
      <h1>{listOfPets}</h1>
    </div>
  )
}
