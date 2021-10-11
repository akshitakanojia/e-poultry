import { createSelector } from 'reselect' 


const selectOrder = state => state.orderResult

export const selectPlaceOrder = createSelector(
    [selectOrder],
    orderResult => ({
        loading : orderResult.placingOrder,
        successResponse : orderResult.successResponse,
        errorResponse : orderResult.errorResponse
    })
)

export const selectOrders = createSelector(
    [selectOrder],
    orderResult => ({
        loading : orderResult.fetchingOrder,
        orders : orderResult.orders,
        error : orderResult.fetchOrderError
    })
)
