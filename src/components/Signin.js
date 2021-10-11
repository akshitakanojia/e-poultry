import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';

import { toggleSignin, requestOtp, otpSubmit } from '../redux/authentication/authentication.actions';
import { selectOtpLoading, selectOtpSuccess, selectOtpError, selectSubmitOtp } from '../redux/authentication/authentication.selectors';


function SignIn(props) {
	const { toggleSignin, requestOtp, otpLoading, otpSuccessMsg, otpError, otpSubmit, submitOtpState } = props;
	const [contactNumber, setContactNumber] = useState('');
	const [error, setError] = useState(null);
	const [otp, setOtp] = useState(null);

	const handleSubmit = () => {
		let payload = {
			contact_number: contactNumber,
			otp: otp
		}
		otpSubmit(payload)
	}

	const handleGenerateOtp = () => {
		if ((/^[6789]\d{9}$/.test(contactNumber))) {
			requestOtp(contactNumber);
			setError(null);
		}
		else { 
			setError('Enter valid mobile number') 
		}
	}

	return (
		<div className="signin_wrapper open_signin">
			<div className="signup_inner">
				<div className="signup_details">
					<div className="site_logo">
						<a href="index.html"> <img src="/images/logo.png" alt="poultry-farming-signin-logo" /></a>
					</div>
					<h3>welcome to poultry shop!</h3>
					<p>Fresh chicken at your doorsteps.</p>
				</div>
				<div className="signup_form_section">
					<h4>log in</h4>
					<img src="/images/clv_underline.png" alt="poultry-farming-signup-underline" />
					{
						submitOtpState.loading ?
							<div className="otp_loading">
								<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "#fff", display: "block" }} width="57px" height="57px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
									<path d="M10 50A40 40 0 0 0 90 50A40 44.4 0 0 1 10 50" fill="#9dc709" stroke="none">
										<animateTransform attributeName="transform" type="rotate" dur="0.6622516556291391s" repeatCount="indefinite" keyTimes="0;1" values="0 50 52.2;360 50 52.2"></animateTransform>
									</path>
								</svg>
							</div>
							: submitOtpState.error ?
								// <div>Failed to signin</div>
								<div>Either no OTP generated or previous OTP expired. Sorry for the inconvenience caused !</div>
								: submitOtpState.profile ?
									<React.Fragment>
										<div>Logged In Successfully 👍</div>
										{
											(submitOtpState.profile.name?.length === 0 || submitOtpState.profile.contact_number?.length === 0 || submitOtpState.profile.address?.length === 0) && <Redirect to='/profile' />
										}
									</React.Fragment>
									:
									<React.Fragment>
										<div className="form_block">
											<input type="text" className="form_field" placeholder="Mobile Number" value={contactNumber} onChange={e => setContactNumber(e.target.value)} disabled={otpLoading} autoFocus />
										</div>
										{
											error && <div>{error}</div>
										}
										{
											otpError && <div style={{ color: "red" }}>Unable to send OTP at the moment. Please check the number or try again after sometime</div>
										}
										{
											otpLoading ?
												<div className="otp_loading">
													<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "#fff", display: "block" }} width="57px" height="57px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
														<path d="M10 50A40 40 0 0 0 90 50A40 44.4 0 0 1 10 50" fill="#9dc709" stroke="none">
															<animateTransform attributeName="transform" type="rotate" dur="0.6622516556291391s" repeatCount="indefinite" keyTimes="0;1" values="0 50 52.2;360 50 52.2"></animateTransform>
														</path>
													</svg>
												</div>
												: !otpSuccessMsg && <div className="clv_btn" onClick={handleGenerateOtp}>Generate OTP</div>

										}
										{
											!!otpSuccessMsg &&
											<div className="form_block">
												<input type="text" className="form_field" placeholder="Enter OTP" value={otp || ""} onChange={e => setOtp(e.target.value)} maxLength="6" />
												<div className="clv_btn" style={{ margin: "20px" }} onClick={handleSubmit}>Submit</div>
											</div>
										}
									</React.Fragment>
					}
					<span className="success_close" onClick={toggleSignin}>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 212.982 212.982" style={{ enableBackground: 'new 0 0 212.982 212.982' }} xmlSpace="preserve" width="11px" height="11px">
							<g>
								<path fill="#9dc709" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
                                c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
                                l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
                                c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
							</g>
						</svg>
					</span>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	otpSuccessMsg: selectOtpSuccess,
	otpLoading: selectOtpLoading,
	otpError: selectOtpError,
	submitOtpState: selectSubmitOtp
})

const mapDispatchToProps = dispatch => ({
	toggleSignin: () => dispatch(toggleSignin()),
	requestOtp: contactNumber => dispatch(requestOtp(contactNumber)),
	otpSubmit: payload => dispatch(otpSubmit(payload))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))