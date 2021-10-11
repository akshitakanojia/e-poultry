import React from 'react'
import deliveryImg from '../images/delivery-scooter.png'
function Services() {
	return (
		<div className="clv_service_wrapper clv_section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-6">
						<div className="clv_heading">
							<h3>Discover Services We Provided</h3>
							<div className="clv_underline"><img src="/images/underline3.png"  alt="poultry-farming-service-underline" /></div>
							<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
						</div>
					</div>
				</div>
				<div className="service_main_wrapper">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="row">
								<div className="col-md-6">
									<div className="service_block">
										<span></span>
										<div className="service_icon"><img src={deliveryImg} style={{maxWidth:"70px",maxHeight:"60px"}} alt="poultry-farming-service-1" /></div>
										{/* <h4>education &amp; events</h4> */}
										<h4>free delivery</h4>
										<div className="clv_underline"><img src="/images/service_underline.png" alt="poultry-farming-service-underline" /></div>
										<p>Dolor sit amet consectetur adipiscing elieri sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="service_block">
										<span></span>
										<div className="service_icon"><img src="/images/egg_service.png" alt="poultry-farming-service-eggs" /></div>
										<h4>organic eggs</h4>
										<div className="clv_underline"><img src="/images/service_underline.png" alt="poultry-farming-service-eggs-underline" /></div>
										<p>Dolor sit amet consectetur adipiscing elieri sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="service_block">
										<span></span>
										<div className="service_icon"><img src="/images/farm_service.png" alt="poultry-farming-service-our-farm" /></div>
										<h4>our farms</h4>
										<div className="clv_underline"><img src="/images/service_underline.png" alt="poultry-farming-service-our-farm-underline" /></div>
										<p>Dolor sit amet consectetur adipiscing elieri sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="service_block">
										<span></span>
										<div className="service_icon"><img src="/images/hens_service.png" alt="poultry-farming-service-the-best-hens" /></div>
										<h4>best quality chicken</h4>
										<div className="clv_underline"><img src="/images/service_underline.png" alt="poultry-farming-service-the-best-hens-underline" /></div>
										<p>Dolor sit amet consectetur adipiscing elieri sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services