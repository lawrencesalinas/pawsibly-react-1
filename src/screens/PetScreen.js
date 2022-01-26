import React, { useState, useEffect } from 'react';
import { getUsersPets } from '../api/pets';
import ProfilePets from '../components/Profile/ProfilePets';

function PetScreen(props) {
    const [userPets, setUserPets] = useState([]);
    const [userData, setUserData] = useState([]);
    const [trigger, setTrigger] = useState(false)
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
    }, [trigger]);
  
  return (
  <div>
    <ProfilePets myPets={userPets} user={props.user} setTrigger={setTrigger}/>

  </div>
  )
}

export default PetScreen;
