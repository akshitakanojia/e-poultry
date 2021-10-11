import { createSelector } from 'reselect'

const selectGlobalState = state => state.globalVar

export const selectGlobal = createSelector(
	[selectGlobalState],
	globalVar => ({
		min_cart_value : globalVar.min_cart_value,
		contact : globalVar.contact
	})
)