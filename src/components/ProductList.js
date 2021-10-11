import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import ProductCard from './ProductCard'
import { fetchProductsStartAsync } from '../redux/product/product.actions'
import { selectIsProductFetching, selectProductList, selectErrorMessage } from '../redux/product/product.selectors'
import preloader from '../images/preloader.gif'
import errorImg from '../images/undraw_bug_fixing_oc7a.png'

function ProductList({ data, errorMessage }) {
	return (
		errorMessage ?
		<>
		<div className="no_orders_text" >Uh oh, something broke.</div>
		<div>
			<img src={errorImg} className='no_orders_img' />
		</div> 
		</>
			: !!data ?
				<div className="products_wrapper clv_section">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-6">
								<div className="clv_heading">
									<h3>Our Shop</h3>
									<div className="clv_underline"><img src="/images/underline3.png" alt="poultry-farming-service-underline" /></div>
									<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
								</div>
							</div>
						</div>
						<div className="service_main_wrapper">
							<div className="row">
								{
									data.map((item) => (

										<div className="col-md-3 col-sm-6 col-xs-12" key={item.id} style={{ paddingBottom: '20px' }}>
											<ProductCard item={item} />
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
				:
				<div className="preloader_custom">
					<img src={preloader} alt='loading...' />
				</div>
	)
}


const mapStateToProps = createStructuredSelector({
	isFetching: selectIsProductFetching,
	data: selectProductList,
	errorMessage: selectErrorMessage
})

const mapDispatchToProps = dispatch => ({
	fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)