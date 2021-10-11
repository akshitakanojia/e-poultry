import { createSelector } from 'reselect'

const selectProduct = state => state.product

export const selectIsProductFetching = createSelector(
	[selectProduct],
	product => product.isFetching
)

export const selectProductList = createSelector(
	[selectProduct],
	product => product.productList
)

export const selectErrorMessage = createSelector(
	[selectProduct],
	product => product.errorMessage
)