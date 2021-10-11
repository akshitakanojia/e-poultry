import React, { useState, useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CheckoutItem from '../components/CheckoutItem'
import { selectCartItems } from '../redux/cart/cart.selectors'
import { selectPlaceOrder } from '../redux/order/order.selectors'
import { placeOrder, resetPlaceOrder } from '../redux/order/order.actions'
import success_img from '../images/success.png'
import { selectProfile, selectAuthenticationToken } from '../redux/authentication/authentication.selectors'
import Breacdcrumb from '../components/Breadcrumb'
import emptyCartImage from '../images/undraw_empty_cart_co35.png'
import { selectFetchAddress } from '../redux/address/address.selectors'
import AddressCard from '../components/ProfilePageContainer/AddressCard'
import AddAddressCard from '../components/ProfilePageContainer/AddAddressCard'
import AddressList from '../components/ProfilePageContainer/AddressList'
import { toast } from 'react-toastify'

function Checkout({ cartItems, placeOrderState, profile, token, placeOrder, match, resetPlaceOrder, addresses }) {
	const { name, contact_number } = profile ? profile : {}
	const [remark, setRemark] = useState("")
	const isProfileComplete = profile ? name.length > 0 && contact_number.length > 0 : false
	const [addressId, setAddressId] = useState(null)

	useEffect(() => {
		return () => {
			resetPlaceOrder()
		}
	}, [])

	const handleSelectedAddrId = (id) => {
		setAddressId(id)
	}

	const handleSubmit = () => {
		if (addressId===null){
			toast.warn('Please select address to place order', { position: toast.POSITION.BOTTOM_CENTER });
			return;
		}
		const payload = {
			name: name,
			address_id: addressId,
			item_set: cartItems.map(cartItem => ({
				product: cartItem.id,
				quantity: cartItem.quantity
			})),
			remark: remark
		}
		payload.address_id && payload.item_set.length > 0 && placeOrder(payload, token)
	}

	return (
		<React.Fragment>
			<Breacdcrumb page='checkout' match={match} />
			{
				cartItems.length ?
					<div className="clv_checkout_wrapper clv_section">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-8">
									<div className="checkout_inner">
										<div className="checkout_heading">
											<h3>check out</h3>
										</div>
										<div className="checkout_form">
											<div className="chk-out-fields"><h6><strong>Name : </strong>{name}</h6></div>
											<div className="chk-out-fields"><h6><strong>Contact Number : </strong>{contact_number}</h6></div>
											<div className="chk-out-fields"><h6><strong>Select Delivery Address : </strong></h6></div>
											<div className="row">
												<AddressList selectedId={handleSelectedAddrId}/>
											</div>
											<div className="chk-out-fields form_block">
												<input type="text" 
												className="form_field" 
												value={remark} 
												onChange={e => setRemark(e.target.value)} placeholder="Comments" maxLength="255"/>
											</div>
										</div>
										<div className="checkout_submit">
											{
												// isProfileComplete ? 
												placeOrderState.loading ? <div className="otp_loading">
													<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "#fff", display: "block" }} width="57px" height="57px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
														<path d="M10 50A40 40 0 0 0 90 50A40 44.4 0 0 1 10 50" fill="#9dc709" stroke="none">
															<animateTransform attributeName="transform" type="rotate" dur="0.6622516556291391s" repeatCount="indefinite" keyTimes="0;1" values="0 50 52.2;360 50 52.2"></animateTransform>
														</path>
													</svg>
												</div>
													: <button className="clv_btn" onClick={handleSubmit} >Place Order</button>
													// :
													// <React.Fragment>
													// 	<div>Complete your profile to place order</div>
													// 	<Link to='/profile' style={{ color: '#9dc709' }}>Go to profile</Link>
													// </React.Fragment>
											}
											<Link to='/'><span><i className="fa fa-angle-left" aria-hidden="true"></i></span> back to home</Link>
										</div>
									</div>
								</div>
								<CheckoutItem />
							</div>
						</div>
					</div>
					: placeOrderState.successResponse ?
						<div className='order_success'>
							<div className='success_msg'><h5>Your order has been successfully placed with order id <strong>{placeOrderState.successResponse.id}</strong> on {new Date(placeOrderState.successResponse.timestamp).toLocaleDateString()}.</h5></div>
							<img src={success_img} alt='order_placed' />
							<div className='back_btn'>
								<Link to='/' className="clv_btn">Back to Home</Link>
								<Link to='/orders' className="clv_btn">Track Order</Link>
							</div>
						</div>
						: placeOrderState.errorResponse ? <h5 style={{ textAlign: 'center' }}>{placeOrderState.errorResponse}</h5>
							: <React.Fragment>
								<div className="no_orders_text" >Currently there are not items in your cart. Kindly add some items to proceed to checkout!</div>
								<div>
									<img src={emptyCartImage} className='no_orders_img' />
								</div>
								<div className="chk_out_back_btn">
									<Link to='/' className="clv_btn" style={{ justifyContent: 'center' }}> Back to Home </Link>
								</div>
							</React.Fragment>
			}
		</React.Fragment>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	placeOrderState: selectPlaceOrder,
	profile: selectProfile,
	token: selectAuthenticationToken,
	addresses: selectFetchAddress
})

const mapDispatchToProps = dispatch => ({
	placeOrder: (payload, token) => dispatch(placeOrder(payload, token)),
	resetPlaceOrder: () => dispatch(resetPlaceOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)