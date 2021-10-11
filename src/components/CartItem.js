import React from 'react'
import { connect } from 'react-redux'

import { addItem, removeItem } from '../redux/cart/cart.actions'
import AddRemoveButton from './AddRemoveButton'

function CartItem({ item, removeItem, addItem }) {
	const { image, selling_price, name, quantity, max_order_qty } = item
	let itemTotalCost = selling_price * quantity
	
	return (
		<React.Fragment>
			<div className="cart_block">
				<img src={image} />
			</div>
			<div className="cart_block">
				<h5>{name}</h5>
				<AddRemoveButton item={item} quantity={quantity} />
			</div>
			<div className="cart_block">
				<h4>₹ {itemTotalCost}</h4>
			</div>
		</React.Fragment>
	)
}

const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItem(item)),
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem)