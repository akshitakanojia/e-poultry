import React from 'react'

import Breacdcrumb from '../components/Breadcrumb'

function TermsNConditions({ match }){
    return (
        <React.Fragment>
			<Breacdcrumb page='terms & conditions' match={match} />
        </React.Fragment>
    )
}

export default TermsNConditions