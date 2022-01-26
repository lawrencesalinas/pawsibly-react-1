import { useEffect, useState } from "react";
import { getUsersPets } from "../../api/pets";
import ProfilePets from "./ProfilePets";
import CreatePet from './CreatePet'
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, Button } from 'react-bootstrap'
import './ProfileScreen.css'
import Footer from "../Footer";




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
    <div className = 'profile'>
    <Row>
<Col md ={3}>
<Card>
<Image src = '/cat.png' fluid/>
</Card>
</Col>

    <Col md={3}>
    <div className = 'profilescreen_info' >
      <h3 class="flow-text">Hello, {userData.last_name}!</h3>


      <Row className='profilescreen_buttons'>
      <Link className ='link' to={`/mybookings/${props.user.id}`}><Button  variant = 'warning'>My Bookings</Button></Link>
      <Link className ='link' to={`/myreviews/${props.user.id}`}><Button variant = 'warning'>My Reviews</Button></Link>
      <Link className ='link' to={`/contact/${props.user.id}`}><Button variant = 'warning'>Contact sitter</Button></Link>
      </Row>
    </div>
    </Col>
    <Col className="pt-5">
    <Link  to={`/pets/`}><Button  variant = 'warning'>My Pets</Button></Link>
    </Col>
    <Col >
    <i class="fas fa-paw paw fa-10x"></i>
    </Col>
    </Row>  
 <Footer/>
    </div>
  
  );
};


