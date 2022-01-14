// import { useState, useEffect }  from 'react'




// export default function SitterForm(props){
//   // console.log('I AM USER',props);
//   const [first_Name, setfirstName] = useState('')
//   const [last+Name, setLastName] = useState('')
//   const [zipCode, setZipCode] = useState('')
//   const [pricing, setPricing] = useState('')
//   const [isPending, setIsPending] = useState(false) 

//   const createPosting = (e) => {
//     e.preventDefault()
//     const pet = { firstName, lastName, zipCode,pricing }
   
//     fetch('http://localhost:8000/sitters', {
//       method: 'POST',
//       headers: { 
//         'Content-Type': 'application/json',
//         'Authorization': `Token ${props.user.token}`},
//       body: JSON.stringify(pet)
//     }).then(() => {
//       console.log('new pet added');
//       setIsPending(false)
//       props.setTrigger(x=>!x)
     
//     }).catch(error =>{
//       console.log(error);
//       setIsPending(false)
//     })
  
//   }

// return(
//     <div>
//   <form onSubmit ={createPosting}>
//       <label>Add your pet</label>
//         <input type = 'text' 
//         required
//         value={first_name} first_name = 'first_name' id = 'name'
//         onChange={(e) => setFirstName(e.target.value)}
//        />
//         <input type = 'text' 
//         required
//         value={name} last_name = 'last_name' id = 'last_ame'
//         onChange={(e) => setLastName(e.target.value)}
//        />
//         <input type = 'text' 
//         required
//         value={name} name = 'zipcode' id = 'zipcode'
//         onChange={(e) => setZipCode(e.target.value)}
//        />
//         <input type = 'text' 
//         required
//         value={pricng} name = 'pricing' id = 'name'
//         onChange={(e) => setPricing(e.target.value)}
//        />
       
//        />
//        {!isPending && <button>Create a Post</button> }
//        {isPending && <button disabled>Creating a Post...</button> }

// </form>
//        <p>{name}</p>
//     </div>
//   )


// }
