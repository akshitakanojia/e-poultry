import axios from 'axios'

import AuthenticationActionTypes from './authentication.types'
import { clearOrder } from '../order/order.actions'
import { clearCart } from '../cart/cart.actions'

export const toggleSignin = () => ({
    type : AuthenticationActionTypes.SIGNIN_TOGGLE,
})

//----------------Logging out-------------------

export const clearProfilentoken = () => ({
    type : AuthenticationActionTypes.CLEAR_PROFILENTOKEN
})

export const logout = () =>{
    return dispatch => {
        dispatch(clearProfilentoken())
        dispatch(clearOrder())
        dispatch(clearCart())
    }
}

//-------------------OTP REQUEST ACTIONS-------------------------//

export const requestOtpStart = () => ({
    type : AuthenticationActionTypes.REQUEST_OTP_START
})

export const requestOtpSuccess = (message) => ({
    type : AuthenticationActionTypes.REQUEST_OTP_SUCCESS,
    payload : message
})

export const requestOtpError = (error) => ({
    type : AuthenticationActionTypes.REQUEST_OTP_ERROR,
    payload : error
})

export const requestOtp = (contactNumber) =>{
    return dispatch => {
        let otpReqUrl = `${process.env.REACT_APP_BACKEND_URL}/account/api/otp/?contact_number=${contactNumber}`
        dispatch(requestOtpStart())
        axios.get(otpReqUrl)

        .then(response => {
            dispatch(requestOtpSuccess(response.data.details))
        })

        .catch(error => {
            dispatch(requestOtpError(error.message))
        })
    }
}


//-------------------SUBMIT OTP ACTIONS-------------------------//


export const otpSubmitStart = () => ({
    type : AuthenticationActionTypes.OTP_SUBMIT_START
})

export const otpSubmitSuccess = (data) => ({
    type : AuthenticationActionTypes.OTP_SUBMIT_SUCCESS,
    payload : data
})

export const otpSubmitError = (errorMsg) => ({
    type : AuthenticationActionTypes.OTP_SUBMIT_ERROR,
    payload : errorMsg
})


export const otpSubmit = (payload) => {
    return dispatch => {
        dispatch(otpSubmitStart())
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/account/api/otp/`,payload)
        .then(response => {
            dispatch(otpSubmitSuccess(response.data))
        })

        .catch(error => {
            dispatch(otpSubmitError(error))
        })
    }
}

//--------------------Submit/Modify Profile Actions-------------//

export const profileModifyStart = () => ({
    type : AuthenticationActionTypes.PROFILE_MODIFY_START
})

export const profileModifySuccess = (profile) => ({
    type : AuthenticationActionTypes.PROFILE_MODIFY_SUCCESS,
    payload : profile
})

export const profileModifyError = (error) => ({
    type : AuthenticationActionTypes.PROFILE_MODIFY_ERROR,
    payload : error
})

export const profileModify = (payload,id,token) => {
    return dispatch => {
        dispatch(profileModifyStart())
        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/account/api/users/${id}/`,payload,{
            headers : {
                Authorization : `Token ${token}`
            }
        })
        .then(response=>{
            dispatch(profileModifySuccess(response.data))
        })
        .catch(error=>{
            dispatch(profileModifyError(error))
        })
    }
}

export const profileModifyClear = () => ({
    type : AuthenticationActionTypes.PROFILE_MODIFY_CLEAR
})

//------------REQUEST PROFILE--------------//

export const requestProfileStart =  () => ({
    type : AuthenticationActionTypes.REQUEST_PROFILE_START
})

export const requestProfileSuccess =  (profile) => ({
    type : AuthenticationActionTypes.REQUEST_PROFILE_SUCCESS,
    payload : profile
})

export const requestProfileError =  (error) => ({
    type : AuthenticationActionTypes.REQUEST_PROFILE_ERROR,
    payload : error
})

export const requestProfile =  (token) => {
    return dispatch => {
        dispatch(requestProfileStart())
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/account/api/users/`,{
            headers : {
                Authorization : `Token ${token}`
            }
        })

        .then(response => {
            dispatch(requestProfileSuccess(response.data))
        })

        .catch(error => {
            dispatch(requestProfileError(error))
        })
    }
}