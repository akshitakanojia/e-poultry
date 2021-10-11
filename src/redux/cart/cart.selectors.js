import {createSelector} from 'reselect'

const selectCart = state => state.cart 

export const selectCartItems = createSelector (
	[selectCart],
	(cart) => cart.cartItems
)


export const selectCartUnitCount = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0)
)

export const selectCartItemCount = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.length
)

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
)

export const selectCartTotal = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity*cartItem.selling_price,0)
)