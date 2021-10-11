import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { profileModify } from '../../redux/authentication/authentication.actions'
import { selectAuthenticationToken, selectProfile } from '../../redux/authentication/authentication.selectors'

function PersonalDetails({profileData, token, profileModify}) {
  const { name, contact_number, id } = profileData ? profileData : {}
  const [edit, setEdit] = useState(false)
  const [nameTemp, setNameTemp] = useState('')
	// const [addressTemp, setAddressTemp] = useState('')
  let isProfileComplete = profileData ? name.length > 0 && contact_number.length > 0 : false

  useEffect(() => {
		setNameTemp(name);
		// setAddressTemp(address);
	}, [profileData])

	const handleSubmit = () => {
		let payload = {
			name: nameTemp,
			// address: addressTemp
		}
		profileModify(payload, id, token)
		setEdit(false)
  }
  
  const editHandler = () => {
    setEdit(!edit);
    setNameTemp(name)
  }
 
  return (
    <div className="col-lg-12 col-md-12">
      <div className="user_profile_section">
        <div className="checkout_heading">
          <h3>Personal details</h3>
            <a href="javascript:;" onClick={editHandler}>
            <span>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="12px" height="12px" viewBox="0 0 485.219 485.22" style={{ enableBackground: "new 0 0 485.219 485.22" }}
                xmlSpace="preserve">
                <g>
                  <path fill="#9dc709" d="M467.476,146.438l-21.445,21.455L317.35,39.23l21.445-21.457c23.689-23.692,62.104-23.692,85.795,0l42.886,42.897
                                        C491.133,84.349,491.133,122.748,467.476,146.438z M167.233,403.748c-5.922,5.922-5.922,15.513,0,21.436
                                        c5.925,5.955,15.521,5.955,21.443,0L424.59,189.335l-21.469-21.457L167.233,403.748z M60,296.54c-5.925,5.927-5.925,15.514,0,21.44
                                        c5.922,5.923,15.518,5.923,21.443,0L317.35,82.113L295.914,60.67L60,296.54z M338.767,103.54L102.881,339.421
                                        c-11.845,11.822-11.815,31.041,0,42.886c11.85,11.846,31.038,11.901,42.914-0.032l235.886-235.837L338.767,103.54z
                                            M145.734,446.572c-7.253-7.262-10.749-16.465-12.05-25.948c-3.083,0.476-6.188,0.919-9.36,0.919
                                        c-16.202,0-31.419-6.333-42.881-17.795c-11.462-11.491-17.77-26.687-17.77-42.887c0-2.954,0.443-5.833,0.859-8.703
                                        c-9.803-1.335-18.864-5.629-25.972-12.737c-0.682-0.677-0.917-1.596-1.538-2.338L0,485.216l147.748-36.986
                                        C147.097,447.637,146.36,447.193,145.734,446.572z"/>
                </g>
              </svg>
            </span>
            edit profile
          </a>
        </div>
        {!isProfileComplete && <div style={{ color: "orange", textAlign: "center", paddingBottom: "20px" }}>Help us to serve you better by completing your profile 😄</div>}
        <div className="profile_form">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form_block">
                <h6>full name</h6>
                {
                  edit ? <input type="text" className="form_field" value={nameTemp} onChange={e => { setNameTemp(e.target.value) }} disabled={!edit} />
                    : <div>{nameTemp}</div>
                }
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form_block">
                <h6>contact no.</h6>
                {
                  edit ? <input type="text" className="form_field" value={contact_number} disabled />
                    : <div>{contact_number}</div>
                }
              </div>
            </div>
            {
            edit && <div className="col-lg-12 col-md-12">
              <div className="save_btn"><a href="javascript:;" className="clv_btn" onClick={handleSubmit}>save</a></div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
	profileData: selectProfile,
	token: selectAuthenticationToken
})

const mapDispatchToProps = dispatch => ({
	profileModify: (payload, id, token) => dispatch(profileModify(payload, id, token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails)