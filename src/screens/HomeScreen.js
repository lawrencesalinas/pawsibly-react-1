import React, {useState} from "react"
// import AllListings from './AllListings'



const HomeScreen = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const [searchResults, setSearchResults] = useState([])

	const searchItems = (e)=> {
		e.preventDefault()
		console.log('location', e.target.location.value)
		let search = e.target.location.value

	
	console.log('user props', props.allUsers)

	const filteredListings = props.allUsers.filter((u) =>{
		return(
			
			console.log('this is u thing', u)
			// (u.location.toString().includes(search.toString()))
			)
		
	})

}

	// console.log('user search results', filteredListings)
	// setSearchResults(filteredListings)

	return (
		<>
			<h2>Search for Sitters</h2>
			<form onSubmit={searchItems}>
				<label>location</label>
				<input type="number" name="location" id="location" />

				<input type="submit"/>
            </form>
			{/* <AllListings allUsers={searchResults}/> */}
		</>
	)
}

export default HomeScreen
