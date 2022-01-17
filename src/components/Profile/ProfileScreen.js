import { useEffect, useState } from "react";
import { getUsersPets } from "../../api/pets";
import ProfilePets from "./ProfilePets";
import CreatePet from './CreatePet'
import { Link } from "react-router-dom";



export default function ProfileScreen(props) {
  console.log('user here', props);
  // user data and user pet is called here

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
    <div class="center" style={{'marginTop':'50px'}}>
      <h3 class="flow-text">Hello, {userData.last_name}!</h3>
      <ProfilePets myPets={userPets} user={props.user} setTrigger={setTrigger} />
      <CreatePet user={props.user} setTrigger={setTrigger} />

      <Link to={`/mybookings/${props.user.id}`}>My Bookings</Link>
      <Link to={`/myreviews/${props.user.id}`}>Reviews I Posted</Link>
    </div>
  );
};


