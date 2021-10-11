import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import CartItem from '../CartItem'
import { selectCartItems, selectCartTotal, selectCartItemCount } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'


function CartDropdown({ cartItems, dispatch, total, itemCount }) {
	return (
		<div className="clv_cart_box cart_box_open">
			{
				cartItems.length ?
					<React.Fragment>
						<div className="cart_section">
							{
								itemCount === 1 ? <p>You have <span>{itemCount}</span> item in your cart</p>
									: <p>You have <span>{itemCount}</span> items in your cart</p>
							}
							<ul>{
								cartItems.map((cartItem) => (
									<li key={cartItem.id}>
										<CartItem key={cartItem.id} item={cartItem} />
									</li>
								))
							}
								<li>
									<h3>total</h3>
									<h4>₹ {total}</h4>
								</li>
							</ul>
						</div>
					</React.Fragment>
					:
					<span><h5 style={{ 'textAlign': 'center', 'padding': '80px' }}>Your Cart is empty !</h5></span>
			}
			<Link to='/cart-summary' className="cart_action_btn" onClick={() => dispatch(toggleCartHidden())}>check out</Link>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
	itemCount: selectCartItemCount
})

export default connect(mapStateToProps)(CartDropdown)