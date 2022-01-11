import React, {useState} from "react"
import AllListings from './AllListings'

const HomeScreen = (props) => {
	console.log('props in home', props)

	const [searchResults, setSearchResults] = useState([])
	const searchItems = (e)=> {
		e.preventDefault()
		console.log('zipcode', e.target.zipcode.value)
		let search = e.target.zipcode.value
		console.log('user props', props.allUsers)

	const filteredListings = props.allUsers.filter((u) =>{
		
			return(u.zipcode.toString().includes(search.toString()))
	})
	 setSearchResults(filteredListings)
	console.log('user search results', filteredListings)

	}
	return (
		<>
			<h2>Search for Sitters</h2>
			<form onSubmit={searchItems}>
				<label>location</label>
				<input type="number" name="zipcode" id="zipcode" />
				<input type="submit"/>
            </form>
		<AllListings allUsers={searchResults} />
		{/* <List allUsers={searchResults} /> */}
		
		</>
	)
}

export default HomeScreen
