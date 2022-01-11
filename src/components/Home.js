import React, {useState, useEffect} from "react"



const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const [searchResults, setSearchResults] = useState([])

	const searchItems = (e)=> {
		e.preventDefault()
		console.log('search', e.target.location.value)

	}

	return (
		<>
			<h2>Search for Sitters</h2>
			<form onSubmit={searchItems}>
				<label>location</label>
				<input type="number" name="location" id="location" />

				<input type="submit"/>
            </form>
		</>
	)
}

export default Home
