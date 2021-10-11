import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { addItem, removeItem } from '../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../redux/cart/cart.selectors'
import AddRemoveButton from './AddRemoveButton'

function ProductCard({ item, addItem, cartItems }) {
	const { id, name, selling_price, base_price, image, is_available, max_order_qty } = item;
	const { quantity } = cartItems.find(item => item.id === id) || 0;
	let discount = Math.round((base_price - selling_price) * 100 / base_price);
	let discountFlag = base_price > selling_price;

	return (
		<div className="card">
			{
				is_available && discountFlag &&
				<div className="ribbon ribbon-top-left">
					<span   >{discount} % off</span></div>
			}
			<img className="card-img-top" src={image} alt="Card image" />
			<div className="card-body">
				<Link to={`/${id}`}><h4 className="card-title" style={{ textAlign: "center", color: "black", cursor: "pointer" }} >{name}</h4></Link>

				<p className="card-text" style={{ textAlign: "center", color: "black" }}>
					{
						is_available && discountFlag &&

						<span style={{ 'color': 'grey', 'textDecoration': 'line-through' }}>₹ {base_price}/ Kg </span>
					}
         &nbsp;&nbsp; ₹ {selling_price} / Kg &nbsp;&nbsp;&nbsp;
				</p>
				{
					is_available ?
						!!cartItems ?
							cartItems.find(cartItem => cartItem.id == id) ?
								<AddRemoveButton item={item} quantity={quantity} />
								: <>
									<div style={{ textAlign: "center" }}>
										<a href="javascript:;" className="btn  clv_btn checkout-button" onClick={() => addItem(item)}>Add to cart</a>
									</div>
								</>
							: <>
								<div style={{ textAlign: "center" }}>
									<a href="javascript:;" className="btn clv_btn checkout-button" onClick={() => addItem(item)}>Add to cart</a>
								</div>
							</>
						: <>
							<div style={{ textAlign: "center" }}>
								<a href="javascript:;" className="btn disabled clv_btn checkout-button"  >Not Available</a>
							</div>
						</>
				}
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})
const mapDispatchToProps = (dispatch) => ({
	addItem: item => dispatch(addItem(item))
})

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(ProductCard))