import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CartDropdown from './CartDropdown'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

function Cart({ toggleCartHidden, hidden, itemCount }) {
	return (
		<div className="cart_nav">
			<ul>
				<li>
					<a className="cart_toggle" href="javascript:;" onClick={toggleCartHidden}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							width="18px" height="20px">
							<path fillRule="evenodd" fill="#9dc709"
								d="M16.712,5.566 C16.682,5.244 16.404,4.997 16.071,4.997 L12.857,4.997 L12.857,3.747 C12.857,1.678 11.127,-0.004 9.000,-0.004 C6.873,-0.004 5.143,1.678 5.143,3.747 L5.143,4.997 L1.928,4.997 C1.595,4.997 1.318,5.244 1.288,5.566 L0.002,19.315 C-0.014,19.490 0.046,19.664 0.168,19.793 C0.290,19.923 0.462,19.997 0.643,19.997 L17.357,19.997 C17.538,19.997 17.710,19.923 17.832,19.793 C17.952,19.664 18.014,19.490 17.997,19.315 L16.712,5.566 ZM6.428,3.747 C6.428,2.367 7.582,1.247 9.000,1.247 C10.417,1.247 11.571,2.367 11.571,3.747 L11.571,4.997 L6.428,4.997 L6.428,3.747 ZM1.347,18.745 L2.515,6.247 L5.143,6.247 L5.143,7.670 C4.759,7.887 4.500,8.286 4.500,8.746 C4.500,9.436 5.076,9.996 5.786,9.996 C6.495,9.996 7.071,9.436 7.071,8.746 C7.071,8.286 6.812,7.887 6.428,7.670 L6.428,6.247 L11.571,6.247 L11.571,7.670 C11.188,7.887 10.928,8.284 10.928,8.746 C10.928,9.436 11.505,9.996 12.214,9.996 C12.924,9.996 13.500,9.436 13.500,8.746 C13.500,8.286 13.240,7.887 12.857,7.670 L12.857,6.247 L15.484,6.247 L16.653,18.745 L1.347,18.745 Z" />
						</svg>
						<span>{itemCount}</span>
					</a>
					{
						hidden ? null : <CartDropdown />
					}
				</li>
				<li className="menu_toggle">
					<span>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 53 53" style={{ enableBackground: 'new 0 0 53 53' }} xmlSpace="preserve" width="20px" height="20px">
							<g>
								<g>
									<path d="M2,13.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,13.5,2,13.5z" />
									<path d="M2,28.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,28.5,2,28.5z" />
									<path d="M2,43.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,43.5,2,43.5z" />
								</g>
							</g>
						</svg>
					</span>
				</li>
			</ul>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden,
	itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)