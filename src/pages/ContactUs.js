import React from 'react'
import Breacdcrumb from '../components/Breadcrumb'

function ContactUs({ match }) {
	return (
		<React.Fragment>
			<Breacdcrumb page='contact us' match={match} />
			<div className="contact_blocks_wrapper clv_section">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4">
							<div className="contact_block">
								<span></span>
								<div className="contact_icon"><img src="/images/contact_icon1.png" alt="image" /></div>
								<h4>contact us</h4>
								<p>+1-202-555-0132</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="contact_block">
								<span></span>
								<div className="contact_icon"><img src="/images/contact_icon2.png" alt="image" /></div>
								<h4>email</h4>
								<p>support@example.in</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="contact_block">
								<span></span>
								<div className="contact_icon"><img src="/images/contact_icon3.png" alt="image" /></div>
								<h4>address</h4>
								<p>Rock Hill, SC 29730</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default ContactUs