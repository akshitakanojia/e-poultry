import React, { useState } from 'react'
import AddressForm from './AddressForm'

function AddAddressCard (){
  const [openForm, setOpenForm] = useState(false);
  return(
    <>
    <div className="cards">
    <div className="card-item">
      <div className="card-info" onClick={()=>setOpenForm(true)}>
          {/* <div className="address-card"  > */}
          <div className="add-addr">
          <i className="fa fa-plus" style={{fontSize:'36px'}}></i>
          <h5>Add New Address</h5>
          </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      {
        openForm&&<AddressForm setOpenForm={setOpenForm}/>
      }
      </>

  )
}

export default AddAddressCard