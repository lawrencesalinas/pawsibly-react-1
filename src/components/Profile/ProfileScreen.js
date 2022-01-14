import { useEffect, useState } from "react";
import { getUsersPets } from "../../api/pets";
import ProfilePets from "./ProfilePets";
import CreatePet from './CreatePet'


export default function ProfileScreen(props) {
  // user data and user pet is called here

  const [userPets, setUserPets] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUsersPets(props.user)
      .then((user) => {
        console.log('this is profile', user);
        let userInfo = user.data.user;
        let userPet = user.data.user.pets_owned;
        setUserPets(userPet);
        setUserData(userInfo);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Hello, {userData.first_name}</h1>

      <h1>My pets</h1>
      <h1>add a pet</h1>
      <CreatePet user={props.user} />

    </div>
  );
};


