import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import { modifyAddress, resetAddressState, submitAddress } from '../../redux/address/address.actions';
import { selectAddAddress, selectModifyAddress } from '../../redux/address/address.selectors';
import { selectAuthenticationToken } from '../../redux/authentication/authentication.selectors';

function AddressForm({ setOpenForm, token, submitAddress, address, modifyAddress, submitAddressState, modifyAddressState, resetAddressState }) {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [landmark, setLandmark] = useState('')
  const [city, setCity] = useState('Indore');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('Madhya Pradesh')
  const [country, setCountry] = useState('India')

  const [addrError, setAddrError] = useState(false)
  const [pinError, setPinError] = useState(false)

  useEffect(() => {
    if (address) {
      setAddress1(address.address_1);
      setAddress2(address.address_2);
      setLandmark(address.landmark);
      setPincode(address.pin_code);
    }
  }, [])

  useEffect(() => {
    if (modifyAddressState.success) {
      toast('Address modified successfully!', { position: toast.POSITION.BOTTOM_CENTER });
      resetAddressState();
      setOpenForm(false);
    }
    if (submitAddressState.success) {
      toast('Address added successfully!', { position: toast.POSITION.BOTTOM_CENTER });
      resetAddressState();
      setOpenForm(false);
    }
  }, [modifyAddressState.success, submitAddressState.success])

  const valid = () => {
    if (address1.length === 0 || !(/^[1-9][0-9]{5}$/.test(pincode))) {
      if (address1.length === 0) {
        setAddrError(true)
      }
      else {
        setAddrError(false)
      }
      if (!(/^[1-9][0-9]{5}$/.test(pincode))) {
        setPinError(true)
      }
      else {
        setPinError(false)
      }
      return false
    }
    setAddrError(false)
    setPinError(false)
    return true
  }
  const saveAddressHandler = () => {
    if (valid()) {
      if (address) {
        let payload = {
          address_1: address1,
          address_2: address2,
          landmark: landmark,
          city: city,
          pin_code: pincode
        }
        modifyAddress(address.id, payload, token)
      }
      else {
        let payload = {
          address_1: address1,
          address_2: address2,
          landmark: landmark,
          city: city,
          pin_code: pincode
        }
        submitAddress(payload, token)
      }
    }
  }

  const close = () => {
    setOpenForm(false);
    resetAddressState();
  }

  return (
    <div className="signin_wrapper open_signin">
      <div className="signup_inner address_card">
        <div className="address_card_heading">
          <h4>Add New Address</h4>
        </div>
        <div className="profile_form">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="form_block">
                <h6>Address Line 1 <span style={{ color: "red" }}>*</span></h6>
                <input type="text"
                  value={address1}
                  className="form_field"
                  onChange={e => setAddress1(e.target.value)} maxLength="255" autoFocus />
                <span className={`${addrError ? 'error' : 'no-error'}`}>This field cannot be empty</span>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form_block">
                <h6>Address Line 2</h6>
                <input type="text"
                  value={address2}
                  className="form_field"
                  onChange={e => setAddress2(e.target.value)} maxLength="255" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form_block">
                <h6>landmark</h6>
                <input type="text"
                  value={landmark}
                  className="form_field"
                  onChange={e => setLandmark(e.target.value)} maxLength="255" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form_block">
                <h6>City </h6>
                <input type="text" value={city} className="form_field" disabled />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form_block">
                <h6>pincode <span style={{ color: "red" }}>*</span></h6>
                <input type="text"
                  value={pincode}
                  className="form_field"
                  onChange={e => setPincode(e.target.value)} maxLength="6" />
                <span className={`${pinError ? 'error' : 'no-error'}`}>Please provide a valid pincode</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form_block">
                <h6>state </h6>
                <input type="text" value={state} className="form_field" disabled />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form_block">
                <h6>country </h6>
                <input type="text" value={country} className="form_field" disabled />
              </div>
            </div>
            <p>Fields marked with <span style={{ color: "red" }}>*</span> are mandatory.</p>
            {
              (submitAddressState.loading || modifyAddressState.loading) ?
                <div className="otp_loading">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "#fff", display: "block" }} width="57px" height="57px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <path d="M10 50A40 40 0 0 0 90 50A40 44.4 0 0 1 10 50" fill="#9dc709" stroke="none">
                      <animateTransform attributeName="transform" type="rotate" dur="0.6622516556291391s" repeatCount="indefinite" keyTimes="0;1" values="0 50 52.2;360 50 52.2"></animateTransform>
                    </path>
                  </svg>
                </div>
                : submitAddressState.error ?
                  <div className="col-lg-12 col-md-12" style={{ color: "red", textAlign:"center" }}>Some error occured in saving address. Try saving again in a while.</div>
                  : modifyAddressState.error ?
                    <div className="col-lg-12 col-md-12" style={{ color: "red", textAlign:"center" }}>Some error occured in saving address. Try saving again in a while.</div>
                    : <div className="col-lg-12 col-md-12">
                      <div className="save_btn" >
                        <a href="javascript:;" className="clv_btn"
                          onClick={saveAddressHandler}>save</a>
                      </div>
                    </div>
            }
          </div>
        </div>
        <span className="success_close" onClick={close}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 212.982 212.982" style={{ enableBackground: 'new 0 0 212.982 212.982' }} xmlSpace="preserve" width="11px" height="11px">
            <g>
              <path fill="#9dc709" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
                                c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
                                l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
                                c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
            </g>
          </svg>
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  token: selectAuthenticationToken,
  submitAddressState: selectAddAddress,
  modifyAddressState: selectModifyAddress
})

const mapDispatchToProps = dispatch => ({
  submitAddress: (payload, token) => dispatch(submitAddress(payload, token)),
  modifyAddress: (id, payload, token) => dispatch(modifyAddress(id, payload, token)),
  resetAddressState: () => dispatch(resetAddressState())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm)

