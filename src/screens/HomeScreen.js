import React, { useState } from "react";
import AllListings from "./AllListings";
import { Icon, Parallax } from "react-materialize";
import Footer from "../components/Footer";


const HomeScreen = (props) => {
	console.log('props in home for sitters', props)

	const [searchResults, setSearchResults] = useState([])
	

	const searchItems = (e) => {
		e.preventDefault()
		// console.log('zipcode', e.target.zipcode.value)
		let search = e.target.zipcode.value
		console.log('sitter props', props.allSitters)

		const filteredListings = props.allSitters.filter((u) => {

			return (
				u.city.toLowerCase().includes(search.toLowerCase()) ||
				u.zipcode.toString().includes(search.toString())
			  );
		})
		setSearchResults(filteredListings)
		console.log('sitters search results', filteredListings)

	}
	return (
<>
			<div className="section white">
				<div className="row container" class="center-align">
					<h2 className="header">
						find sitters near you by zip code
					</h2>
					<form onSubmit={searchItems}>
						<div className="input-field">
							<input id="zipcode" type="text" name="zipcode" required />
							<button type="submit" class="btn-floating btn-large waves-effect waves-light red accent-2"><i class="material-icons">send</i></button>
							<label>
								<Icon>search</Icon>
							</label>
						</div>
					</form>
					<AllListings allSitters={searchResults} />
				</div>
			</div>
			<div>
				<Parallax
					image={<img alt="" src="/cat.png" />}
					options={{
						responsiveThreshold: 0
					}}
				/>
				<div className="section white">
					<div className="row container" class="center-align">
						<h2 className="header">
							search for a nearby sitter
						</h2>
						<p className="grey-text text-darken-3 lighten-3">
							With Pawsibly, your pet stays in a sitter's home, whether you're traveling for a few days or just out for the day. Here's how it works.
						</p>
						<div class="row" style={{ marginTop: '50px' }}>
							<div class="col s4">
								{/* Promo Content 1 goes here */}
								<i class="large material-icons">search</i>
								<h3>1. find a sitter near you</h3>
							</div>
							<div class="col s4">
								{/* Promo Content 2 goes here */}
								<i class="large material-icons">schedule</i>
								<h3>2. schedule a booking</h3>
							</div>
							<div class="col s4">
								{/* Promo Content 3 goes here  */}
								<i class="large material-icons">comment</i>
								<h3>3. leave a review</h3>


							</div>

						</div>
					</div>
				</div>
				<Parallax
					image={<img alt="" src="/dog.png" />}
					options={{
						responsiveThreshold: 0
					}}
				/>
			</div>
			<Footer/>
		
		</>
	

	)
}

export default HomeScreen;
