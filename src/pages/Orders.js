import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectAuthenticationToken } from '../redux/authentication/authentication.selectors'
import Breacdcrumb from '../components/Breadcrumb'
import { fetchOrder } from '../redux/order/order.actions'
import { selectOrders } from '../redux/order/order.selectors'
import preloader from '../images/preloader.gif'
import emptyImg from '../images/undraw_empty_xct9.png'
import errorImg from '../images/undraw_text_field_htlv.png'
import OrderList from '../components/OrderList'

function Orders({ token, match, fetchOrder, orderState }) {
	const { orders, loading, error } = orderState;

	useEffect(() => {
		!loading && fetchOrder(token);
	}, [])

	return (
		loading ?
			<div className="preloader_custom">
				<img src={preloader} alt='loading...' />
			</div>
			: <React.Fragment>
				<Breacdcrumb page='orders' match={match} />
				{
					error ?
						<React.Fragment>
							<div className="no_orders_text" >Unable to fetch orders at the moment. Please try again in a while.</div>
							<div>
								<img src={errorImg} className='no_orders_img' />
							</div>
						</React.Fragment>
						: orders && orders.length > 0 ? <OrderList orders={orders} />
							: <React.Fragment>
								<div className="no_orders_text" >No order placed yet</div>
								<div>
									<img src={emptyImg} className='no_orders_img' />
								</div>
							</React.Fragment>
				}
			</React.Fragment>
	)
}

const mapStateToProps = createStructuredSelector({
	token: selectAuthenticationToken,
	orderState: selectOrders
})

const mapDispatchToProps = dispatch => ({
	fetchOrder: token => dispatch(fetchOrder(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)