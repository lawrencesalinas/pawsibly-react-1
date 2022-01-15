import { useState, useEffect }  from 'react'

export default function SitterForm(props){
  // console.log('I AM USER',props);
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [pricing, setPricing] = useState('')
  const [isPending, setIsPending] = useState(false) 
 

  const createPosting = (e) => {
    e.preventDefault()
    const pet = { firstName, lastName, zipCode,pricing }
   
    fetch('http://localhost:8000/sitters', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.user.token}`},
      body: JSON.stringify(pet)
    }).then(() => {
      console.log('new pet added');
      setIsPending(false)
      props.setTrigger(x=>!x)
     
    }).catch(error =>{
      console.log(error);
      setIsPending(false)
    })
  
  }

return(
    <div>
  <form onSubmit ={createPosting}>
      <label>Add your pet</label>
        <input type = 'text' 
        required
        value={firstName} first_name = 'first_name' id = 'name'
        onChange={(e) => setfirstName(e.target.value)}
       />
       <label>Add your pet</label>
        <input type = 'text' 
        required
        value={lastName} last_name = 'last_name' id = 'last_ame'
        onChange={(e) => setLastName(e.target.value)}
       />
       <label>Add your pet</label>
        <input type = 'text' 
        required
        value={zipCode} name = 'zipcode' id = 'zipcode'
        onChange={(e) => setZipCode(e.target.value)}
       />
       <label>pricing</label>
        <input type = 'text' 
        required
        value={pricing} name = 'pricing' id = 'name'
        onChange={(e) => setPricing(e.target.value)}
       />
       {!isPending && <button>Create a Post</button> }
       {isPending && <button disabled>Creating a Post...</button> }

</form>
       <p>{firstName}</p>
    </div>
  )


}
