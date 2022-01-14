// import React, { Component, Fragment } from 'react'
import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './components/Profile/ProfileScreen'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import axios from 'axios'
import PetDetail from './components/Profile/PetDetail'
import ProfilePets from './components/Profile/ProfilePets'
import AllListings from './screens/AllListings'
import ListingDetail from './screens/ListingDetail'
import CreateBooking from './screens/CreateBooking'


const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const admin = {id: 1, email: 'wally@wally.com'}
  const [allSitters, setAllSitters] = useState([])


  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }
	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				
				[{ heading, message, variant, id }]
      )
		})
	}


	useEffect(() =>{
		console.log('getting all sitters')
		getSitters()
	}, [])

	const getSitters = () =>{
		axios({
			url: `http://localhost:8000/sitters`,
			method: 'GET',
		})
		.then(foundSitters=>{
			// console.log('finding users', foundUsenprs)
			setAllSitters(foundSitters.data.sitters)
			console.log('all sitters:', foundSitters.data.sitters)
		})
		.catch(err =>{
			console.log(err)
		})
	}
	

		return (
			<Fragment>
				
				<Header user={user} />
				
				<Routes>
					<Route path='/' element={<HomeScreen msgAlert={msgAlert} allSitters={allSitters} user={user} />} />
					<Route path='/sitterlistings' element={<AllListings allSitters={allSitters} user={user} />} />
					<Route path='/sitterlisting/:id' element={<ListingDetail allSitters={allSitters}  user={user}/>} />
					<Route path='/profile' element={<ProfileScreen  user={user}    />} />
					<Route path='/createbooking' element={<CreateBooking allSitters={allSitters}  user={user}/>} />
					<Route path='/sign-up' element={<SignUp msgAlert={msgAlert} setUser={setUser} />}/>
					<Route path='/sign-in'element={<SignIn msgAlert={msgAlert} setUser={setUser} />}/>
					<Route path='/pets'element={<ProfileScreen msgAlert={msgAlert} setUser={setUser} user={admin} />}  />
					<Route path='/pets/:id'element={<PetDetail user={admin} msgAlert={msgAlert}  />} />
          <Route
            path='/sign-out'
            element={
              <RequireAuth user={user}>
                <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
              </RequireAuth>
            }
          />
          <Route
            path='/change-password'
            element={
              <RequireAuth user={user}>
                <ChangePassword msgAlert={msgAlert} user={user} />
              </RequireAuth>}
          />
				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}

export default App
