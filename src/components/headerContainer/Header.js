import React from 'react'
import Logo from './Logo'
import RightHeader from './RightHeader'

function Header() {
	return (
		<div className="clv_header">
			<div className="container">
				<div className="row">
					<Logo />
					<RightHeader />
				</div>
			</div>
		</div>
	)
}

export default Header