import React, { useState, useEffect } from "react";
import { getUsersPets } from "../api/pets";
import ProfilePets from "../components/Profile/ProfilePets";
import CreatePets from "../components/Profile/CreatePet";
import "./PetScreen.css";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";

function PetScreen(props) {
  const [userPets, setUserPets] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(false);


  useEffect(() => {
    getUsersPets(props.user)
      .then((user) => {
        console.log("this is profile", user);

        let userPet = user.data.user.pets_owned;
        setUserPets(userPet);
      })
      .catch((err) => console.error(err));
  }, [trigger]);
  console.log("HELLLOOOOOOOOOOOOO", userPets);
  return (
    <div className="pet_screen">
      <ProfilePets
        myPets={userPets}
        user={props.user}
        setTrigger={setTrigger}
      />
      <div className="createpets">
        <CreatePets user={props.user} setTrigger={setTrigger} />
      </div>
    </div>
  );
}

export default PetScreen;
