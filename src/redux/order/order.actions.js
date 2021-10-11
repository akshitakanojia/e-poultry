import orderActionTypes from './order.types'
import axios from 'axios'
import { clearCart } from '../cart/cart.actions'



//---------------------Placing order----------------------------
export const placeOrderStart = () => ({
	type: orderActionTypes.PLACE_ORDER_START
})

export const placeOrderSuccess = (response) => ({
	type : orderActionTypes.PLACE_ORDER_SUCCESS,
	payload : response
})

export const placeOrderFailure = (error) => ({
	type : orderActionTypes.PLACE_ORDER_FAILURE,
	payload : error
})

export const placeOrder = (payload,token) => {
	return dispatch => {
		dispatch(placeOrderStart());
		axios.post(`${process.env.REACT_APP_BACKEND_URL}/shop/api/orders/`, payload, {
			headers: {
				Authorization: `Token ${token}`
			}
		})
		.then((response) => {
			dispatch(placeOrderSuccess(response))
			dispatch(clearCart())
		})
		.catch(error => {
			dispatch(placeOrderFailure(error))
		})
	}
}
//-----------------------------Fetching orders--------------------------
export const fetchOrderStart = () => ({
	type : orderActionTypes.FETCH_ORDER_START
})

export const fetchOrderSuccess = (orders) => ({
	type : orderActionTypes.FETCH_ORDER_SUCCESS,
	payload : orders
})
export const fetchOrderError = (error) => ({
	type : orderActionTypes.FETCH_ORDER_ERROR,
	payload : error 
})

export const fetchOrder = (token) => {
	return dispatch => {
		dispatch(fetchOrderStart())
		axios.get(`${process.env.REACT_APP_BACKEND_URL}/shop/api/orders/`,{
            headers : {
                Authorization : `Token ${token}`
            }
        })
		.then(response=>
			dispatch(fetchOrderSuccess(response.data))
		)
		.catch(error=>
			dispatch(fetchOrderError(error))	
		)
	}
}

//------------------------Clearing Order--------------------

export const clearOrder = () => ({
	type : orderActionTypes.CLEAR_ORDER
})

//------------------RESETTING PLACE ORDER---------------

export const resetPlaceOrder = () => ({
	type : orderActionTypes.RESET_PLACE_ORDER
})