import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { deleteAddress } from '../../redux/address/address.actions'
import { selectAuthenticationToken } from '../../redux/authentication/authentication.selectors'
import AddressForm from './AddressForm'

function AddressCard({ selectedId, address, token, deleteAddress, selected }){
  const {id,address_1,address_2,city,country,created,landmark,pin_code,state,updated} = address;
  const [openForm, setOpenForm] = useState(false)

  const handleDelete = () => {
    if(window.confirm('Are you sure to delete this address?')){ 
      deleteAddress(id, token)
    }
  }

  const handleSelected = () => {
    if (typeof selectedId !== "undefined"){
    selectedId(id)
    }
  }

  return (
    <>
    <div className="cards" onClick={handleSelected}>
    <div className={`card-item ${selected===id?'addr-select':''}`}>
    <div className="tick-addr"></div>
      <div className="card-info">
        <h2 className="card-title">{address_1} {address_2}</h2>
        <p className="card-intro">
        {
            landmark.length > 0 && <>{landmark}</>
          }
          <br/>{pin_code}
          <br/>{city}, {state}
        </p>
        <div >
          <span className="fa-stack fa-lg" onClick={()=>setOpenForm(true)}>
            <i className="fa fa-circle fa-stack-2x icon-background" style={{color:'#ddf587'}}></i>
            <i className="fas fa-edit fa-stack-1x" style={{cursor:'pointer'}}></i>
          </span>
          <span className="fa-stack fa-lg" onClick={handleDelete}>
            <i className="fa fa-circle fa-stack-2x icon-background" style={{color:'#ddf587'}}></i>
            <i className="fas fa-trash fa-stack-1x" style={{cursor:'pointer'}}></i>
          </span>
          {/* <span className="fa-stack fa-lg" >
            <i className="fa fa-circle fa-stack-2x icon-background" style={{color:'#ddf587'}}></i>
            <i className="fas fa-eye fa-stack-1x" style={{cursor:'pointer'}}></i>
          </span> */}
        </div>
        {/* <i className="fa fa-check" aria-hidden="true"></i> */}
      </div>
      
    </div>
  </div>
    {openForm&&<AddressForm setOpenForm={setOpenForm} address={address}/>}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  token : selectAuthenticationToken
})

const mapDispatchToProps = dispatch => ({
  deleteAddress : (id, token) => dispatch(deleteAddress(id, token))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddressCard)

// address_1: "address1"
// address_2: ""
// city: "Indore"
// country: "IN"
// created: "2020-11-09T13:52:09.155088+05:30"
// id: 1
// landmark: ""
// pin_code: "452016"
// state: "MP"
// updated: "2020-11-09T13:52:09.155043+05:30"

{/* <div className="col-lg-4 col-md-4">
      <div className="user_profile_section" style={{height:'250px'}}>
        {/* <div className="checkout_heading">
          <h3></h3>
        </div> 
        <div style={{paddingLeft:'20px'}}>
          <p>{address_1} {address_2}<br/>
          {
            landmark.length > 0 && <>{landmark}</>
          }
          <br/>{pin_code}
          <br/>{city}, {state}</p>
          
        </div>
        <div >
          {/* <i className="far fa-edit"></i> 
          <span className="fa-stack fa-lg" onClick={()=>setOpenForm(true)}>
            <i className="fa fa-circle fa-stack-2x icon-background" style={{color:'#ddf587'}}></i>
            <i className="fas fa-edit fa-stack-1x" style={{cursor:'pointer'}}></i>
          </span>
          <span className="fa-stack fa-lg" onClick={handleDelete}>
            <i className="fa fa-circle fa-stack-2x icon-background" style={{color:'#ddf587'}}></i>
            <i className="fas fa-trash fa-stack-1x" style={{cursor:'pointer'}}></i>
          </span>
          <span className="fa-stack fa-lg" >
            <i className="fa fa-circle fa-stack-2x icon-background" style={{color:'#ddf587'}}></i>
            <i className="fas fa-eye fa-stack-1x" style={{cursor:'pointer'}}></i>
          </span>
        </div>
      </div>
    </div> */}