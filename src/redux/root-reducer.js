import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart.reducer'
import productReducer from './product/product.reducer'
import globalReducer from './global/global.reducer'
import orderReducer from './order/order.reducer'
import authenticationReducer from './authentication/authentication.reducer'
import addressReducer from './address/address.reducer'

const persistConfig = {
	key:'root',
	storage,
	whitelist:['cart']
}

const authTokenConfig = {
	key:'authentication',
	storage,
	whitelist:['token']
}

const rootReducer = combineReducers({
	cart : cartReducer,
	product : productReducer,
	globalVar : globalReducer,
	orderResult : orderReducer,
	authentication : persistReducer(authTokenConfig,authenticationReducer),
	address : addressReducer
})

export default persistReducer(persistConfig,rootReducer)