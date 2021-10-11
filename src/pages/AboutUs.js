import React from 'react'

import Breacdcrumb from '../components/Breadcrumb'

function AboutUs({ match }) {
	return (
		<React.Fragment>
			<Breacdcrumb page='about us' match={match} />
			<div className="clv_about_wrapper clv_section">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="about_img">
								<img src="/images/about_chik.jpg" alt="poultry-farming-about" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="about_content">
								<div className="about_heading">
									<h2>Welcome to Our <span>Poultry Farm</span></h2>
									<h6>Lorem Ipsum is simply dummy text of the printing</h6>
									<div className="clv_underline"><img src="/images/underline.png" alt="poultry-farming-welcome-heading-underline" /></div>
								</div>
								<div className="para_content">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatiomco laboris nisi ut aliquip ex ea commodo consequat. </p>
									<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fuiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offi deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error  eivoluptatem accusantium doloremque laudantium.</p>
								</div>
								<div className="video_block">
									<div className="video_btn">
										<a href="javascript:;" className="play_video"><span className="pulse"><i className="fa fa-play" aria-hidden="true"></i></span> watch video</a>
									</div>
									<a href="javascript:;" className="clv_btn">read more</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default AboutUs