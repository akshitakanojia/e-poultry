import React, { useState, useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { selectModifyProfile, selectRequestProfile } from '../redux/authentication/authentication.selectors'
import { profileModifyClear } from '../redux/authentication/authentication.actions'
import preloader from '../images/preloader.gif'
import Breacdcrumb from '../components/Breadcrumb'
import PersonalDetails from '../components/ProfilePageContainer/PersonalDetails'
import AddressBook from '../components/ProfilePageContainer/AddressBook'
import errorImg from '../images/undraw_bug_fixing_oc7a.png'

function Profile({ modifyProfileState, requestProfileState, profileModifyClear, match }) {

	const [option, setOption] = useState('personal-detail')

	const notifySucess = () => {
		toast('Profile modified successfully!', { position: toast.POSITION.BOTTOM_CENTER });
		profileModifyClear();
	}

	const notifyError = () => {
		toast('Error in saving profile!', { position: toast.POSITION.BOTTOM_CENTER });
		profileModifyClear();
	}

	return (
		<React.Fragment>
			<Breacdcrumb page='profile' match={match} />
			{
				requestProfileState.loading || modifyProfileState.loading ?
					<div className="preloader_custom">
						<img src={preloader} alt='loading...' />
					</div>
					: requestProfileState.error || modifyProfileState.error ? 
						<>
							<div className="no_orders_text" >Uh oh, something broke.</div>
							<div>
								<img src={errorImg} className='no_orders_img' />
							</div>
						</>
						:
						<React.Fragment>
							{
								modifyProfileState.success === true && notifySucess()
							}
							{
								modifyProfileState.success === false && notifyError()
							}
							<div className="clv_checkout_wrapper clv_section">
								<div className="container">
									<div className="row">
										<div className="col-lg-12 col-md-12">
											<div className="profile_sidebar_option">
												<ul style={{ display: 'flex' }}>
													<li className={`${option === 'personal-detail' && "sidebar-active-option"}`} onClick={() => setOption('personal-detail')}>
														<h5>Personal Details</h5>
													</li>
													<div> | </div>
													<li className={`${option === 'address' && "sidebar-active-option"}`} onClick={() => setOption('address')}>
														<h5>Address Book</h5>
													</li>
												</ul>
											</div>
										</div>
										{
											option === 'personal-detail' && <PersonalDetails />
										}
										{
											option === 'address' && <AddressBook />
										}
									</div>
								</div>
							</div>
						</React.Fragment>
			}
		</React.Fragment>
	)
}

const mapStateToProps = createStructuredSelector({
	modifyProfileState: selectModifyProfile,
	requestProfileState: selectRequestProfile
})

const mapDispatchToProps = dispatch => ({
	profileModifyClear: () => dispatch(profileModifyClear())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)