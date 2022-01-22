import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PetDetail(props) {
//   console.log("user", props.user);

  const [pet, setPet] = useState([]);
  const [newPetName, setNewPetName] = useState("");
  const [petId, setPetId] = useState();
  const { id } = useParams();

  useEffect(() => {
    console.log("getting all users");
    getPets();
  }, []);

  const getPets = () => {
    axios({
      url: `http://localhost:8000/pets/${id}`,
      method: "GET",
      headers: {
        Authorization: `Token ${props.user.token}`,
      },
    })
      .then((foundPet) => {
        console.log("pet", foundPet);
        setPet(foundPet);
        setNewPetName(foundPet?.data?.pet?.name);
        setPetId(foundPet?.data?.pet?.id);
        console.log("all", foundPet);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editPetById = (id) => {
    let newData = {
      pet: {
        name: newPetName,
      },
    };
    fetch(`http://localhost:8000/pets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${props.user.token}`,
      },
      body: JSON.stringify(newData),
    })
    //   .then(() => {
    //     console.log("new pet added");

    //     props.setTrigger((x) => !x);
    //     // useNavigate(-1)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
      .then((foundPet) => {
        console.log("pet edited", foundPet);

        props.setTrigger((x) => !x);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //<pre>{JSON.stringify(pet, null,2)}</pre>
  return (
    <div>
      <h2>Pet Details</h2>
      <p>{pet && pet?.data?.pet?.pet_owner}</p>
      <input
        value={newPetName}
        onChange={(e) => setNewPetName(e.target.value)}
      />
      <button onClick={() => editPetById(petId)}>Update {petId}</button>
    </div>
  );
}
