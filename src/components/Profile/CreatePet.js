import { useState, useEffect } from 'react'
import { Icon } from 'react-materialize'


export default function PetForm(props) {
  // console.log('I AM USER',props);
  const [name, setName] = useState('')
  const [isPending, setIsPending] = useState(false)

  const createPet = (e) => {
    e.preventDefault()
    setIsPending(true)
    const pet = { name }

    fetch('http://localhost:8000/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.user.token}`
      },
      body: JSON.stringify(pet)
    }).then(() => {
      console.log('new pet added');
      setIsPending(false)
      props.setTrigger(x => !x)
      // useNavigate(-1)
    }).catch(error => {
      console.log(error);
      setIsPending(false)
    })

  }

  return (
    <div>
      <form class="input-field col s6" onSubmit={createPet}>
        <label><Icon>pets</Icon></label>
        <input type='text' 
          required
          value={name} name='name' id='name'
          onChange={(e) => setName(e.target.value)}
        />
        {!isPending && <button class="btn-floating btn-large waves-effect waves-light red accent-2"><i class="material-icons">add</i></button>}
        {isPending && <button disabled>Creating Pet...</button>}
      </form>
      {/* <p>{name}</p> */}
    </div>
  )


}
