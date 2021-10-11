import React from 'react'
import ProductList from '../components/ProductList'
import Services from '../components/Services'
// import Testimonial from '../components/Testimonial'
//import Slider from '../components/sliderContainer/Slider'

function Home() {
	return (
		<React.Fragment>
			<ProductList />
			<Services />
			{/* <Testimonial /> */}
		</React.Fragment>
	)
}

export default Home