import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {Link} from 'react-router-dom'

import {selectCartItems,selectCartTotal,selectCartItemCount, selectCartUnitCount} from '../redux/cart/cart.selectors' 
import { selectGlobal } from '../redux/global/global.selectors'
import CartSummaryItem from '../components/CartSummaryItem'
import Breacdcrumb from '../components/Breadcrumb'

function CartSummary({cartItems,total,itemCount,global,cartUnitCount,match}){
	return(
    <React.Fragment>
    <Breacdcrumb page='cart-summary' match={match}/>
	  <div className="cart_single_wrapper clv_section">
	    <div className="container">
	      <div className="cart_table_section table-responsive">
	        <div className="table_heading">
	            <h3>shopping cart</h3>
              {
	            itemCount===1?<h4>{itemCount} item in your cart</h4>
              :<h4>{itemCount} items in your cart</h4>
              }             
	        </div>
	        {
	          cartItems.length?
	          <React.Fragment>
              <table className=" cart_table table-responsive woocommerce-cart-form__contents">
                <tbody>
                  <tr>
                    <th>items</th>
                    <th>quantity(in Kg)</th>
                    <th>price</th>
                    <th>total</th>
                    <th>remove</th>
                  </tr>
                  {
                    cartItems.map(cartItem => 
                    	<CartSummaryItem key={cartItem.id} cartItem={cartItem}/>
                    )
                  }
                  <tr>
                    <td>
                      <div className="pro_price">
                        <h5>sub total</h5>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="pro_price">
                        <h5>₹ {total}</h5>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              {
                cartUnitCount>=global.min_cart_value?
              <div className="checkout_btn_block">
                <Link to='/cart-summary/checkout' className="clv_btn checkout-button">proceed to checkout</Link>
              </div>
              :<div>Cart weight must be more than or equal to {global.min_cart_value} Kg</div>
              }
            </React.Fragment>
            :
            <React.Fragment>
              <div style={{'textAlign':'center'}}><h4>Your cart is empty!</h4></div>
              <div style={{'textAlign':'center','padding':'40px'}}><h5>Add items to cart</h5></div>
              <div className="chk_out_back_btn">
                <Link to='/' className="clv_btn checkout-button"> Home </Link>
              </div>
	          </React.Fragment>
	        }
	      </div>
	    </div>
	  </div>
    </React.Fragment>
	)
}

const mapStateToProps = createStructuredSelector ({
	cartItems : selectCartItems,
	total : selectCartTotal,
  itemCount: selectCartItemCount,
  global : selectGlobal,
  cartUnitCount: selectCartUnitCount
})

export default connect(mapStateToProps)(CartSummary)