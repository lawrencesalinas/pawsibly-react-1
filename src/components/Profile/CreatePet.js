import { useState } from 'react'
import { Icon } from 'react-materialize'
import {Row,Col, Button } from 'react-bootstrap'
import './ProfilePets.css'


export default function PetForm(props) {
  // console.log('I AM USER',props);
  const [name, setName] = useState('')
  const [image, setImage]= useState();


  const createPet = (e) => {

   
   const uploadData = new FormData()
   uploadData.append('image', image)
   uploadData.append('name', name)
   uploadData.append('pet_owner', props.user.id)


    fetch('http://localhost:8000/pets', {
      method: 'POST',
      headers: {
     
        'Authorization': `Token ${props.user.token}`
      },
      body: uploadData
    }).then(res => {
   
      console.log('new pet added',res);
      props.setTrigger(x=> !x)
    })
      // useNavigate(-1)
    .catch(error => {
      console.log(error);
    
    })

  }

  return (
    <div>
       <label>
        Title
        <input type="text" value={name} onChange={(evt) => setName(evt.target.value)}/>
      </label>
      <br/>
      <label>
        Cover
        <input type="file" onChange={(evt) => setImage(evt.target.files[0])}/>
      </label>
      <br/>
      <button onClick={() => createPet()}>New Book</button>
    </div>
  );
}