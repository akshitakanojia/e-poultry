import { createSelector } from 'reselect'

const selectAddress = state => state.address

export const selectAddAddress = createSelector(
  [selectAddress], address => ({
    loading: address.submittingAddress,
    error: address.submitAddressError,
    success: address.submitAddressSuccess
  })
)


export const selectFetchAddress = createSelector(
  [selectAddress], address => ({
    loading: address.fetchingAddress,
    error: address.fetchingAddressError,
    success: address.addresses    
  })
)

export const selectModifyAddress = createSelector(
  [selectAddress], address => ({
    loading : address.modifyingAddress,
    error : address.modifyAddressError,
    success : address.modifyAddressSuccess
  })
)

export const selectDeleteAddress = createSelector(
  [selectAddress], address =>({
    loading : address.deletingAddress,
    error : address.deleteAddressError,
    success : address.deleteAddrSuccess
  })
)