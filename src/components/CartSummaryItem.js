import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, addItem, removeItem } from '../redux/cart/cart.actions'
import AddRemoveButton from './AddRemoveButton'

function CartSummaryItem({ cartItem, clearItem, removeItem, addItem }) {
	const { name, image, selling_price, quantity, max_order_qty } = cartItem;
	let itemTotal = selling_price * quantity;

	return (
		<tr>
			<td>
				<div className="item_image_thumbnail">
					<img src={image} alt="image" />
					<h6>{name}</h6>
				</div>
			</td>
			<td>
				<AddRemoveButton item={cartItem} quantity={quantity} />
			</td>
			<td>
				<div className="pro_price">
					<h5>₹ {selling_price}</h5>
				</div>
			</td>
			<td>
				<div className="pro_price">
					<h5>₹ {itemTotal}</h5>
				</div>
			</td>
			<td>
				<div className="pro_remove">
					<span onClick={() => clearItem(cartItem)}>

						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 47.971 47.971" style={{ 'enableBackground': 'new 0 0 47.971 47.971' }} xmlSpace="preserve" width="12px" height="12px">
							<g>
								<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
							</g>
						</svg>
					</span>
				</div>
			</td>
		</tr>
	)
}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CartSummaryItem)