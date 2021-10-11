import React from 'react'

function Testimonial() {
	return (
		<div className="clv_testimonial_wrapper clv_section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-6">
						<div className="clv_heading white_heading">
							<h3>what people say about us</h3>
							<div className="clv_underline"><img src="/images/underline2.png" alt="poultry-farming-testimonial-underline" /></div>
							<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="testimonial_slider">
							<div className="swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
								<div className="swiper-wrapper" style={{ transitionDuration: "1500ms" }}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" style={{ width: "1170px", transitionDuration: "1500ms", opacity: "1", transform: "translate3d(0px, 0px, 0px)" }}>

									<div className="testimonial_slide">
										<span className="rounded_quote"><img src="/images/quote.png" alt="poultry-farming-testimonial-quote1" /></span>
										<span className="bg_quote"><img src="/images/bg_quote.png" alt="poultry-farming-testimonial-quote2" /></span>
										<div className="client_img">
											<img src="/images/client2.jpg" alt="poultry-farming-testimonial-2" />
										</div>
										<div className="client_message">
											<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi liquip ex ea commodoersio consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugt nulla pariatuaerniri Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ilabore et dadhjiolore magna aliqua.</p>
											<h3>john paradox <span> Poultry Expert</span></h3>
										</div>
									</div>
								</div>
									<div className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="0" style={{ width: "1170px", transitionDuration: "1500ms", opacity: "1", transform: "translate3d(-1170px, 0px, 0px)" }}>
										<div className="testimonial_slide">
											<span className="rounded_quote"><img src="/images/quote.png" alt="poultry-farming-testimonial-quote1" /></span>
											<span className="bg_quote"><img src="/images/bg_quote.png" alt="poultry-farming-testimonial-quote2" /></span>
											<div className="client_img">
												<img src="/images/client.jpg" alt="poultry-farming-testimonial-1" />
											</div>
											<div className="client_message">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ilabore et dadhjiolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi liquip ex ea commodoersio consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugt nulla pariatuaerniri Excepteur sint occaecat cupidatat non proident.</p>
												<h3>Halil Alex <span> Poultry Expert</span></h3>
											</div>
										</div>
									</div>
									<div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style={{ width: "1170px", transitionDuration: "1500ms", opacity: "1", transform: "translate3d(-2340px, 0px, 0px)" }}>
										<div className="testimonial_slide">
											<span className="rounded_quote"><img src="/images/quote.png" alt="poultry-farming-testimonial-quote1" /></span>
											<span className="bg_quote"><img src="/images/bg_quote.png" alt="poultry-farming-testimonial-quote2" /></span>
											<div className="client_img">
												<img src="/images/client2.jpg" alt="poultry-farming-testimonial-2" />
											</div>
											<div className="client_message">
												<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi liquip ex ea commodoersio consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugt nulla pariatuaerniri Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ilabore et dadhjiolore magna aliqua.</p>
												<h3>john paradox <span> Poultry Expert</span></h3>
											</div>
										</div>
									</div>
									<div className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style={{ width: "1170px", transitionDuration: "1500ms", opacity: "0", transform: "translate3d(-3510px, 0px, 0px)" }}>
										<div className="testimonial_slide">
											<span className="rounded_quote"><img src="/images/quote.png" alt="poultry-farming-testimonial-quote1" /></span>
											<span className="bg_quote"><img src="/images/bg_quote.png" alt="poultry-farming-testimonial-quote2" /></span>
											<div className="client_img">
												<img src="/images/client.jpg" alt="poultry-farming-testimonial-1" />
											</div>
											<div className="client_message">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ilabore et dadhjiolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi liquip ex ea commodoersio consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugt nulla pariatuaerniri Excepteur sint occaecat cupidatat non proident.</p>
												<h3>Halil Alex <span> Poultry Expert</span></h3>
											</div>
										</div>
									</div>
								</div>

								<span className="slider_arrow testimonial_left left_arrow" tabIndex="0" role="button" aria-label="Previous slide"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></span>
								<span className="slider_arrow testimonial_right right_arrow" tabIndex="0" role="button" aria-label="Next slide"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
								<span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonial