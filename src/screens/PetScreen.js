import React, { useState, useEffect } from 'react';
import { getUsersPets } from '../api/pets';
import ProfilePets from '../components/Profile/ProfilePets';
import CreatePets from '../components/Profile/CreatePet'
import './PetScreen.css'
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap'

function PetScreen(props) {
    const [userPets, setUserPets] = useState([]);
    const [showAddPet, setShowAddPet] = useState(false)

    useEffect(() => {
      getUsersPets(props.user)
        .then((user) => {
          console.log('this is profile', user);

          let userPet = user.data.user.pets_owned;
          setUserPets(userPet);
   
        })
        .catch((err) => console.error(err));
    }, []);
  
  return (
  <div className='pet_screen'>
    <ProfilePets myPets={userPets} user={props.user} />
    {/* {showAddPet &&  <CreatePets user={props.user}/>} */}
    {/* <Button onClick={() => setShowAddPet(!showAddPet)} className = 'banner_searchButton' variant='outlined' >{showAddPet? "Hide" : "Search Dates"}</Button> */}
    <Footer/>
  </div>
  )
}

export default PetScreen;
