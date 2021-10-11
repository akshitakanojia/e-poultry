import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
	return (
		<div className="col-lg-4 col-md-4">
			<div className="clv_left_header">
				<div className="clv_logo">
					<Link to='/'>
						<img src="/images/logo.png" alt="direct-fresh-chicken-logo" />
					</Link>
				</div>
			</div>
		</div>

	)
}

export default Logo