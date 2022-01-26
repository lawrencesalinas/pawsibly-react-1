import React, { useState, useEffect } from 'react';
import { getUsersPets } from '../api/pets';
import ProfilePets from '../components/Profile/ProfilePets';
import CreatePets from '../components/Profile/CreatePet'

function PetScreen(props) {
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
    }, [userPets]);
  
  return (
  <div>
    <ProfilePets myPets={userPets} user={props.user} />
    <CreatePets user={props.user}/>

  </div>
  )
}

export default PetScreen;
