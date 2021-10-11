import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'

import { selectIsProductFetching, selectProductList, selectErrorMessage } from '../redux/product/product.selectors'
import { fetchProductsStartAsync } from '../redux/product/product.actions'
import { addItem, removeItem } from '../redux/cart/cart.actions'
import { selectCartItems } from '../redux/cart/cart.selectors'
import preloader from '../images/preloader.gif'
import Breacdcrumb from '../components/Breadcrumb'
import AddRemoveButton from '../components/AddRemoveButton'
import errorImg from '../images/undraw_bug_fixing_oc7a.png'
import noProductImg from '../images/undraw_empty_xct9.png'


function ProductDetails({ match, items, removeItem, addItem, cartItems, fetchProductsStartAsync, isFetching, errorMessage }) {
	const item = items && items.find(product => (product.id == match.params.id));
	const { name, id, selling_price, base_price, is_available, description, image, max_order_qty } = item ? item : {};
	const { quantity } = cartItems.find(item => item.id === id) || 0;
	let discount = Math.round((base_price - selling_price) * 100 / base_price);

	useEffect(() => {
		!items && fetchProductsStartAsync();
	}, [])

	return (
		<React.Fragment>
			<Breacdcrumb page={name} match={match} />
			{
				errorMessage ?
				<>
				<div className="no_orders_text" >Uh oh, something broke.</div>
				<div>
					<img src={errorImg} className='no_orders_img' />
				</div> 
				</>
					: !!items ?
						item ?
							<div className="product_single_wrapper clv_section">
								<div className="container">
									<div className="row">
										<div className="col-lg-7 col-md-7">
											<div className="product_single_slider">
												<div className="row">
													<div className="col-lg-9 col-md-9 col-sm-9">
														<div className="fd_product_img">
															<div className="swiper-container gallery-top">
																<div className="swiper-wrapper">
																	<div className="swiper-slide">
																		<div className="fd_pro_img">
																			<img src={image} alt="chicken_image" />
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-5 col-md-5">
											<div className="product_single_details">
												<div className="product_price_box">
													<h3>{name}</h3>
												</div>
												<ul className="product_code">
													<li>
														<p>product code: {id}</p>
													</li>
													<li>
														<p>availability:
                                            {
																is_available ?
																	<span> In Stock</span>
																	: <span> Out of Stock</span>
															}
														</p>
													</li>
												</ul>
												<p>{description}</p>
												<div className="product_prices">
													<h2>₹ {selling_price} / Kg</h2>
													{
														base_price > selling_price &&
														<React.Fragment>
															<h3>₹ {base_price} / Kg</h3>
															<span className="product_discount">{discount}% off</span>
														</React.Fragment>
													}
												</div>
												<div className='prod_det_btn'>
													{
														is_available ?
															cartItems.find(item => item.id === id) ?
																<AddRemoveButton item={item} quantity={quantity} />
																:
																<div className="fd_pro_add_btn">
																	<a href="javascript:;" className="clv_btn" onClick={() => addItem(item)}>add to cart</a>
																</div>
															: <React.Fragment></React.Fragment>
													}
													<Link to='/' className="clv_btn">Back</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							: <>
							<div className="no_orders_text" >No Such Product Found</div>
							<div>
								<img src={noProductImg} className='no_orders_img' />
							</div> 
							</>
						: <div className="preloader_custom">
							<img src={preloader} alt='loading...' />
						</div>
			}
		</React.Fragment>
	)
}

const mapStateToProps = createStructuredSelector({
	items: selectProductList,
	cartItems: selectCartItems,
	isFetching: selectIsProductFetching,
	errorMessage: selectErrorMessage
})

const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItem(item)),
	addItem: item => dispatch(addItem(item)),
	fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)