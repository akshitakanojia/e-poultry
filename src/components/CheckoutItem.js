import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal, selectCartItemCount } from '../redux/cart/cart.selectors'

function CheckOutItem({ cartItems, total, itemCount }) {
	return (
		<div className="col-lg-4 col-md-4">
			<div className="cart_summery_block">
				<h3>your cart summary</h3>
				<h5>you have {itemCount} items in your cart</h5>
				<ul>
					{
						cartItems.map(cartItem => {
							const { name, quantity, image, selling_price } = cartItem
							const itemTotal = selling_price * quantity
							return (
								<li>
									<div className="item_image_thumbnail"><img src={image} alt="image" /></div>
									<div className="product_quantity">
										<h6>{name}</h6>
										<p>x{quantity} Kg</p>
									</div>
									<div className="product_price">
										<h4>₹ {itemTotal}</h4>
									</div>
								</li>
							)
						})
					}
					<li>
						<div className="total_amount">
							<h4>total</h4>
						</div>
						<div className="product_price">
							<h4>₹ {total}</h4>
						</div>
					</li>
				</ul>
				<a href="javascript:;">have a discount code?</a>
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
	itemCount: selectCartItemCount
})

export default connect(mapStateToProps)(CheckOutItem)