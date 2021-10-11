import React from 'react'
import Address from './Address'
import Menu from './Menu'


function RightHeader() {
	return (
		<div className="col-lg-8 col-md-8">
			<div className="clv_right_header">
				<Address />
				<Menu />
			</div>
		</div>
	)
}

export default RightHeader