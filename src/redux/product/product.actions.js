import ProductActionTypes from './product.types'
import axios from 'axios'

export const fetchProductsStart = () => ({
	type: ProductActionTypes.FETCH_PRODUCTS_START
})

export const fetchProductsSuccess = (productList) => ({
	type:ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
	payload: productList
})

export const fetchProductsFailure = (errorMessage) => ({
	type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
	payload: errorMessage
})

export const fetchProductsStartAsync = () => {
	return dispatch => {
		dispatch(fetchProductsStart())
		axios.get(`${process.env.REACT_APP_BACKEND_URL}/shop/api/products`)
    	.then(response => {
			const productList = response.data
			dispatch(fetchProductsSuccess(productList))
		})
    	.catch(error =>{
    		const errorMessage = error.message
    		dispatch(fetchProductsFailure(errorMessage))
 		})
	}
}