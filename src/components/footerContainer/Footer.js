import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div className="clv_footer_wrapper clv_section">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-6">
						<div className="footer_block">
							<div className="footer_logo"><Link to='/'><img src="/images/footer_logo.png" alt="poultry-farming-footer-logo" /></Link></div>
							<p>Lorem ipsum dolor sit amet  onsectetadip isicing elit, sed do eiusmod tempordidunt ut labore et dolaliqua.</p>

						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="footer_block">
							<div className="footer_heading">
								<h4>support</h4>
								<img src="/images/footer_underline.png" alt="poultry-farming-support-underline" />
							</div>
							<ul className="useful_links">
								<li><Link to='/about-us'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>About Us</Link></li>
								{/* <li><a href="javascript:;"><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Delivery Information</a></li> */}
								<li><Link to='/privacy-policy'> <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Privacy Policy</Link></li>
								<li><Link to='/terms-n-condition'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Terms And Conditions</Link></li>
								<li><Link to='/contact-us'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Contact Us</Link></li>
							</ul>
						</div>
					</div>


					<div className="col-md-3 col-sm-6">
						<div className="footer_block">
							<div className="footer_heading">
								<h4>Stay connected</h4>
								<img src="/images/footer_underline.png" alt="poultry-farming-support-underline" />
							</div>
							{/* <ul className="useful_links">
								<li><Link to = '/about-us'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>About Us</Link></li>
								<li><a href="javascript:;"><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Delivery Information</a></li>
								<li><Link to = '/privacy-policy'> <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Privacy Policy</Link></li>
								<li><Link to = '/terms-n-condition'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Terms And Conditions</Link></li>
								<li><Link to = '/contact-us'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Contact Us</Link></li>
							</ul> */}

							{/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
							{/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
							{/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
							{/* <i className="fa fa-youtube-play" aria-hidden="true"></i> */}

							<a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook fa-3x fb" style={{ paddingRight: "10px" }} aria-hidden="true"></i></a>
							<a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-3x insta"  aria-hidden="true" ></i></a>

						</div>

					</div>
					<div className="col-md-3 col-sm-6">
						<div className="footer_block">
							{/* <div className="footer_heading">
								<h4>support</h4>
								<img src="/images/footer_underline.png" alt="poultry-farming-support-underline" />
							</div>
							<ul className="useful_links">
								<li><Link to = '/about-us'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>About Us</Link></li>
								 <li><a href="javascript:;"><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Delivery Information</a></li> 
								<li><Link to = '/privacy-policy'> <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Privacy Policy</Link></li>
								<li><Link to = '/terms-n-condition'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Terms And Conditions</Link></li>
								<li><Link to = '/contact-us'><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Contact Us</Link></li>
							</ul> */}
							<h6>call now</h6>
							<h3>+1-202-555-0132</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer