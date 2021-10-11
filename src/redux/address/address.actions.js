import axios from "axios";
import AddressActionTypes from "./address.types";


//-------------Fetching Addresses----------------//
export const fetchAddressStart = () => ({
  type: AddressActionTypes.FETCH_ADDRESS_START
})

export const fetchAddressSuccess = (payload) => ({
  type: AddressActionTypes.FETCH_ADDRESS_SUCCESS,
  payload: payload
})

export const fetchAddressError = (error) => ({
  type: AddressActionTypes.FETCH_ADDRESS_ERROR,
  payload: error
})

export const fetchAddress = (token) => {
  return dispatch => {
    dispatch(fetchAddressStart());
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/address/api/addresses/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        dispatch(fetchAddressSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchAddressError(error))
      })
  }
}

//---------------Adding Address-----------------//
export const submitAddressStart = () => ({
  type: AddressActionTypes.SUBMIT_ADDRESS_START
})

export const submitAddressSuccess = (payload) => ({
  type: AddressActionTypes.SUBMIT_ADDRESS_SUCCESS,
  payload: payload
})

export const submitAddressError = (error) => ({
  type: AddressActionTypes.SUBMIT_ADDRESS_ERROR,
  payload: error
})

export const submitAddress = (payload, token) => {
  return dispatch => {
    dispatch(submitAddressStart())
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/address/api/addresses/`, payload, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        console.log(response)
        dispatch(submitAddressSuccess(response.data))
      })
      .catch(error => {
        dispatch(submitAddressError(error))
      })
  }
}

//-------------Deleting address-------------//
export const deleteAddressStart = (id) => ({
  type: AddressActionTypes.DELETE_ADDRESS_START,
  payload : id
})

export const deleteAddressSuccess = (successmsg) => ({
  type: AddressActionTypes.DELETE_ADDRESS_SUCCESS,
  payload: successmsg
})

export const deleteAddressError = (error) => ({
  type: AddressActionTypes.DELETE_ADDRESS_ERROR,
  payload: error
})

export const deleteAddress = (id, token) => {
  return dispatch => {
    dispatch(deleteAddressStart(id));
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/address/api/addresses/${id}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(response=>{
      dispatch(deleteAddressSuccess(response));
    })
    .catch(error=>{
      dispatch(deleteAddressError(error))
    })
  }
}


//------------Modify Address----------------//
export const modifyAddressStart = () => ({
  type: AddressActionTypes.MODIFY_ADDRESS_START
})

export const modifyAddressSuccess = (address) => ({
  type: AddressActionTypes.MODIFY_ADDRESS_SUCCESS,
  payload: address
})

export const modifyAddressError = (error) => ({
  type: AddressActionTypes.MODIFY_ADDRESS_ERROR,
  payload: error
})

export const modifyAddress = (id, payload, token) => {
  return dispatch => {
    dispatch(modifyAddressStart());
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/address/api/addresses/${id}/`, payload, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        dispatch(modifyAddressSuccess(response.data))
      })
      .catch(error => {
        dispatch(modifyAddressError(error))
      })
  }
}

//--------Reseting address reducer state-----------//
export const resetAddressState = () => ({
  type : AddressActionTypes.RESET_ADDRESS_STATE
})