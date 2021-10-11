import React, { useState } from 'react'
import { createStructuredSelector } from 'reselect'
import { selectProductList } from '../redux/product/product.selectors'
import { connect } from 'react-redux'


function OrderCard({ order, products }) {
	const { id, delivery_address, item_set, status, created } = order
	const [show, setShow] = useState(false)
	var createdDate = new Date(created)
	var orderTotal = item_set.reduce((total, item) => total += (item.price * item.quantity), 0)
	return (
		<div className="order_card">
			<div className="checkout_inner">
				<div className="checkout_heading">
					<div className="order_card_d">
						<h5>Order id : {id}</h5>
						<h5>{status}</h5>
					</div>
					<div className="order_card_d">
						<h6>Ordered on : {createdDate.toLocaleDateString()}</h6>
						<h6>Order Total : ₹ {orderTotal}</h6>
					</div>
					<h6 style={{ padding: "15px 0px" }}>Delivery Address : {delivery_address}</h6>
				</div>
				<span className="order_list" onClick={() => setShow(!show)} >
					<a href="javascript:;" style={{ color: "#9dc709" }}>
						<strong>View Order Details &nbsp;&nbsp;</strong> {show ? <i className="fa fa-angle-up" aria-hidden="true"></i> : <i className="fa fa-angle-down" aria-hidden="true"></i>}
					</a>
				</span>
				{
					show &&
					<div className="order_card_list_table">
						<table className=" cart_table table-responsive woocommerce-cart-form__contents">
							<tbody>
								<tr>
									<th>items</th>
									<th>quantity</th>
									<th>price</th>
									<th>total</th>
								</tr>
								{item_set.map(item => {
									const { name, image, id } = products.find(product => product.id === item.product)
									const { quantity, price } = item
									const itemTotal = price * quantity
									return (
										<tr key={id}>
											<td>
												<div className="item_image_thumbnail">
													<img src={image} alt="chicken-img" />
													<h6>{name}</h6>
												</div>
											</td>
											<td>
												<div className="item_quantity">
													<input type="text" value={quantity} className="quantity" disabled />
												</div>
											</td>
											<td>
												<div className="pro_price">
													<h5>₹ {price}</h5>
												</div>
											</td>
											<td>
												<div className="pro_price">
													<h5>₹ {itemTotal}</h5>
												</div>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				}
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	products: selectProductList
})

export default connect(mapStateToProps)(OrderCard)