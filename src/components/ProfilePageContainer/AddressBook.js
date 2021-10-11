import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchAddress } from '../../redux/address/address.actions';
import { selectFetchAddress } from '../../redux/address/address.selectors';
import { selectAuthenticationToken } from '../../redux/authentication/authentication.selectors';
import AddAddressCard from './AddAddressCard';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm'
import preloader from '../../images/preloader.gif'

function AddressBook({ token, fetchAddressState, fetchAddress }) {

  // useEffect(()=>{
  //   fetchAddress(token);
  // },[]);

  return (
    <>
      {
        fetchAddressState.loading ?
          <div className="preloader_custom">
            <img src={preloader} alt='loading...' />
          </div>
          : fetchAddressState.error ? 
            <div>Some error occured</div>
            : fetchAddressState.success.length > 0 ?
              <>
                <AddAddressCard />
                {fetchAddressState.success.map(address => <AddressCard key={address.id} address={address} />)}
              </>
              :
              <AddAddressCard />
      }
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  token: selectAuthenticationToken,
  fetchAddressState: selectFetchAddress
})

const mapDispatchToProps = dispatch => ({
  fetchAddress: (token) => dispatch(fetchAddress(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook)