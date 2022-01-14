
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import { useState, useEffect }  from 'react'
import { createPets } from '../../api/pets'



export default function PetForm(props){
  // console.log('I AM USER',props);
  const [name, setName] = useState('')
  const [isPending, setIsPending] = useState(true) 

  const createPet = (e) => {
    e.preventDefault()
    setIsPending(true)
    const pet = { name }
   
    fetch('http://localhost:8000/pets', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.user.token}`},
      body: JSON.stringify(pet)
    }).then(() => {
      console.log('new pet added');
      setIsPending(false)
      props.setTrigger(x=>!x)
      // useNavigate(-1)
    }).catch(error =>{
      console.log(error);
      setIsPending(false)
    })
  
  }

return(
    <div>
  <form onSubmit ={createPet}>
      <label>Add your pet</label>
        <input type = 'text' 
        required
        value={name} name = 'name' id = 'name'
        onChange={(e) => setName(e.target.value)}
       />
       {isPending && <button>Create Pet</button> }
       {!isPending && <button disabled>Creating Pet...</button> }

</form>
       <p>{name}</p>
    </div>
)

  }

