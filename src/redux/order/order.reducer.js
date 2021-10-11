import orderActionTypes from "./order.types";

const INITIAL_STATE = {
    placingOrder : false,
    successResponse:'',
    errorResponse:'',
    fetchingOrder:false,
    orders:null,
    fetchOrderError:'',
}

const orderReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case orderActionTypes.PLACE_ORDER_START:
            return {
                ...state,
                placingOrder : true
            }
        case orderActionTypes.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                placingOrder : false,
                successResponse : {
                    id : action.payload.data.id,
                    timestamp : action.payload.data.created
                }
            }
        case orderActionTypes.PLACE_ORDER_FAILURE:
             return {
                ...state,
                placingOrder : false,
                errorResponse : action.payload
            }
        case orderActionTypes.FETCH_ORDER_START:
            return {
                ...state,
                fetchingOrder : true
            }
        case orderActionTypes.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                fetchingOrder : false,
                orders : action.payload
            }
        case orderActionTypes.FETCH_ORDER_ERROR:
            return {
                ...state,
                fetchingOrder : false,
                fetchOrderError : action.payload
            }
        case orderActionTypes.CLEAR_ORDER:
            return{
                ...state,
                successResponse:'',
                errorResponse:'',
                fetchingOrder:false,
                orders:null,
                fetchOrderError:'',
            }
        case orderActionTypes.RESET_PLACE_ORDER:
            return {
                ...state,
                placingOrder : false,
                successResponse:'',
                errorResponse:''
            }
        default :
            return state
    }
}

export default orderReducer