import React from 'react'
import { Link } from 'react-router-dom'

function Breacdcrumb({ page, match }) {
	let parts = match.path.split("/");
	parts = parts.slice(1, parts.length - 1);
	
	return (
		<div className="breadcrumb_wrapper">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-4">
						<div className="breadcrumb_inner">
							<h3>{page}</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="breadcrumb_block">
				<ul>
					<li key="home"><Link to='/'>home </Link></li>
					{
						parts.map(path => {
							let temp = '/' + path
							return (
								<li key={path}><Link to={temp}> {path}</Link></li>
							)
						})
					}
					<li key={page}>  {page}</li>
				</ul>
			</div>
		</div>
	)
}

export default Breacdcrumb