import React, {useState} from "react"
import AllListings from './AllListings'
import List from "./List"



const HomeScreen = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const [searchResults, setSearchResults] = useState([])

	const searchItems = (e)=> {
		e.preventDefault()
		console.log('zipcode', e.target.zipcode.value)
		let search = e.target.zipcode.value

	
	console.log('user props', props.allUsers)

	const filteredListings = props.allUsers.filter((u) =>{
		return(
			
			// console.log('this is u thing', u.zipcode)
			u.zipcode.toString().includes(search.toString())
		)
	})

	console.log('user search results', filteredListings)
	setSearchResults(filteredListings)
	}
	return (
		<>
			<h2>Search for Sitters</h2>
			<form onSubmit={searchItems}>
				<label>location</label>
				<input type="number" name="zipcode" id="zipcode" />

				<input type="submit"/>
            </form>
			<AllListings allUsers={searchResults}/>
		</>
	)
}

export default HomeScreen
