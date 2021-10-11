import React from 'react'
import { Link } from 'react-router-dom'

import Breacdcrumb from '../components/Breadcrumb'

function Error({ match }) {
	return (
		<React.Fragment>
			<Breacdcrumb page='404' match={match} />
			<div className="error_wrapper clv_section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-">
							<div className="error_block">
								<div className="error_image">
									<h2>404</h2>
									<img src="/images/404_veg.png" alt="image" className="veg_img" />
									<img src="/images/404_shape.png" alt="image" className="shape_img" />
								</div>
								<div className="error_content">
									<h3><span>oops...</span> page not found</h3>
									<p>look like something was wrong we're working on it</p>
									<Link to='/' className="clv_btn">back to home</Link>
									{/*<a href="index.html" className="clv_btn">back to home</a>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Error