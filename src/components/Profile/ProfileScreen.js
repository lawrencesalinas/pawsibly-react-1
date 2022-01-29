import { useEffect, useState } from "react";
import { getUsersPets } from "../../api/pets";
import ProfilePets from "./ProfilePets";
import CreatePet from "./CreatePet";
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, Modal } from "react-bootstrap";
import "./ProfileScreen.css";
import Footer from "../Footer";
import apiUrl from "../../apiConfig";

export default function ProfileScreen(props) {
  console.log("user here", props);
  // user data and user pet is called here
  const [image, setImage] = useState();
  const [userPets, setUserPets] = useState([]);
  const [userData, setUserData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getUsersPets(props.user)
      .then((user) => {
        console.log("this is profile", user);
        let userInfo = user.data.user;
        let userPet = user.data.user.pets_owned;
        setUserPets(userPet);
        setUserData(userInfo);
      })
      .catch((err) => console.error(err));
  }, [trigger]);

  console.log(userData);
  const uploadPhoto = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", image);
    uploadData.append("id", userData.id);

    fetch(`${apiUrl}/profileImage`, {
      method: "POST",
      headers: {
        Authorization: `Token ${props.user.token}`,
      },
      body: uploadData,
    })
      .then((res) => {
        console.log("new pehoto added", res);
        setTrigger((x) => !x);
      })
      // useNavigate(-1)
      .catch((error) => {
        console.log(error);
      });
    setShow(false);
  };

  return (
    <div className="profile">
      <Row>
        <Col md={3}>
          <Card>
            <Image src={apiUrl + userData.image} fluid />
            <Button variant="success" onClick={handleShow}>
              upload photo
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>upload photo</Modal.Title>
              </Modal.Header>
              <label>
                <input
                  type="file"
                  onChange={(evt) => setImage(evt.target.files[0])}
                />
              </label>

              <Button variant='success 'onClick={() => uploadPhoto()}>upload</Button>
            </Modal>
          </Card>
        </Col>

        <Col md={3}>
          <div className="profilescreen_info">
            <h3 class="flow-text">Hello, {userData.last_name}!</h3>

            <Row className="profilescreen_buttons">
              <Link className="link" to={`/mybookings/${props.user.id}`}>
                <Button variant="warning">My Bookings</Button>
              </Link>
              <Link className="link" to={`/myreviews/${props.user.id}`}>
                <Button variant="warning">My Reviews</Button>
              </Link>
              <Link className="link" to={`/host`}>
                <Button variant="warning">Host a Pet</Button>
              </Link>
            </Row>
          </div>
        </Col>
        <Col className="pt-5">
          <Link to={`/pets/`}>
            <Button variant="warning">My Pets</Button>
          </Link>
        </Col>
        <Col>
          <i class="fas fa-paw paw fa-10x"></i>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
