import React from 'react'

import Breacdcrumb from '../components/Breadcrumb'

function PrivacyPolicy({ match }){
    return (
        <React.Fragment>
			<Breacdcrumb page='privacy policy' match={match} />
        </React.Fragment>
    )
}

export default PrivacyPolicy

