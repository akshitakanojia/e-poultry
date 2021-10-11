import React from 'react'

function Dropdown({ onSelectStatus }) {
	const handleChange = (val) => onSelectStatus(val);
	
	return (
		<select className="select-css" onChange={e => handleChange(e.currentTarget.value)}>
			<option defaultValue>All</option>
			<option>Ordered</option>
			<option>Accepted</option>
			<option>Rejected</option>
			<option>Delievered</option>
		</select>
	)
}

export default Dropdown