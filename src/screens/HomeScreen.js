import React, { useState } from "react"
import AllListings from './AllListings'
import { Parallax } from "react-materialize"


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
			<div className="section white">
				<div className="row container">
					<h2 className="header">
						Search for Sitters
					</h2>
					<form onSubmit={searchItems}>
						<label>location</label>
						<input type="number" name="zipcode" id="zipcode" />

						<input type="submit" />
					</form>
				</div>
			</div>
			<div>
				<Parallax
					image={<img alt="" src="/cat.jpg" />}
					options={{
						responsiveThreshold: 0
					}}
				/>
				<div className="section white">
					<div className="row container">
						<h2 className="header">
							Search for a sitter nearby sitter
						</h2>
						<p className="grey-text text-darken-3 lighten-3">
							With Pawsibly, your pet stays in a sitter's home, whether you're traveling for a few days or just out for the day. Here's how it works.
						</p>
					</div>
				</div>
				<Parallax
					image={<img alt="" src="/dog.jpg" />}
					options={{
						responsiveThreshold: 0
					}}
				/>
			</div>
			<footer class="page-footer">
				<div class="container">
					<div class="row">
						<div class="col l6 s12">
							<h5 class="white-text">About</h5>
							<p class="grey-text text-lighten-4">We are three software engineering students.</p>
						</div>
						<div class="col l4 offset-l2 s12">
							<h5 class="white-text">Contributors</h5>
							<ul>
								<li><a class="grey-text text-lighten-3" href="#!">Galyver Asi</a></li>
								<li><a class="grey-text text-lighten-3" href="#!">Kelly Larrea</a></li>
								<li><a class="grey-text text-lighten-3" href="#!">Lawrence Salinas</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="container">
						© 2022 Pawsibly
						<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
					</div>
				</div>
			</footer>
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
