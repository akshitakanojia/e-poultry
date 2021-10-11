// import PRODUCT_DATA from '../../data'
// const INITIAL_STATE = {
// 	productList: PRODUCT_DATA
// }

// const productReducer = (state = INITIAL_STATE, action) => {
// 	switch(action.type){
// 		default:
// 			return state
// 	}
// }

// export default productReducer

import ProductActionTypes from './product.types'

const INITIAL_STATE = {
	productList: null,
	isFetching: false,
	errorMessage: undefined
}

const productReducer = (state=INITIAL_STATE,action) =>{
	switch(action.type){
		case ProductActionTypes.FETCH_PRODUCTS_START:
			return {
				...state,
				isFetching: true
			}

		case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				productList: action.payload
			}

		case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage:action.payload
			}
		default:
			return state
	}
}

export default productReducer