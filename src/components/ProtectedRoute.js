import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { toggleSignin } from '../redux/authentication/authentication.actions'
import { connect } from 'react-redux'
import { selectAuthenticationToken, selectProfile } from '../redux/authentication/authentication.selectors'
import { createStructuredSelector } from 'reselect'

function ProtectedRoute({ component: Component, token, profile, toggleSignin, ...rest }) {
	//let isProfileComplete = profile?!!(profile.name.length>0&&profile.address.length>0):false
	return (
		<Route {...rest} render={(props) => {
			!token && toggleSignin();
			return (
				token ? <Component {...props} {...rest} />
					: <Redirect to='/' />
			)
		}} />
	)
}

const mapStateToProps = createStructuredSelector({
	token: selectAuthenticationToken,
	profile: selectProfile
})

const mapDispatchToProps = dispatch => ({
	toggleSignin: () => dispatch(toggleSignin())
})
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)

