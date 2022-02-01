import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./ProfilePets.css";
import { Image } from 'react-bootstrap'
import Footer from "../Footer";
import apiUrl from "../../apiConfig";


export default function ProfilePets(props) {
  //   console.log("hello", props.myPets);
  props.myPets.map((pet) => {
    return (
      <Link key={pet.id} to={`/pets/${pet.id}`}>
        {pet.name}
      </Link>
    );
  });

  const deletePetById = (id) => {
    axios({
      url: `http://localhost:8000/pets/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Token ${props.user.token}`,
      },
    })
      .then((foundPet) => {
        console.log("pet deleted");
        props.setTrigger((x) => !x);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="profilepets">
      <h1>My Pets</h1>
      <div className="profilepets_pet">
        {props.myPets &&
          props.myPets
            .filter((x) => x.name !== null && x.name !== "")
            .map((pet) => (
              
    
              <div className='pet'>
 
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  key={pet.id}
                  to={`/pets/${pet.id}`}
                >
                    <Image  src={pet.image}  className = 'rounded-circle image'  />
                  <h4 className="pet_name">{pet.name}</h4>
                </Link>
                <br></br>
                <button
                  class="btn-floating btn-small waves-effect waves-light red accent-2"
                  style={{ margin: "10px" }}
                  onClick={() => deletePetById(pet.id)}
                >
                  <i class="material-icons">delete</i>
                </button>
              </div>
            ))}
      </div>
      {/* <h1>{listOfPets}</h1> */}
      <h6>add a pet</h6>

    </div>
  );
}
