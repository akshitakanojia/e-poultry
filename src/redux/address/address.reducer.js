import AddressActionTypes from "./address.types"
import { removeAdress, updateModifiedAddress } from "./address.utils"

const INITIAL_STATE = {
  fetchingAddress: false,
  addresses: [],
  fetchingAddressError: null,
  submittingAddress: false,
  submitAddressError: null,
  submitAddressSuccess:null,
  deletingAddress : false,
  deleteAddrId : null,
  deleteAddrSuccess : null,
  deleteAddressError : null,
  modifyingAddress : false,
  modifyAddressSuccess : null,
  modifyAddressError : null
}

const addressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AddressActionTypes.FETCH_ADDRESS_START:
      return {
        ...state,
        fetchingAddress: true
      }
    case AddressActionTypes.FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        fetchingAddress: false,
        addresses: action.payload
      }
    case AddressActionTypes.FETCH_ADDRESS_ERROR:
      return {
        ...state,
        fetchingAddress: false,
        fetchingAddressError: action.payload
      }
    case AddressActionTypes.SUBMIT_ADDRESS_START:
      return {
        ...state,
        submittingAddress: true
      }
    case AddressActionTypes.SUBMIT_ADDRESS_SUCCESS:
      return {
        ...state,
        submittingAddress: false,
        addresses : [...state.addresses,action.payload],
        submitAddressSuccess : true
      }
    case AddressActionTypes.SUBMIT_ADDRESS_ERROR:
      return {
        ...state,
        submittingAddress: false,
        submitAddressError: action.payload
      }
    case AddressActionTypes.DELETE_ADDRESS_START:
      return{
        ...state,
        deletingAddress : true,
        deleteAddrId : action.payload
      }
    case AddressActionTypes.DELETE_ADDRESS_SUCCESS:
      return{
        ...state,
        deletingAddress : false,
        deleteAddrSuccess : true,
        addresses : removeAdress(state.addresses,state.deleteAddrId),
        deleteAddrId : null
      }
    case AddressActionTypes.DELETE_ADDRESS_ERROR:
      return{
        ...state,
        deletingAddress : false,
        deleteAddressError : action.payload,
        deleteAddrId : null
      }
    case AddressActionTypes.MODIFY_ADDRESS_START:
      return{
        ...state,
        modifyingAddress : true,

      }
    case AddressActionTypes.MODIFY_ADDRESS_SUCCESS:
      return{
        ...state,
        modifyingAddress : false,
        addresses : updateModifiedAddress(state.addresses,action.payload),
        modifyAddressSuccess : true
      }
    case AddressActionTypes.MODIFY_ADDRESS_ERROR:
      return{
        ...state,
        modifyingAddress : false,
        modifyAddressError : action.payload
      }
    case AddressActionTypes.RESET_ADDRESS_STATE:
      return{
        ...state,
        fetchingAddress: false,
        fetchingAddressError: null,
        submittingAddress: false,
        submitAddressError: null,
        submitAddressSuccess:null,
        deletingAddress : false,
        deleteAddrId : null,
        deleteAddrSuccess : null,
        deleteAddressError : null,
        modifyingAddress : false,
        modifyAddressSuccess : null,
        modifyAddressError : null
      }
    default:
      return state
  }
}

export default addressReducer