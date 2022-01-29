import { Button } from 'react-bootstrap'
import { useState, useEffect }  from 'react'

export default function SitterForm(props){
  // console.log('I AM USER',props);
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')


  const createPosting = (e) => {
    const sitter = {first_name:firstName, last_name:lastName, zipcode:zipCode, price:price, city:city, description:description}
   
    fetch('http://localhost:8000/sitters', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.user.token}`},
      body: JSON.stringify(sitter)
    }).then(response => {
      props.setTrigger((x)=>!x)
     console.log('created post', response);
    }).catch(error =>{
      console.log(error);
    })
  
  }

return(
    <div>
      <label>First Name</label>
        <input className='input' type = 'text' 
        required
        value={firstName} first_name = 'first_name' id = 'name'
        onChange={(e) => setfirstName(e.target.value)}
       />
       <label>Last Name</label>
        <input className='input' type = 'text' 
        required
        value={lastName} last_name = 'last_name' id = 'last_name'
        onChange={(e) => setLastName(e.target.value)}
       />
       <label>Zipcode</label>
        <input className='input' type = 'text' 
        required
        value={zipCode} name = 'zipcode' id = 'zipcode'
        onChange={(e) => setZipCode(e.target.value)}
       />
       <label>Price</label>
        <input className='input' type = 'text' 
        required
        value={price} name = 'price' id = 'price'
        onChange={(e) => setPrice(e.target.value)}
       />
        <label>Description</label>
        <input className='input' type = 'text' 
        required
        value={description} name = 'description' id = 'description'
        onChange={(e) => setDescription(e.target.value)}
       />
          <label>City</label>
        <input className='input' type = 'text' 
        required
        value={city} name = 'city' id = 'city'
        onChange={(e) => setCity(e.target.value)}
       />
      
      <Button onClick={createPosting} variant= 'success'>Post</Button>
   
       <p>{lastName}</p>
       <p>{firstName}</p>
       <p>{description}</p>
   <p>{price}</p>
       {zipCode}
       
    </div>
  )


}
